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
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    indicatorDots: false,
    enhanced: true,
    pagingEnabled: true,
    itemList: ['item1', 'item2', 'item3', 'item4'],
    item: "item2"
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../detail/index'
    })
  },
  onLoad: function () {
    let age = dayjs().diff(this.data.userInfo.birthday, "year")
    let seniority = util.toString(dayjs().diff(this.data.userInfo.seniority, "year"))
    this.setData({
      age: age,
      seniority: seniority
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 触摸开始事件
  touchStart: function (e) {
    touchDot = e.touches[0].pageX; // 获取触摸时的原点
    // 使用js计时器记录时间    
    interval = setInterval(function () {
      time++;
    }, 100);
  },
  // 触摸移动事件
  touchMove: function (e) {
    var touchMove = e.touches[0].pageX;
    console.log("touchMove:" + touchMove + " touchDot:" + touchDot + " diff:" + (touchMove - touchDot));
    // 向左滑动   
    if (touchMove - touchDot <= -40 && time < 10) {
      console.log("向左滑动")
      // if (tmpFlag && nth < nthMax) { //每次移动中且滑动时不超过最大值 只执行一次
      //   var tmp = this.data.menu.map(function (arr, index) {
      //     tmpFlag = false;
      //     if (arr.active) { // 当前的状态更改
      //       nth = index;
      //       ++nth;
      //       arr.active = nth > nthMax ? true : false;
      //     }
      //     if (nth == index) { // 下一个的状态更改
      //       arr.active = true;
      //       name = arr.value;
      //     }
      //     return arr;
      //   })
      //   this.getNews(name); // 获取新闻列表
      //   this.setData({ menu: tmp }); // 更新菜单
      // }
    }
    // 向右滑动
    if (touchMove - touchDot >= 40 && time < 10) {
      console.log("向右滑动")
      // if (tmpFlag && nth > 0) {
      //   nth = --nth < 0 ? 0 : nth;
      //   var tmp = this.data.menu.map(function (arr, index) {
      //     tmpFlag = false;
      //     arr.active = false;
      //     // 上一个的状态更改
      //     if (nth == index) {
      //       arr.active = true;
      //       name = arr.value;
      //     }
      //     return arr;
      //   })
      //   this.getNews(name); // 获取新闻列表
      //   this.setData({ menu: tmp }); // 更新菜单
      // }
    }
    // touchDot = touchMove; //每移动一次把上一次的点作为原点（好像没啥用）
  },
  // 触摸结束事件
  touchEnd: function (e) {
    clearInterval(interval); // 清除setInterval
    time = 0;
    // tmpFlag = true; // 回复滑动事件
  },
  binddragstart: function () {
    console.log('binddragstart')
  },
  binddragging: function () {
    console.log('binddragging')
  },
  binddragend: function (e) {
    console.log('binddragend', e)
  },
  upper: function () {
    console.log('upper')
  },
  lower: function () {
    console.log('lower')
  },
  scroll: function (e) {
    let itemWitdh = e.detail.scrollWidth / this.data.itemList.length
    let scrollNum = e.detail.scrollLeft / itemWitdh
    let scrollRemainder = (e.detail.scrollLeft % itemWitdh) / itemWitdh
    if (scrollRemainder * 10 >= 5) {
      scrollNum = parseInt(scrollNum + 1)
    } else {
      scrollNum = parseInt(scrollNum)
    }
    console.log(scrollNum)
    this.setData({ item: this.data.itemList[scrollNum] })
  },
})
