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
      name: "姓名",
      job: "WEB前端开发",
      birthday: "1992-01-01",
      seniority: "2016-01-01",
      degree: "学历",
      phone: "123",
      email: "123@163.com"
    },
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    current: "1"
  },
  onShow: function () {
    var width = wx.getSystemInfoSync().windowWidth
    var height = wx.getSystemInfoSync().windowHeight
    console.log(width)
    console.log(height)
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
