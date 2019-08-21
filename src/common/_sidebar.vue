<template>
  <v-navigation-drawer
    id="side-bar"
    v-model="drawer"
    class="nav"
    temporary
    width="290"
    app
  >
    <v-list
      dense
      nav
    >
      <v-list-item>
        <v-list-item-avatar>
          <img
            src="https://raw.githubusercontent.com/hexh250786313/amai_mayoi.github.io/master/img/tama.ico"
            alt="Vue"
          >
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Vue Shopping</v-list-item-title>
          <v-list-item-subtitle>Materail Design</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        @click="loadPage(item.url)"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <v-btn
        outlined
        color="indigo"
        width="270"
        height="60"
        @click="loginFlag"
      >
        {{ isLogin }}
      </v-btn>
    </template>
  </v-navigation-drawer>
</template>

<script>
import store from '@/store'
import { setTimeout } from 'timers'

export default {
  data: () => ({
    items: [
      {
        icon: 'mdi-home',
        title: '首页',
        url: ''
      }, {
        icon: 'mdi-widgets',
        title: '专区',
        url: ''
      }, {
        icon: 'mdi-cart',
        title: '购物车',
        url: '/cart'
      }, { icon: 'mdi-settings',
        title: '设置',
        url: ''
      }
    ]
  }),
  computed: {
    drawer: {
      // 因为这个 v-navigation-drawer 需要用 v-model 来触发，而 v-model 一般是绑定 data，
      // 但是调用 store 的数据用 data 无法实时更新，因此设置 computed 的 setter 来模拟 data
      // 因为 v-model 会得到新值，所以需要 setter 完全模拟 data
      // getter
      get: function () {
        return this.$store.state.drawer
      },
      // setter
      set: function (newValue) {
        this.$store.state.drawer = newValue
      }
    },
    isLogin: function () {
      if (store.state.login.token) {
        return 'LOGOUT'
      } else {
        return 'LOGIN'
      }
    }
  },
  methods: {
    loginFlag () {
      this.$store.state.loading = true
      setTimeout(() => {
        // 如果已经登录，则移除 session_id 和 user
        if (store.state.login.token) {
          this.$store.commit('CHANGE_TOKEN', '')
          this.$store.commit('SET_USER', '')
          this.$store.state.loading = false

          // 关闭 sidebar
          this.$store.state.drawer = false

          // 提示信息
          this.$store.state.tipstext = '账号已登出'
          this.$store.state.snackbar = true
        } else {
          this.$router.push('/login')
          this.$store.state.loading = false
        }
      }, 1500)
    },
    loadPage (url) {
      this.$store.state.loading = true
      setTimeout(() => {
        if (url === '') {
          this.$store.state.drawer = false
          this.$store.state.loading = false
        } else {
          this.$store.state.drawer = false
          this.$router.push(url)
          this.$store.state.loading = false
        }
      }, 1500)
    }
  }
}
</script>

<style lang="sass" scoped>
.nav .v-toolbar__title
  margin-left: 20px

.nav  .v-list-item__icon
  margin-right: 32px

.nav  .v-list-item__avatar
  margin-right: 32px

.nav  .v-divider
  margin-bottom: 10px

.nav .v-btn
  margin-bottom: 10px
  margin-left: 10px
</style>
