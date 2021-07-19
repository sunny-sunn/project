var http = axios.create({
  baseURL: 'http://cloud.scnew.com.cn/api',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    'SC-Token': 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyOSIsImF1ZCI6InRlc3QiLCJpYXQiOjE2MDAxNDEwNjQsInJvbGVzIjoiNCIsImV4cCI6MTk2MDE0MTA2NH0.g4_mSdEy6HhKmK8khunqaBxZmipFoaPdip6ur8H72Jk',
  }
});

http.interceptors.request.use(function(config){
  return config;
},error);

http.interceptors.response.use(function(response){
  return response.data;
},error);

function error(err){
  if(/Network(.*)Error/gi.test(err)){
    alert('请检查网络连接！');
  }else if(err.response){
    const{data,status} = err.response;
    if(status === 401){
      alert('访问被拒绝');
    }else if(status === 403){
      alert('资源不可用');
    }else if(status === 404){
      alert('找不到页面');
    }else if(status === 405){
      alert('不允许此方法');
    }else if(status === 500){
      alert('服务内部错误');
    }else{
      alert('未知错误');
    }
    return Promise.reject(err);
  }
}