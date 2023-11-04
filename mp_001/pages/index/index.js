// index.js
// 获取应用实例
const app = getApp()
let tcps = app.globalData.tcp;

let s = "Hello World123HW456";

console.log(s.match(/\d+/));
console.log(s.match(/\d+/g)[1]);

Page({
    data: {
        display: 1,
        temp: undefined,
    },

    onMyLearnView() {
        wx.navigateTo({//页面跳转，html的href属性
            url: '../test/one',
        })

        //   wx.redirectTo({
        //     url: '../test/one', //html的open函数
        //   })

        tcps.write("AT\\r\\n");
    },

    arrayBufferToString(res) {
        return String.fromCharCode.apply(null, new Uint8Array(res));
    },

    getMessage: function (mess) {
        console.log(this.arrayBufferToString(mess.message));
    },

    getTemp:function(){
        wx.request({
          url: 'https://iot-api.heclouds.com/thingmodel/query-device-property',
          method: 'GET',
          header: {
            "Authorization": 'version=2018-10-31&res=products%2F2mW915JKR7%2Fdevices%2Ftest1&et=1704015246&method=md5&sign=WzpxQeOTUGdvJ3JHnaITrg%3D%3D',
          },
          data:{
            "product_id": "2mW915JKR7",
            "device_name":"test1",
          },
          success:(res)=>{
            var _this = this;
            _this.setData({
                temp: res.data.data[0].value,
            });
          }
        });
    },

    // 事件处理函数
    onLoad() {
        setInterval(this.getTemp,5000);
    },

    onReady(){
        // tcps.connect({
        //     address: "192.168.3.64",
        //     port: 6666
        // });
        // tcps.onMessage(this.getMessage);
        // tcps.onError((error) => {
        //     console.log(error);
        // })

    },

    stateHandler:function(e) {
        if (e.detail.value)
            console.log("真");
        else
            console.log("假");
    },
})
