// pages/bookingTime/bookingTime.js
var util = require('../../utils/util.js')
var date = util.formatTime2(new Date)
Page({
  data: {
    dates: date,
    timeList: [
      { "time": "全天", "id": "1" }, { "time": "上午", "id": "2" }, { "time": "下午", "id": "3" }
    ]
  },
  //  点击日期组件确定事件  
  bindDateChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      dates: e.detail.value
    })
  },
  //时间段点击切换样式
  timeSelection(options) {
    var that = this
    var id = options.currentTarget.dataset.id;
    //设置当前样式
    that.setData({
      'timeItem': id
    })
  },
  //点击跳转回上一页
  toInstallConfirmOrder:function(){
    wx.navigateBack({
      
    })
  }
})