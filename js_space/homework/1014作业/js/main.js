
//ajax全局配置，每个xhr请求都会附带这个授权码
$.config = {
  baseURL: 'http://cloud.scnew.com.cn/api/',
  headers: {
    'SC-Token': 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyOSIsImF1ZCI6InRlc3QiLCJpYXQiOjE2MDAxNDEwNjQsInJvbGVzIjoiNCIsImV4cCI6MTk2MDE0MTA2NH0.g4_mSdEy6HhKmK8khunqaBxZmipFoaPdip6ur8H72Jk'
  },
}

//全局变量缓存页码
var cpage = 1;

//一刷新页面就载入列表
list( cpage );

//xhr请求留言本最新数据
function list( page= 1 ){

  $.get('feedback/user',{tid:0},function(res){

    render( res.result, page );

  })

}

//渲染数组到列表
function render( data, page=1, perpage = 5 ){
  
  var total = data.length;
  var totalpage = Math.ceil(total/perpage);

  //解决删除页码后记住页码，以及当前页没有数据要前进一页。
  if(page > totalpage) page -= 1;
  cpage = page;

  var start = (page-1) * perpage;
  var end = start + perpage;

  var pageData = data.slice(start, end);

  //列表部分
  document.getElementById('list').innerHTML = pageData.reduce(function(temp,item){
    return temp + `
    <div class="item">
    <input type="checkbox">${item.title}<img src="images/1.jpg" width="50" alt="" align="absmiddle">${item.content}
    </div>
    `;
  },'') || '<tr><td class="nodata">没有任何数据</td></tr>'

  //页码部分
  var pageTemp = '';

  //上页
  if(page > 1) pageTemp = '<button>上页</button>';

  //页码
  for(var p=1;p<=totalpage;p++){
    var activeClass= (p===page?'active':'');
    pageTemp += '<button class='+activeClass+'>'+p+'</button>';
  }

  //下页
  if(page < totalpage) pageTemp += '<button>下页</button>';

  //将页码插入到文档中
  document.getElementById('pager').innerHTML = pageTemp;

  //使用事件代理实现页码单击效果
  document.getElementById('pager').onclick = function(ev){

    var btn = ev.target;

    //如果你单击的不是按钮，就中止
    if(btn.tagName.toLowerCase()!=='button') return;

    //上页
    if(btn.innerText === '上页'){
      render(data, page-1);
    }else if(btn.innerText === '下页'){
      render(data, page+1);
    }else{
      render(data, +btn.innerText);//前面的+号它执行隐式转换，将字符串转换为数值
    }

  }

}

//删除单项数据
function delItem(id, btn){

  if(confirm('您确认要删除此项吗？')){
    $.delete(`feedback/user/${id}`,{},function(res){
      if(res.err===0){
        alert(res.desc);

        //1. 使用dom操作删除相对下面的list，我们可以节省一次http请求。
        var tr = btn.closest('tr');
        tr.nextElementSibling.remove();
        tr.remove();

        //2. 重新读取，发送一次http请求
        // list( cpage );
      }
    })
  }

}

//添加留言信息
function addItem(){
  
  var content = document.getElementById('content');
  var contentVal = content.value.trim();

  if(contentVal == ''){
    alert('请输入内容！');
    content.focus();
    return false;
  }

  $.post('feedback/add',{
    asker: 1,
    tid: 0,
    content: contentVal,
  },function(res){

    if(res.err===0){

      console.log(res);
      // alert(res.desc);

      //1. 使用dom节点操作，可以减少一次http请求
      var info = res.result;
      document.getElementById('tbody').innerHTML = `
      <div class="item">
      <input type="checkbox">${item.title}<img src="images/1.jpg" width="50" alt="" align="absmiddle">${item.content}
      </div>
      ` +  document.getElementById('tbody').innerHTML;
 
      //2. 添加成功刷新数据
      // list( 1 );

      document.getElementById('write').reset();

    }

  })

}

//上传图片功能
function upload(file){

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState===4){
      if(xhr.status===200){
        var res = JSON.parse(xhr.responseText);
        document.getElementById('content').value += '<img src="'+res.result+'" >';
      }
    }
  }

  xhr.open('POST','http://cloud.scnew.com.cn/api/user/upload');

  var form = new FormData();
  form.append('file', file.files[0] );

  xhr.send(form);


}


//全选和取消全选功能函数
function checkAll( input ){

  document.querySelectorAll('[name="id"]').forEach(function(checkbox){
    checkbox.checked = input.checked;
  })

}

//批量删除操作
function batchDel(){
  var ids = [];
  document.querySelectorAll('[name="id"]').forEach(function(checkbox){
    if(checkbox.checked) ids.push(+checkbox.value);
  })

  if(!ids.length) {
    alert('请至少要选择一项！');
    return;
  }

  if(confirm('您确定要删除所选的记录吗？请注意此操作无法恢复！')){

    $.delete(`feedback/user/${ids.join()}`,{},function(res){
      if(res.err===0){
        alert(res.desc);

        //1. dom操作批量删除办法，减少一次http请求
        ids.forEach(function(id){
          var checkbox = document.querySelector('[name="id"][value="'+id+'"]');
          var tr = checkbox.closest('tr');
          tr.nextElementSibling.remove();
          tr.remove();
        })

        //2. 删除后立即刷新
        // list(cpage);
      }
    })

  }

}