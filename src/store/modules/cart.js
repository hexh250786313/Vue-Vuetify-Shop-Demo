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
  })()
}

const mutations = {
  [types.PUSH_CARTGOODS] (state, res) {
    // console.log(state.cartgoods)
    state.cartgoods.push(res)
    const cg = state.cartgoods
    // 用 JSON.stringify() 来格式化对象，否则无法正常储存，一般数据类型如 数字、字符串 则不需要
    window.sessionStorage.setItem('cartgoods', JSON.stringify(cg))
  }
}

export default {
  state,
  mutations
}
