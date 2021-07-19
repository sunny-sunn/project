//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    page: 1,
    perpage: 5,
    totalpage: 0,
    books: []
  },
  onLoad(){
    this.getBooks(books => {
      this.setData({books})
    })
  },
  getBooks(callback){
    wx.request({
      url: 'http://cloud.scnew.com.cn/api/course/book',
      success: res => {
        let books = res.data.result;
        let { page, perpage } = this.data;
        let start = (page - 1) * perpage;
        let end = start + perpage;
        this.setData({
          // books: books.slice(start, end),
          totalpage: Math.ceil(books.length / perpage)
        }),
        callback && callback(books.slice(start, end))
      }
    })
  },
  onPullDownRefresh(){
    let { page, totalpage } = this.data;
    if(page >= totalpage){
      wx.showToast({
        title: '没有数据了',
      })
      wx.stopPullDownRefresh();
      return;
    };
    this.setData({
      page: page + 1
    });
    this.getBooks(books => {
      this.setData({
        books: books.concat(this.data.books)
      })
      wx.stopPullDownRefresh();
    });
  },
  goPage(ev){
    let { page } = ev.currentTarget.dataset;
    this.setData({page});
    this.getBooks();
  }
})
