Page({
  data:{
    userInfo: {}
  }, 
  onLoad: function (options) {
    var that = this
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
      console.log(userInfo);
      that.update
    })
  },
  //跳转设置页面
  toSetup:function(){
    wx.navigateTo({
      url: '../setup/setup'
    })
  },
  //跳转我的消息页面
  toMineMsg:function(){
    wx.navigateTo({
      url: '../mineMsg/mineMsg',
    })
  },
  //跳转我的地址页面
  toMineLocation:function(){
    wx.navigateTo({
      url: '../mineLocation/mineLocation',
    })
  },
  //跳转我的收藏页面
  toMyCollection:function(){
    wx.navigateTo({
      url: '../myCollection/myCollection',
    })
  }
})