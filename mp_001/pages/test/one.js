// pages/test/one.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        count: 0
    },

    onTap(event){
        this.setData({
            count: this.data.count+1
        });
        console.log(event.target.dataset.info);
        console.log(event);
    },

    onPOST(e){
        console.log(e);
        wx.request({
          url: 'https://apis.bemfa.com/va/postJsonMsg', //请求地址,必须基于HTTPS协议
          method : 'POST', //请求方法
          "Content-Type": "application/json charset=utf-8",
          data: {
              "uid": "75002b158df945eeb9edcc3daf64ea87",
              "topic": "topic1",
              "type": 3,
              "msg": "on"
          },
          success: (res) => {//数据发送成功后接收的函数
              console.log(res.data.message);
          },
        })
    },

    mOnenet:function(e){
        wx.request({
            "url":"https://iot-api.heclouds.com/thingmodel/set-device-property",
            "method":"POST",
            "header":{
                "Content-Type":"application/json",
                "Authorization":"version=2018-10-31&res=products%2F2mW915JKR7%2Fdevices%2Ftest1&et=1704015246&method=md5&sign=WzpxQeOTUGdvJ3JHnaITrg%3D%3D",
            },
            "data":{
                "product_id":"2mW915JKR7",
                "device_name":"test1",
                "params":{
                    "temp":30
                }
            },
            success: (res) => {//数据发送成功后接收的函数
              console.log(res);
          },
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})