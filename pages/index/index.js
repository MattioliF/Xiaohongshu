// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    currentUser: null,
  },

  onLoad: function (options) {
    console.log(app.globalData)
    this.setData({
      currentUser: app.globalData.userInfo
    })
    
  },

  userInfoHandler: function(data) {
    const self = this
    wx.BaaS.auth.loginWithWechat(data).then(
      (res) => {
        console.log('results',res)
        self.setData ({
          currentUser:res
        }),
        wx.setStorageSync('userInfo', res)
        getApp().globalData.userInfo = res
      },
      (err) => {
      },
    )
  },

  startOrder: function() {
    wx.switchTab({
      url: '/pages/show/show',
    })
  }
})
