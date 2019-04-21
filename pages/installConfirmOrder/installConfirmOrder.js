// pages/installConfirmOrder/installConfirmOrder.js
Page({
  data:{

  },
  //跳转我的地址页面
  toMineLocation:function(){
    wx.navigateTo({
      url: '../mineLocation/mineLocation',
    })
  },
  //跳转预约上门时间页面
  toBookingTime:function(){
    wx.navigateTo({
      url: '../bookingTime/bookingTime',
    })
  }
})