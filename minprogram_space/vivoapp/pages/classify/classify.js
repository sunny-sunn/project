// pages/classify/classify.js
Page({
  data: {
    total:0,
    list:['张三','李四','王五']
  },
  add(){
    this.setData({
      total:this.data.total+1
    })
  }
})