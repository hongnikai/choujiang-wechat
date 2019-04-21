// pages/myOrder/myOrder.js
Page({
  data: {
    //全部默认选中
    isChecked1: true,
    //待付款默认未选中
    isChecked2: false,
    //未完成默认未选中
    isChecked3: false,
    //已完成默认未选中
    isChecked4: false
  },
  //点击全部更换样式
  textClick1: function () {
    this.setData({
      isChecked1: true,
      isChecked2: false,
      isChecked3: false,
      isChecked4: false
    })
  },
  //点击待付款更换样式
  textClick2: function () {
    this.setData({
      isChecked1: false,
      isChecked2: true,
      isChecked3: false,
      isChecked4: false
    })
  },
  //点击未完成更换样式
  textClick3: function () {
    this.setData({
      isChecked1: false,
      isChecked2: false,
      isChecked3: true,
      isChecked4: false
    })
  },
  //点击已完成更换样式
  textClick4: function () {
    this.setData({
      isChecked1: false,
      isChecked2: false,
      isChecked3: false,
      isChecked4: true
    })
  },
  toEmployeeCenter:function(){
    wx.navigateTo({
      url: '../employeeCenter/employeeCenter',
    })
  },
  toIndex: function () {
    wx.switchTab({
      url: '../index/index',
    })
  }
})