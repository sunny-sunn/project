
//封装一个对象，这个对象包含get和post
var $ = {
  config: {},
  defaults: {
    baseURL: '',
    url: '',
    method: 'GET',
    contentType: 'application/json',
    headers: {},
    async: true,
    timeout: 3000,
    data: {},
    success: function(){},
    fail: function(){},
    upload: false,
  },
  ajax: function( options ){

    //将用户的参数合并默认参数，在将结果放入一个空对象中
    options = Object.assign({}, this.defaults, this.config, options);

    //创建一个xhr实例
    var xhr = new XMLHttpRequest();

    //设置超时时间
    xhr.timeout = options.timeout;

    //监测服务器返回的状态
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4){
        if(xhr.status === 200 ){
          //服务器返回信息，用回调函数接收
          options.success( JSON.parse(xhr.responseText)  );
        }
      }
    }

    //返回错误 用错误回调函数接收
    xhr.onerror =  options.fail;

    //设置请求地址
    var requestUrl = options.baseURL + options.url;

    //如果是GET类型，循环将前端data对象转换为url序列
    if(options.method.toUpperCase()==='GET'){
      var query = '?';
      for(let key in options.data){
        query+= key +'='+encodeURIComponent(options.data[key])+'&'
      }
      query = query.slice(0,-1);
      requestUrl += query;
    }

    //打开链接
    xhr.open(options.method, requestUrl, options.async);

    //设置文档请求类型
    !options.upload && xhr.setRequestHeader('Content-Type', options.contentType );

    //循环批量设置头部
    for(let key in options.headers){
      xhr.setRequestHeader(key, options.headers[key] );
    }

    //如果是POST类型
    var data = null;
    if(options.method.toUpperCase()==='POST'){
      if(/urlencoded|multipart/ig.test(options.contentType)){
        //url编码 和 二进制
        data  = new FormData();
        for(let key in options.data){
          data.append(key, options.data[key]);
        }
      }else if(options.upload){
        //上传文件方式
        data  = new FormData();
        data.append(options.data.name, options.data.files[0]);
      }else{
        //json方式
        data = JSON.stringify(options.data);
      }
    }

    //发送请求
    xhr.send( data );

  },
  param: function(args){
    //当没有参数可传递时，可能省略{}
    var isFn = typeof args[1] === 'function';
    return {
      url: args[0],
      data: isFn ? {} : args[1],
      success: isFn ? args[1] : args[2],
      fail: isFn ? args[2] : args[3],
    }
  },
  get: function(){
    this.ajax(this.param(arguments));
  },
  post: function(){
    this.ajax(Object.assign({method:'POST'},this.param(arguments)));
  },
  delete: function(){
    this.ajax(Object.assign({method:'DELETE'},this.param(arguments)));
  },
  patch: function(){
    this.ajax(Object.assign({method:'PATCH'},this.param(arguments)));
  },
  put: function(){
    this.ajax(Object.assign({method:'PUT'},this.param(arguments)));
  },
  upload: function(url, data, success, fail){
    this.ajax({url, method:'POST',upload: true, data, success, fail});
  },
  
}