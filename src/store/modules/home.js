import * as types from '../types'

const state = {
  flag: window.sessionStorage.getItem('flag'),
  goods: (function () {
    // 需要用 JSON.parse() 解析对象类型，否则无法正常读取
    let ss = JSON.parse(sessionStorage.getItem('goods'))
    if (ss) {
      return ss
    } else {
      return null
    }
  })(),
  events: (function () {
    // 需要用 JSON.parse() 解析对象类型，否则无法正常读取
    let ss = JSON.parse(sessionStorage.getItem('events'))
    if (ss) {
      return ss
    } else {
      return {
        title: '标题',
        content: '内容...。',
        picUrl: 'events_pre' // 预处理一张透明图片，防止初始化时会出错
      }
    }
  })()
}

const mutations = {
  [types.SET_FLAG] (state, res) {
    state.flag = res
    window.sessionStorage.setItem('flag', res)
  },
  [types.SET_GOODS] (state, res) {
    state.goods = res
    // 用 JSON.stringify() 来格式化对象，否则无法正常储存，一般数据类型如 数字、字符串 则不需要
    window.sessionStorage.setItem('goods', JSON.stringify(res))
  },
  [types.SET_EVENTS] (state, res) {
    state.events = res
    window.sessionStorage.setItem('events', JSON.stringify(res))
  }
}

export default {
  state,
  mutations
}
