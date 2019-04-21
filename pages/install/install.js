Page({
  data:{
    installTypeList: [
      { "installType": "单装", "id": "1" }, { "installType": "单拆", "id": "2" }, { "installType": "移机", "id": "3" }, { "installType": "新空调安装", "id": "4" }
    ],
    brandTypeList: [
      { "brandType": "美的", "id": "1" }, { "brandType": "格力", "id": "2" }, { "brandType": "大金", "id": "3" }, { "brandType": "奥克斯", "id": "4" }
    ],
    useTypeList: [
      { "useType": "家用分体式", "id": "1" }, { "useType": "家用中央空调", "id": "2" }, { "useType": "商用中央空调", "id": "3" }
    ],
    CTypeList: [
      { "CType": "挂机", "id": "1" }, { "CType": "柜机", "id": "2" }, { "CType": "天井机", "id": "3" }
    ],
    PTypeList: [
      { "PType": "1匹", "id": "1" }, { "PType": "小1.5匹", "id": "2" }, { "PType": "1.5匹", "id": "3" }, { "PType": "2匹", "id": "4" }, { "PType": "2.5匹", "id": "5" }, { "PType": "3匹", "id": "6" }
    ]
  },
  //安装类型点击切换样式
  installTypeSelection(options) {
    var that = this
    var id = options.currentTarget.dataset.id;
    //设置当前样式 
    that.setData({
      'installTypeItem': id
    })
  },
  //品牌点击切换样式
  brandTypeSelection(options) {
    var that = this
    var id = options.currentTarget.dataset.id;
    //设置当前样式
    that.setData({
      'brandTypeItem': id
    })
  },
  //空调用途点击切换样式
  useTypeSelection(options) {
    var that = this
    var id = options.currentTarget.dataset.id;
    //设置当前样式
    that.setData({
      'useTypeItem': id
    })
  },
  //空调类型点击切换样式
  CTypeSelection(options) {
    var that = this
    var id = options.currentTarget.dataset.id;
    //设置当前样式
    that.setData({
      'CTypeItem': id
    })
  },
  //空调匹数点击切换样式
  PTypeSelection(options) {
    var that = this
    var id = options.currentTarget.dataset.id;
    //设置当前样式
    that.setData({
      'PTypeItem': id
    })
  }
})