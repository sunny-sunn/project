//将扁平的数组转换为堆叠形式的数组
function treeArr( data, tid=0 ){
  var arr = [];
  data.forEach(function(item){
    if(item.tid === tid){
      arr.push(item);
      let children = treeArr(data, item.id);
      children.length && (item.children = children);
    }
  })
  return arr;
}

//将堆叠的数组渲染为无限级评论列表
function renderTree( data ){
  var temp = '';
  data.forEach(function(item){
    temp += `<div class="item">`;
    temp += `<input name="id" type="checkbox" value="${item.id}" onchange="checkUse(this)"> `;
    temp += item.content;
    temp += ` <a onclick="reply(this,${item.id})">回复</a>`;
    if(item.children && item.children.length){
      temp += renderTree( item.children );
    }
    temp += `</div>`;
  });
  return temp;
}

//1. ajax全局配置
$.config = {
  baseURL: 'http://cloud.scnew.com.cn/api/',
  headers: {
    'SC-Token': 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyOSIsImF1ZCI6InRlc3QiLCJpYXQiOjE2MDAxNDEwNjQsInJvbGVzIjoiNCIsImV4cCI6MTk2MDE0MTA2NH0.g4_mSdEy6HhKmK8khunqaBxZmipFoaPdip6ur8H72Jk'
  },
}

var comment = []; //全局数组，便于其他函数调用

var cpage = 1; //全局变量缓存当前页码，方便各个函数内部调用

//2. 获取评论信息
list( cpage ); //一打开就执行，读取评论列表

//http请求远程评论数据
function list( page=1 ){
 
  $.get('feedback/user',function(res){
    comment = res.result; //当从服务器拿到最新评论信息后，将它同步到全局comment
    show(res.result, page);
  })
  
}

//将数组渲染为dom列表
function show(data, page=1 ){

  var treeData = treeArr(data);
  var total = treeData.length;
  var perpage = 2;
  var totalpage = Math.ceil(total/perpage);

  if(page > totalpage) page -= 1;
  cpage = page;

  var start = (page-1) * perpage;
  var end = start + perpage;

  var pageData = treeData.slice(start, end);
  
  //列表部分
  document.getElementById('list').innerHTML = renderTree( pageData ) || '<p align="center">暂时没有数据！</p>';

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

    //绑定单击的目标对象
    var btn = ev.target;

    //如果你单击的不是按钮，就中止
    if(btn.tagName.toLowerCase()!=='button') return;

    //上页
    if(btn.innerText === '上页'){
      show(data, page-1);
    }else if(btn.innerText === '下页'){
      show(data, page+1);
    }else{
      //前面的+号它执行隐式转换，将字符串转换为数值
      show(data, +btn.innerText);
    }

  }

}

//全选反选功能
function checkAll(input){

  document.querySelectorAll('#list [name="id"]').forEach(function(checkbox){
    checkbox.checked = input.checked;
  })

}

//单击所有的子类checkbox选中
function checkUse(input){
  input.parentElement.querySelectorAll('[name="id"]').forEach(function(checkbox){
    checkbox.checked = input.checked;
  })
}

//批量删除
function batchDel(){
  var ids = [];
  document.querySelectorAll('#list [name="id"]').forEach(function(checkbox){
    if(checkbox.checked) ids.push(+checkbox.value);
  })

  if(!ids.length){
    alert('请至少选择一个！');
    return;
  }
  if(confirm('您确定要删除所选择的项吗？')){
    $.delete(`feedback/user/${ids.join()}`,function(res){
      if(res.err===0){
        alert(res.desc);
        
        //先删除comment的数据
        comment = comment.filter(function(item){
          return !ids.includes(item.id);//排除法删除
        })

        //刷新数据
        show(comment, cpage);

        //取消全选上的打勾
        document.getElementById('checkEl').checked = false;

      }
    })
  }

}

//上传图片
function upload(file){

  $.upload('user/upload', file, function(res){
    if(res.err===0){
      document.getElementById('content').value += `<img src="${res.result}">`;
    }
  })

}

//添加评论
function addItem(){

  var content = document.getElementById('content');
  var contentVal = content.value.trim();
  if(contentVal == ''){
    alert('请输入内容');
    content.focus();
    return false;
  }

  $.post('feedback/add',{
    asker: 1,
    tid: 0,
    content: contentVal
  },function(res){

    if(res.err===0){

      alert(res.desc);

      comment.unshift( res.result );

      show(comment, 1);

      content.value = '';
      content.focus();

    }

  })


}

//回复功能
function reply(place, id ){
  var contentVal =  prompt('请输入评论内容！');
  if(!contentVal || contentVal =='' ){
    return;
  }

  $.post('feedback/add',{
    asker: 1,
    tid: id,
    content: contentVal
  },function(res){

    if(res.err===0){

      var item = res.result;

      //dom操作在回复的后面插入评论信息
      var div = document.createElement('div');
      div.className='item';

      var input = document.createElement('input');
      input.name='id';
      input.type='checkbox';
      input.value = item.id;

      var a = document.createElement('a');
      a.innerText = '回复';
      a.onclick = function(){
        reply(this, item.id);
      };

      div.append(input,' ', item.content, ' ', a);

      place.parentElement.append( div );

    }

  })

}