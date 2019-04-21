Page({
  data: {
    employeesWorkTypeList: [
      { "employeesWorkType": "销售部", "id": "1" }, { "employeesWorkType": "安装部", "id": "2" }
    ]
  },
  //安装类型点击切换样式
  employeesWorkTypeSelection(options) {
    var that = this
    var id = options.currentTarget.dataset.id;
    //设置当前样式 
    that.setData({
      'employeesWorkTypeItem': id
    })
  },
  toEmployeesList:function(){
    wx.navigateTo({
      url: '../employeesList/employeesList',
    })
  }
})