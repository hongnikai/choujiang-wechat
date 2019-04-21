var urls = "http://www.kongtiaoguanjia.com/air/"
Page({
  data:{
    //品牌循环数据
    brandList:[
      { "brand": "美的", "id": "1" }, { "brand": "格力", "id": "2" }, { "brand": "大金", "id": "3" }, { "brand": "奥克斯", "id": "4"}
    ],
    //空调种类循环数据
    typeList:[
      { "type": "家用分体空调", "id": "1" }, { "type": "家用中央空调", "id": "2" }, { "type": "商用中央空调", "id": "3" }
    ],
    //分类循环数据
    classifyList: [
      { "type": "挂机", "id": "1" }, { "type": "柜机", "id": "2" }, { "type": "天井机", "id": "3" }
    ],
    //频率循环数据
    frequencyList: [
      { "type": "定频", "id": "1" }, { "type": "变频", "id": "2" }
    ],
    //功率循环数据
    powerList: [
      { "type": "1匹", "id": "1" }, { "type": "小于1.5匹", "id": "2" }, { "type": "1.5匹", "id": "3" }, { "type": "2匹", "id": "4" }, { "type": "2.5匹", "id": "5" }, { "type": "3匹", "id": "6" }, { "type": "4匹及以上", "id": "7" }
    ],
    isChecked:false,
    showView:false
  },
  //品牌点击切换样式
  brandSelection(options) {
    var that = this
    var id = options.currentTarget.dataset.id;
    //设置当前样式
    that.setData({
      'currentItem': id
    })
  },
  //空调种类点击切换样式
  typeSelection(options) {
    var that = this
    var id = options.currentTarget.dataset.id;
    //设置当前样式
    that.setData({
      'typeItem': id
    })
  },
  //分类点击切换样式
  classifySelection(options) {
    var that = this
    var id = options.currentTarget.dataset.id;
    //设置当前样式
    that.setData({
      'classifyItem': id
    })
  },
  //频率点击切换样式
  frequencySelection(options) {
    var that = this
    var id = options.currentTarget.dataset.id;
    //设置当前样式
    that.setData({
      'frequencyItem': id
    })
  },
  //功率点击切换样式
  powerSelection(options) {
    var that = this
    var id = options.currentTarget.dataset.id;
    //设置当前样式
    that.setData({
      'powerItem': id
    })
  },
  // 点击筛选显示弹框
  clickAppear: function (options){
    var that = this
    that.setData({
      'showView': true
    })
  },
  // 点击灰色部分隐藏弹框
  clickHide:function(){
    var that = this
    that.setData({
      'showView': false
    })
  },
  // 搜索页面跳转
  toast: function () {
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  searchValue:function(e){
    console.log(e.detail.value)
    this.setData({
      
    })
  }
  //搜索之后显示搜索信息
  // onShow:function(){
  //   var that = this
  //   wx.request({
  //     url: urls +'commodity/selectCommodityByscreen.do',
  //     header: {
  //       'content-type': 'application/json' // 默认值
  //     },
  //     method: "POST",
  //     dataType: 'JSON',
  //     success: function (res) {
  //       that.setData({
  //         searchList: res.data
  //       })
  //     },
  //     fail: function (res) {
  //       console.log('0')
  //     }
  //   })
  // }
})