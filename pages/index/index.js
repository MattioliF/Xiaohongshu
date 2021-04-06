// index.js
// 获取应用实例

Page({
  data: {
    currentUser: null,
  },

  onLoad: function (options) {
    
  },

  

  goToShowPage: function() {
    wx.switchTab({
      url: '/pages/show/show',
    })
  },
})

