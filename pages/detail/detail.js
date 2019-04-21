Page({
  data:{
    backImage:"../../img/img_detal@2x.png",
    // input默认是1  
    num: 1,
    // 使用data数据对象设置样式名  
    minusStatus: 'disabled'  
  },
  // 点击参数显示弹框
  parameterAppear: function (options) {
    var that = this
    that.setData({
      'showView': true,
      'showView1': true
    })
  },
  // 点击灰色部分隐藏弹框
  clickHide: function () {
    var that = this
    that.setData({
      'showView': false,
      'showView1': false,
      'showView2': false
    })
  },
  /* 点击减号 */
  bindMinus: function () {
    var num = this.data.num;
    // 如果大于1时，才可以减  
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 点击加号 */
  bindPlus: function () {
    var num = this.data.num;
    // 不作过多考虑自增1  
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 输入框事件 */
  bindManual: function (e) {
    var num = e.detail.value;
    // 将数值与状态写回  
    this.setData({
      num: num
    });
  },
  // 点击购物车显示弹框
  shopCarShow: function (options) {
    var that = this
    that.setData({
      'showView': true,
      'showView2': true
    })
  },
  //点击跳转到购物车界面
  toShopCar:function(){
    wx.navigateTo({
      url: '../shopCar/shopCar'
    })
  },
  onShow: function () {
    var that = this
    wx.request({
      //商品详情（）
      url: urls + 'commodity/selectCommodityBycIdAndTarget.do',
      data: {
        c_id: 1
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      dataType: 'JSON',
      success: function (res) {
        var resMsg = JSON.parse(res.data)
        that.setData({
          goods: resMsg
        })
      },
      fail: function (res1) {
        console.log('0')
      }
    })
  }
})