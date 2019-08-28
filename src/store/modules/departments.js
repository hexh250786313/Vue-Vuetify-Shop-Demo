import * as types from '../types'

const state = {
  flagdep: window.sessionStorage.getItem('flagdep'),
  class: (function () {
    // 需要用 JSON.parse() 解析对象类型，否则无法正常读取
    let ss = JSON.parse(sessionStorage.getItem('class'))
    if (ss) {
      return ss
    } else {
      return {} // 此处不用 null，而使用空对象
    }
  })()
}

const mutations = {
  [types.SET_FLAG_DEP] (state, res) {
    state.flagdep = res
    window.sessionStorage.setItem('flagdep', res)
  },
  [types.SET_CLASS] (state, res) {
    state.class = res
    // 用 JSON.stringify() 来格式化对象，否则无法正常储存，一般数据类型如 数字、字符串 则不需要
    window.sessionStorage.setItem('class', JSON.stringify(res))
  }
}

export default {
  state,
  mutations
}
