// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    circle:"",
    id:"",
    collected:null
  },
/**
   * 点击收藏
   */
  collect(e){
    //console.log(e);
    var _this=this
    wx.request({
      url: 'http://www.qzsc.com/test1221/Test/save', 
      data: {
      id:e.currentTarget.dataset.id
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        let collected=res.data.msg
        _this.setData({
          collected
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {

  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var _this=this
    wx.request({
      url: 'http://www.qzsc.com/test1221/Test/index', 
      header: {
        'content-type': 'application/json' // 默认值
      },
      dataType:'json',
      success (res) {
        console.log(res.data)
        let circle=res.data.result
        _this.setData({
          circle
        })
      },
  
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})