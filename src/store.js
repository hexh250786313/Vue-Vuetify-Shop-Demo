import Vue from 'vue'
import Vuex from 'vuex'

import login from './store/modules/login'
import home from './store/modules/home'
import departments from './store/modules/departments'
import detail from './store/modules/detail'
import cart from './store/modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    drawer: false,
    drawer2: false,
    snackbar: false,
    tipstext: '输入栏不能为空'
  },
  modules: {
    home,
    login,
    departments,
    detail,
    cart
  }
})
