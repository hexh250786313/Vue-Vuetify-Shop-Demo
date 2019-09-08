import * as types from '../types'

const state = {
  // flag: window.sessionStorage.getItem('flag'),
  cartgoods: (function () {
    // 需要用 JSON.parse() 解析对象类型，否则无法正常读取
    let ss = JSON.parse(sessionStorage.getItem('cartgoods'))
    if (ss) {
      return ss
    } else {
      return [
        {
          id: 0,
          img: 'http://dummyimage.com/200x200/dec4e0/333.png',
          title: '每日邮报',
          onsale: 100,
          type: 'Type A',
          mount: 1
        }
      ]
    }
  })(),
  selectedgoods: JSON.parse(sessionStorage.getItem('selectedgoods'))
}

const mutations = {
  [types.SET_CARTGOODS] (state) {
    const cg = state.cartgoods
    window.sessionStorage.setItem('cartgoods', JSON.stringify(cg))
  },
  [types.PUSH_CARTGOODS] (state, res) {
    // console.log(state.cartgoods)
    state.cartgoods.push(res)
    const cg = state.cartgoods
    // 用 JSON.stringify() 来格式化对象，否则无法正常储存，一般数据类型如 数字、字符串 则不需要
    window.sessionStorage.setItem('cartgoods', JSON.stringify(cg))
  },
  [types.DELETE_CARTGOODS] (state) {
    state.cartgoods.pop()
    const cg = state.cartgoods
    window.sessionStorage.setItem('cartgoods', JSON.stringify(cg))
  },
  [types.REMOVE_CARTGOODS] (state, res) {
    state.cartgoods.splice(res, 1)
    const cg = state.cartgoods
    window.sessionStorage.setItem('cartgoods', JSON.stringify(cg))
  },
  [types.SET_SELECTEDGOODS] (state, res) {
    state.selectedgoods = res
    window.sessionStorage.setItem('selectedgoods', JSON.stringify(res))
  },
  [types.RESET_SELECTEDGOODS] (state) {
    const cg = state.cartgoods
    let a = []
    for (var i = 0; i < cg.length; i++) {
      a[i] = cg[i].id
    }
    let b = state.selectedgoods.concat()
    // 取购物车和选中物品的交集，目的是为了去掉移除的物品
    let bSet = new Set(b)
    let c = Array.from(new Set(a.filter(v => bSet.has(v))))
    window.sessionStorage.setItem('selectedgoods', JSON.stringify(c))
    state.selectedgoods = JSON.parse(sessionStorage.getItem('selectedgoods'))
  }
}

export default {
  state,
  mutations
}
