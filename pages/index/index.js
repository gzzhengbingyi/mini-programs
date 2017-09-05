//index.js
//获取应用实例
var app = getApp();

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false
    },
    //事件处理函数
    bindViewTap: function() {
        console.log("tap")
    },
    //生命周期函数--监听页面加载
    onLoad: function() {
        if (app.data.userInfo) {
            this.setData({
                userInfo: app.data.userInfo,
                hasUserInfo: true
            })
        } else {
            // 由于 wx.getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = function(res){
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        }
    },
    getUserInfo: function(e) {
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})