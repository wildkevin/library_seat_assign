//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    image_url: ['/images/lib_img01.jpg', '/images/lib_img02.jpg', '/images/lib_img03.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 3000,
    duration: 500,
    times: [
      "10:00 ~ 11:00", 
      "11:00 ~ 12:00",
      "12:00 ~ 13:00", 
      "13:00 ~ 14:00", 
      "14:00 ~ 15:00", 
      "15:00 ~ 16:00", 
    ],
    indexId: 0,

    seat_url: ['/images/seat_a.png', '/images/seat_na.png', '/images/seat_sel.png'],
    seat_a: '/images/seat_a.png',
    seat_na: '/images/seat_na.png',
    seat_sel: '/images/seat_sel.png',
    seat_map: [
      [1,2,3,4,5,6],
      [7,8,9,10,11,12],
      [13,14,15,16,17,18],
      [19,20,21,22,23,24],
      [25,26,27,28,29,30]
    ],

    isSel: false
  },

  switchSel(e) {
    console.log("get clicked")
    this.setData({
      isSel: true
    })
  },

  swithcNSel(e) {
    console.log("unselect")
    this.setData({
      isSel: false
    })
  },

  // 左侧点击事件
  jumpIndex(e) {
    let index = e.currentTarget.dataset.menuindex
    let that = this
    that.setData({
      indexId: index
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          winHeight: res.windowHeight
        });
      }
    });

  }
})
