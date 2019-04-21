Page({
  data:{

  },
  toSetDefaultAdd:function(){
    wx.navigateTo({
      url: '../setDefaultAddress/setDefaultAddress',
    })
  },
  toEditAddress:function(){
    wx.navigateTo({
      url: '../editAddress/editAddress',
    })
  },
  toAddAddress:function(){
    wx.navigateTo({
      url: '../addAddress/addAddress',
    })
  }
})