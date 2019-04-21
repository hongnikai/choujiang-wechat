Page({
  data: {
  
  },
  toMineMsg:function(){
    wx.navigateTo({
      url: '../mineMsg/mineMsg',
    })
  },
  toSetup:function(){
    wx.navigateTo({
      url: '../employeeSetup/employeeSetup',
    })
  },
  toIndex:function(){
    wx.switchTab({
      url: '../index/index',
    })
  },
  toEmployeeOrder:function(){
    wx.navigateTo({
      url: '../employeeOrder/employeeOrder',
    })
  }
})