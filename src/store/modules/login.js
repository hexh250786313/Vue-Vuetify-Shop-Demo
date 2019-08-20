import * as types from '../types'

const state = {
  user: window.sessionStorage.getItem('user'),
  token: window.sessionStorage.getItem('token')
}

const mutations = {
  [types.CHANGE_TOKEN] (state, res) {
    state.token = res
    window.sessionStorage.setItem('token', res)
  },
  [types.SET_USER] (state, res) {
    state.user = res
    window.sessionStorage.setItem('user', res)
  }
}

export default {
  state,
  mutations
}
