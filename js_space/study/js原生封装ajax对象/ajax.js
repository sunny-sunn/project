//模仿jquery的extend扩展深拷贝函数

//判断是否是朴素（普通）的对象
function isPlainObject(obj){
	let prototype;
	return Object.prototype.toString.call(obj) === '[object Object]' 
			&& (prototype = Object.getPrototypeOf(obj), prototype === null || 
			prototype == Object.getPrototypeOf({}))
}

function extend() {
	let deep = false;
	let name, options, src, copy, clone, copyIsArray;
	let length = arguments.length;
	let i = 1;
	let target = arguments[0] || {};
	if (typeof target == 'boolean') {
		deep = target;
		target = arguments[i] || {};
		i++;
	}
	if (typeof target !== "object" && !isFunction(target)) {
		target = {};
	}
	for (; i < length; i++) {
		options = arguments[i];
		if (options != null) {
			for (name in options) {
				src = target[name];
				copy = options[name];
				if (target === copy) continue;

				if (deep && copy && (isPlainObject(copy) ||
						(copyIsArray = Array.isArray(copy)))) {
					if (copyIsArray) {
						copyIsArray = false;
						clone = src && Array.isArray(src) ? src : [];
					} else {
						clone = src && isPlainObject(src) ? src : {};
					}
					target[name] = extend(deep, clone, copy);
				} else if (copy !== undefined) {
					target[name] = copy;
				}
			}
		}
	}
	return target;
}

//封装一个对象，这个对象包含get和post
var $ = {
  config: {},
  defaults: {
    url: '',
    method: 'GET',
    contentType: 'application/json',
    headers: {},
    async: true,
    timeout: 3000,
    data: {},
    success: function(){},
    fail: function(){},
  },
  ajax: function( options ){

    //将用户的参数合并默认参数，在将结果放入一个空对象中
    options = extend({}, this.defaults, this.config, options);

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
    var requestUrl = options.url;

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
    xhr.setRequestHeader('Content-Type', options.contentType );

    //循环批量设置头部
    for(let key in options.headers){
      xhr.setRequestHeader(key, options.headers[key] );
    }

    //如果是POST类型
    var data = null;
    if(options.method.toUpperCase()==='POST' && Object.keys(options.data).length){
      //json方式
      data = JSON.stringify(options.data);

      //url编码 和 二进制
      if(/urlencoded|multipart/ig.test(options.contentType)){ 
        var data  = new FormData();
        for(let key in options.data){
          data.append(key, options.data[key]);
        }
      }
    }

    //发送请求
    xhr.send( data );

  },
  get: function(url, data, success, fail){
    this.ajax({url, data, success, fail});
  },
  post: function(url, data, success, fail){
    this.ajax({url, method:'POST', data, success, fail});
  },
  delete: function(url, data, success,fail){
    this.ajax({url, method:'DELETE', data, success, fail});
  },
  patch: function(url, data, success,fail){
    this.ajax({url, method:'PATCH', data, success, fail});
  },
  put: function(url, data, success,fail){
    this.ajax({url, method:'PUT', data, success, fail});
  },
  
}
