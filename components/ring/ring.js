const app = getApp();
Component({
  /**
   * 组件的一些选项
   */
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  /**
   * 组件的对外属性
   */
  properties: {
    color: {
      type: String,
      default: '#eee'
    },
    value: {
      type: Number,
      default: 0
    },
    showContent: {
      type: Boolean,
      default: false
    }
  },
  /**
   * 组件的初始数据
   */
  data: {},
  /**
   * 组件的方法列表
   */
  methods: {}
})