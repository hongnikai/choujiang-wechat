//index.js
//获取应用实例
var app = getApp()
// var urls = require('../../app.js')
var urls = "https://www.kongtiaoguanjia.com/air/"
Page({
  data: {
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
    imgUrls:[],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
    indicatorColor: "#fff",
    indicatorActiveColor: "#7fd6d2",
    // 优惠活动-折扣专区
    backGroundImgDiscount:"../../img/img_zkzq@2x.png",
    // 优惠活动-保养套餐
    backGroundImgMaintenance:"../../img/img_home_bytc@2x.png",
    // 品牌活动-美的
    backGroundImgMeiDi:"../../img/img_home_md@2x.png",
    // 品牌活动-格力
    backGroundImgGeLi:"../../img/img_home_gl@2x.png",
    // 品牌活动-大金
    backGroundImgDaJin: "../../img/img_home_dj@2x.png",
    // 品牌活动-奥克斯
    backGroundImgAoKeSi: "../../img/img_home_aks@2x.png"
  },
  //商城
  toShop: function () {
    wx.navigateTo({
      url: '../classify/classify'
    })
  },
  // 搜索页面跳转
  toast:function(){
    wx.navigateTo({
      url: '../search/search'
    })
  },
  //商品详情页面跳转
  toDetail:function(e){
    const dataset = e.currentTarget.dataset;
    console.log(dataset.id);
    wx.navigateTo({
      url: '../detail/detail?id=' + dataset.id
    })
  },
  toKeywordsCommodity: function (e) {
    const dataset = e.currentTarget.dataset;
    console.log(dataset.keywords);
    wx.navigateTo({
      url: '../classify/classify?id=' + dataset.keywords
    })
  },
  //我要安装页面跳转
  toInstall:function(){
    wx.navigateTo({
      url: '../install/install'
    })
  },
  //我要保养页面跳转
  toUpkeep: function () {
    wx.navigateTo({
      url: '../upkeep/upkeep'
    })
  },
  //我要维修页面跳转
  toMaintain: function () {
    wx.navigateTo({
      url: '../maintain/maintain'
    })
  },
  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow:function(){
    var that = this
    // 轮播图
    /*wx.request({
      url:urls +'lc/sysdata/getSystemBanners.do',
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "POST", 
      dataType: 'JSON',
      success: function (res) {
        alert(res.object[0]);
        that.setData({
          imgUrls:[
            "res.object[0]",
            "res.object[1]",
            "res.object[2]"
          ]
        }) 
      },
      fail: function (res) {
        console.log('0')
      }
    }),*/
    //公告
    wx.request({
      url: urls + 'lc/sysdata/getSystemNotice.do',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      dataType: 'JSON',
      success: function (res) {
        var resMsg = JSON.parse(res.data)
        that.setData({
          msg: resMsg.object
        })
      },
      fail: function (res1) {
        console.log('0')
      }
    }),
    //优惠活动
    /*wx.request({
      url: urls + 'commodity/getCommodityActivity.do',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      dataType: 'JSON',
      data: { "commodity_mark": 1 },
      success: function (res) {
        that.setData({
          discountActivity: res.object
        })
      },
      fail: function (res1) {
        console.log('0')
      }
    }),
    //品牌活动
    wx.request({
      url: urls + 'commodity/getCommodityActivity.do',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      dataType: 'JSON',
      data: {"commodity_mark":4},
      success: function (res) {
        that.setData({
          commodityActivity: res.object
        })
      },
      fail: function (res1) {
        console.log('0')
      }
    }),*/
    //热销产品
    wx.request({
      url: urls + 'commodity/selectHotCommodity.do',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      dataType: 'JSON',
      success: function (res) {
        var resMsg = JSON.parse(res.data)
        that.setData({
          hotCommodity: resMsg.object
        })
      },
      fail: function (res1) {
        console.log('0')
      }
    })
  }
})
