var categorys = [
  {id:1,name:'iQOO'},
  {id:2,name:'NEX'},
  {id:3,name:'X系列'},
  {id:4,name:'S系列'},
  {id:5,name:'Y系列'},
  {id:6,name:'Z系列'},
  {id:7,name:'U系列'},
  {id:8,name:'手机充电'},
  {id:9,name:'手机配件'},
  {id:10,name:'音乐设备'},
  {id:11,name:'智能硬件'},
  {id:12,name:'游戏摄影'},
  {id:13,name:'日用出行'}
];

var sort = Array.from(document.querySelectorAll('.content > a'));

showCategory( categorys );

var posArr = sort.map(function(item,index){
  return document.getElementById(index+1).offsetTop;
})

function showCategory( data ){
  document.querySelector('.category').innerHTML = data.reduce(function(temp, item, index){
    return temp + `<li class="${index===0?'active':''}" onclick="switchNav(${item.id})">${item.name}</li>`;
  },'');
}

function switchNav(id){
  //转到指定的菜单
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}


function getCateName( id ){
  return categorys.find(function(item){
    return item.id === id;
  })['name'];
}

document.querySelector('.content').onscroll = function(){

  var top = this.scrollTop ;
  var lis = document.querySelectorAll('.category li');

  lis.forEach(function(item){
    item.className='';
  })

  var len = posArr.length;
  var maxIndex = len-1;
  for(var i=0;i<len;i++){
    if(top >= posArr[i] && top < posArr[i+1]){
      lis[i].className='active';
    }else if(top >= posArr[maxIndex]){
      lis[maxIndex].className='active';
    }
  }

}