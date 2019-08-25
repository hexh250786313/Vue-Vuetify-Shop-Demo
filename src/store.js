import Vue from 'vue'
import Vuex from 'vuex'

import login from './store/modules/login'
import home from './store/modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    drawer: false,
    snackbar: false,
    tipstext: '输入栏不能为空'
  },
  modules: {
    home,
    login
  }
})
