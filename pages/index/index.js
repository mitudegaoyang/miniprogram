//index.js
//获取应用实例
const app = getApp()

//dayjs
const dayjs = require('../../utils/dayjs@1.8.21.min.js')
const util = require('../../utils/util.js')

Page({
  data: {
    motto: '知言 善行 笃学 慎思',
    src: "https://s3.ax1x.com/2021/01/12/sG4eTP.jpg",
    age: "",
    seniority: "",
    userInfo: {
      name: "高天阳",
      address: "北京",
      post: "前端开发",
      birthday: "1992-01-01",
      seniority: "2016-01-01",
      school: "北京城市学院",
      degree: "本科",
      phone: "136****5113",
      email: "136****5113@163.com"
    },
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    current: "0"
  },
  onShow: function () {
    var width = wx.getSystemInfoSync().windowWidth
    var height = wx.getSystemInfoSync().windowHeight
  },
  onLoad: function () {
    let age = dayjs().diff(this.data.userInfo.birthday, "year")
    let seniority = util.toString(dayjs().diff(this.data.userInfo.seniority, "year"))
    this.setData({
      age: age,
      seniority: seniority
    })
  },
})
