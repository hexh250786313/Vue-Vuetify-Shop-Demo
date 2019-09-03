import * as types from '../types'

const state = {
  selected: null
}

const mutations = {
  [types.SET_SELECTED] (state, res) {
    state.selected = res
    window.sessionStorage.setItem('selected', res)
  }
}

export default {
  state,
  mutations
}
