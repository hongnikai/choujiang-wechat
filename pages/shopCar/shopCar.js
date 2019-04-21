Page({
  data:{
    isAllSelect: false,
    totalMoney: 0,
    // 商品详情介绍
    carts: [
      {
        pic: "../../img/img_sp@2x.png",
        name: "美的空调",
        style:"xxkuan",
        price: 200,
        isSelect: false,
        num:2
      },
      {
        pic: "../../img/img_sp@2x.png",
        name: "格力空调",
        style: "xxkuan",
        price: 200,
        isSelect: false,
        num: 1
      },
      {
        pic: "../../img/img_sp@2x.png",
        name: "1匹格力空调",
        style: "xxkuan",
        price: 1200,
        isSelect: false,
        num: 5
      },
      {
        pic: "../../img/img_sp@2x.png",
        name: "大金立式空调",
        style: "xxkuan",
        price: 4200,
        isSelect: false,
        num: 3
      }
    ]
  },
  //勾选事件处理函数 
  switchSelect: function (e) {
    // 获取item项的id，和数组的下标值 
    var Allprice = 0, i = 0;
    let id = e.target.dataset.id,
    index = parseInt(e.target.dataset.index);
    this.data.carts[index].isSelect = !this.data.carts[index].isSelect;
    //价钱统计
    if (this.data.carts[index].isSelect) {
      this.data.totalMoney = this.data.totalMoney + this.data.carts[index].price * this.data.carts[index].num;
    }
    else {
      this.data.totalMoney = this.data.totalMoney - this.data.carts[index].price * this.data.carts[index].num;
    }
    //是否全选判断
    for (i = 0; i < this.data.carts.length; i++) {
      Allprice = Allprice + this.data.carts[i].price * this.data.carts[i].num;
    }
    if (Allprice == this.data.totalMoney) {
      this.data.isAllSelect = true;
    }
    else {
      this.data.isAllSelect = false;
    }
    this.setData({
      carts: this.data.carts,
      totalMoney: this.data.totalMoney,
      isAllSelect: this.data.isAllSelect,
    })
  },
  //全选
  allSelect: function (e) {
    //处理全选逻辑
    let i = 0;
    this.data.totalMoney = 0;
    if (!this.data.isAllSelect) {
      for (i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isSelect = true;
        this.data.totalMoney = this.data.totalMoney + this.data.carts[i].price * this.data.carts[i].num;
      }
    }
    else {
      for (i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isSelect = false;
      }
      this.data.totalMoney = 0;
    }
    this.setData({
      carts: this.data.carts,
      isAllSelect: !this.data.isAllSelect,
      totalMoney: this.data.totalMoney
    })
  },
  //跳转结算--确认订单界面
  toJieSuan:function(){
    wx.navigateTo({
      url: '../confirmOrder/confirmOrder'
    })
  }
})