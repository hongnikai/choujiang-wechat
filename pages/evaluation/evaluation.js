Page({
  data: {
    one_1: 0,
    two_1: 5,
    one_2: 0,
    two_2: 5,
    one_3: 0,
    two_3: 5    
  },
  //商品评价评分
  in_xin1: function (e) {
    var in_xin1 = e.currentTarget.dataset.in;
    var one_1;
    if (in_xin1 === 'use_sc1') {
      one_1 = Number(e.currentTarget.id);
    } else {
      one_1 = Number(e.currentTarget.id) + this.data.one_1;
    }
    this.setData({
      one_1: one_1,
      two_1: 5 - one_1
    })
  },
  //销售员评价评分
  in_xin2: function (e2) {
    var in_xin2 = e2.currentTarget.dataset.in;
    var one_2;
    if (in_xin2 === 'use_sc2') {
      one_2 = Number(e2.currentTarget.id);
    } else {
      one_2 = Number(e2.currentTarget.id) + this.data.one_2;
    }
    this.setData({
      one_2: one_2,
      two_2: 5 - one_2
    })
  },
  //安装工评价评分
  in_xin3: function (e3) {
    var in_xin3 = e3.currentTarget.dataset.in;
    var one_3;
    if (in_xin3 === 'use_sc3') {
      one_3 = Number(e3.currentTarget.id);
    } else {
      one_3 = Number(e3.currentTarget.id) + this.data.one_3;
    }
    this.setData({
      one_3: one_3,
      two_3: 5 - one_3
    })
  } 
})