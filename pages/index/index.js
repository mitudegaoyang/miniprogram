//index.js
//获取应用实例
const app = getApp()

//dayjs
const dayjs = require('../../utils/dayjs@1.8.21.min.js')
const util = require('../../utils/util.js')

Page({
  data: {
    motto: '知言 善行 笃学 慎思',
    src: "https://s3.ax1x.com/2021/02/10/ywGki6.png",
    logo: "../../images/logo.jpeg",
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
      email: "136****5113@163.com",
      description: [
        "为人诚恳，乐观开朗，善于沟通，积极进取，适应力强，有较强的团队精神，工作积极进取，态度认真负责，自信但不自负，不以自我为中心。",
        "对新事物、新技术有强烈的好奇心和求知欲。有五年前端开发经验，有管理前端团队经验。",
        "具备良好的分析解决问题能力，能独立承担任务并有系统进度把控能力。",
        "熟练使用 Linux 操作系统，持续更新自己的技术博客。"
      ],
      score: [
        {
          name: "HTML",
          num: "85",
          color: "#FBD75E"
        },
        {
          name: "CSS",
          num: "88",
          color: "#F89F5B"
        },
        {
          name: "JS",
          num: "85",
          color: "#F78070"
        },
        {
          name: "AJAX",
          num: "80",
          color: "#7298FE"
        },
      ],
      ability: [
        "熟练掌握 HTML5、CSS3、JavaScript、Ajax。",
        "熟练掌握 React、Vue、ElementUI、iView、Bootstrap、Fuse、ElementUI Admin 等前端框架。",
        "熟练掌握 jQuery、Axios、Lodash、Moment、ECharts 等前端组件库。",
        "熟练掌握 HTML5+VUX 混合 APP 开发，了解微信小程序开发。",
        "熟悉 Git、Bower、webpack、Babel 等前端工具。",
        "了解 RequireJS 等前端模块化工具，了解 Node.js、PHP。",
      ],
      project: [
        {
          name: "AICS智慧工地",
          tag: ["React", "antd", "ice"],
          time: ["2020.09","2020.10"],
          description: [
            "智慧工地是利用物联网技术，集成各类智能终端设备对建设项目现场劳务工人实现高效管理的综合信息化系统。",
            "包括环境监测、智能分析、视频监控、塔基监测、实名制劳务管理等。项目共分为前台商城、订单管理、个人订单三大部分。",
            "智慧工地依托物联网、大数据、云计算、人工智能、移动计算，建立云端大数据管理平台，",
            "形成“端+云+大数据”的业务体系和新的管理模式，建立智慧工地综合管理平台，打通一线操作与远程监管的数据链条。",
          ],
          core: [
            "使用antd组件实现各页面布局及特效；",
            "编写功能组件，实现组件的复用；",
            "使用bizcharts实现可视化图表格；",
            "使用graphql实现智能搜索接口；",
            "引入高德地图实现地图功能；",
            "引入西瓜视频实现视频播放功能；",
          ]
        },
        {
          name: "DataMaxPro数据可视化应用",
          tag: ["React", "antd"],
          time: ["2020.08","2020.12"],
          description: [
            "DataMaxPro数据可视化是使用可视化应用的方式来分析并展示庞杂数据的产品。",
            "DataMaxPro旨让更多的人看到数据可视化的魅力，帮助非专业的工程师通过图形化的界面轻松搭建专业水准的可视化应用。",
            "精心预设多种行业模板，极致展示数据魅力。采用拖拽式自由布局，无需编码，全图形化编辑，快速可视化制作。",
            "满足您会议展示、业务监控、风险预警、地理信息分析等多种业务场景的展示需求。",
          ],
          core: [
            "使用antd组件实现各页面布局及特效；",
            "编写功能组件，实现组件的复用；",
            "使用bizcharts实现可视化图表格；",
            "使用graphql实现智能搜索接口；",
            "引入高德地图实现地图功能；",
            "引入西瓜视频实现视频播放功能；",
          ]
        },
        {
          name: "AICube智盒管理系统",
          tag: ["React", "antd", "ice"],
          time: ["2020.03","2020.12"],
          description: [
            "AICube智盒管理系统是部署于智盒上的设备管理界面，配合AIMS智能媒体服务系统，实现云加端控制。",
            "项目共分为概览、摄像头管理、系统管理几个模块。",
            "AICube智盒管理系统是一个提供智盒状态管理、设备接入、智盒设置的云产品。",
            "通过该系统可以更加便捷高效的对智盒及其子设备进行各种操作。",
          ],
          core: [
            "使用飞冰 ice-stark 实现了微前端解决方案；",
            "基于 Antd组件进行二次封装，实现各页面布局及特效；",
            "使用 rematch 实现状态管理；",
            "使用 react-spring 实现微应用首次加载过渡动画；",
            "使用 Dayjs实现日期处理及展示；",
          ]
        },
        {
          name: "AIMS智能媒体服务",
          tag: ["React", "antd", "ice"],
          time: ["2020.03","至今"],
          description: [
            "使用antd、react实现项目的迭代开发。项目共分为概览、全息档案、智能搜索、布控预警、设备、媒资管理、系统管理几个模块。",
            "本人在项目中担任前端开发。",
            "智能媒体服务平台是一个提供设备接入、视频流上云、媒资管理、视频 AI、智能搜索功能的云产品。",
            "旨在帮助视频厂商快速将存量或者新增的媒体设备上云。平台还提供了丰富的视频算法，以及云边协同的视频智能服务。",
          ],
          core: [
            "使用飞冰 ice-stark 实现了微前端解决方案；",
            "基于 Antd组件进行二次封装，实现各页面布局及特效；",
            "使用 graphql 进行海量数据的筛选查询；",
            "使用高德地图开放API引入高德地图；",
            "使用 watermark 给敏感信息添加水印；",
            "使用 websocket 实现告警推送监听。",
          ]
        },
        {
          name: "AIoT感知平台",
          tag: ["React", "antd", "ice"],
          time: ["2019.09","2020.03"],
          description: [
            "使用antd、react实现项目的迭代开发。项目共分为概览、产品、设备、告警、规则、工单、应用、系统管理几个模块。",
            "本人在项目中担任前端开发。",
            "项目使用子应用模式开发，模块间独立开发部署。",
            "感知平台为设备提供安全可靠的连接通信能力，向下连接海量设备，支撑设备数据采集上云。",
            "向上提供云端 API，应用服务通过 API 调用开放平台功能，实现远程控制。帮助用户快速构筑物联网应用。",
          ],
          core: [
            "使用飞冰 ice-stark 实现了微前端解决方案；",
            "基于 Antd 组件进行二次封装，实现各页面布局及特效；",
            "使用 rematch 实现状态管理；",
            "使用 react-router-dom 进行路由配置；",
            "使用 react-intl 实现多语言；",
            "编写功能组件，实现组件的复用；",
            "使用西瓜视频播放器开放API进行视频播放；",
            "使用 BizCharts 实现平台数据图表展示。",
          ]
        },
        {
          name: "鱼猫金服微信版官网重构",
          tag: ["Vue", "Vux"],
          time: ["2018.09","2019.08"],
          description: [
            "使用Vux、Vue实现官网微信版的重新构建。项目共分为首页、项目、活动、个人中心几个模块。",
            "本人在项目中担任前端开发。",
          ],
          core: [
            "使用Vux组件实现各页面布局及特效；",
            "使用fullpage.js实现全屏滚动特效；",
            "使用Vue.js Clipboard实现一键复制；",
            "使用Scroller组件实现下拉刷新上拉加载更多；",
            "使用ifarme嵌入及jQ实现公告详情渲染；",
          ]
        },
        {
          name: "鱼猫金服企业端",
          tag: ["Vue", "Element", "JSP"],
          time: ["2018.07","2018.10"],
          description: [
            "使用Element UI、Vue、Jsp实现企业端项目",
          ],
          core: [
            "使用Element UI组件实现各页面布局及特效；",
            "使用particles.js实现粒子特效；",
            "使用script标签方式引入Vue、ElementUI，并实现项目各功能点；",
            "修改既有功能模块，实现与企业端的融合；",
          ]
        }
      ]
    },
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    current: "0"
  },
  CopyLink(e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.link,
      success: res => {
        wx.showToast({
          title: '已复制',
          duration: 1000,
        })
      }
    })
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
