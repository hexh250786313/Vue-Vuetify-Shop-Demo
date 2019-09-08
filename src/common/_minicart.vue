<template>
  <div id="minicart">
    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
      touchless
      bottom
      hide-overlay
      height="205"
      style="border-radius: 8px 8px 0 0"
    >
      <!--这个 v-if 是为了确保每次都刷新这个组件-->
      <v-container
        v-if="drawer"
        fluid
        style="padding-top: 8px"
      >
        <v-row>
          <v-col class="section1">
            <v-icon
              color="#000"
              @click="close"
            >
              mdi-chevron-down
            </v-icon>
          </v-col>
          <v-col class="section2">
            我的购物车
          </v-col>
          <v-col class="section3">
            <div @click="toCart">
              转至购物车
            </div>
          </v-col>
        </v-row>
        <v-row style="height:21px">
          <v-col class="section4">
            <strong>{{ cart[0].title }}</strong> 已添加到购物车！
          </v-col>
        </v-row>
        <v-row style="width:100vw;position:absolute;left:0">
          <v-col class="outer">
            <ul class="slide-group">
              <li
                v-if="true"
                style="list-style:none;margin-right:20px"
              >
                <v-card
                  class="ma-4"
                  height="88"
                  width="128"
                >
                  <v-row>
                    <v-col
                      style="padding:0;border-right:1px solid rgba(0,0,0,0.1)"
                      cols="6"
                    >
                      <v-row style="height:64px">
                        <v-list-item-avatar
                          height="64"
                          width="64"
                          style="margin:0;border-radius:8px 0 0 0"
                        >
                          <v-img
                            :src="cart[0].img"
                          />
                        </v-list-item-avatar>
                      </v-row>
                      <v-row style="height:24px">
                        <v-col class="newtitle">
                          {{ cart[0].title }}
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col style="display:flex;justify-content:center;align-items:center;flex-wrap:wrap">
                      <v-avatar
                        style="border:2px solid #1976D2"
                        size="40"
                        @click="cancel"
                      >
                        <v-icon color="#1976D2">
                          mdi-delete
                        </v-icon>
                      </v-avatar>
                      <span style="color:#1976D2;font-size:0.9rem;font-weight:bold">移除</span>
                    </v-col>
                  </v-row>
                  <v-overlay
                    absolute
                    :value="aniflag"
                    opacity="1"
                    color="#fff"
                  >
                    <v-progress-circular
                      indeterminate
                      style="color:#1976D2"
                    />
                  </v-overlay>
                </v-card>
              </li>
              <li
                v-for="(item, index) in cart.slice(1, cart.length)"
                :key="index"
                style="list-style:none;margin-right:12px"
              >
                <v-card
                  class="ma-4"
                  height="88"
                  width="64"
                >
                  <v-img
                    class="white--text"
                    height="64"
                    width="64"
                    :src="item.img"
                  />
                  <v-card-text class="cardtext">
                    {{ item.title }}
                  </v-card-text>
                </v-card>
              </li>
              <li style="list-style:none">
                <div style="width:8px" />
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { setTimeout } from 'timers'

export default {
  data: () => ({
    aniflag: true
  }),
  computed: {
    drawer: {
      // 因为这个 v-navigation-drawer 需要用 v-model 来触发，而 v-model 一般是绑定 data，
      // 但是调用 store 的数据用 data 无法实时更新，因此设置 computed 的 setter 来模拟 data
      // 因为 v-model 会得到新值，所以需要 setter 完全模拟 data
      // getter
      get: function () {
        return this.$store.state.drawer2
      },
      // setter
      set: function (newValue) {
        this.aniflag = true
        this.$store.state.drawer2 = newValue
      }
    },
    cart () {
      // 数组倒序，让新添加的商品放到最前排显示
      const cartgoods = this.$store.state.cart.cartgoods
      const cart = cartgoods.concat() // 克隆一个一样的数组
      return cart.reverse()
    }
  },
  beforeUpdate: function () {
    setTimeout(() => {
      this.aniflag = false
    }, 2000)
  },
  methods: {
    toCart: function () {
      this.overlay = false
      this.$store.state.loading = true
      setTimeout(() => {
        this.$store.state.loading = false
        this.$router.push('/cart')
      }, 1500)
    },
    close: function () {
      this.$store.state.drawer2 = !this.$store.state.drawer2
    },
    cancel: function () {
      this.aniflag = true
      setTimeout(() => {
        // 加载 layout
        this.$store.state.drawer2 = !this.$store.state.drawer2
        // 移除
        this.$store.commit('DELETE_CARTGOODS')
        // tip
        this.$store.state.tipstext = '已从购物车移除'
        this.$store.state.snackbar = true
      }, 2000)
    }
  }
}
</script>

<style lang="sass" scoped>
#minicart .row
  margin: 0
  height: 60px

#minicart .section1
  display: flex
  align-items: center

#minicart .section2
  display: flex
  justify-content: center
  align-items: center
  border: 1px solid rgba(211, 211, 211, 0.7)
  border-radius: 20px
  margin: 12px
  padding: 0
  font-weight: bold
  font-size: 0.9rem

#minicart .section3
  display: flex
  justify-content: flex-end
  align-items: center
  color: #1976D2
  font-size: 0.5rem

#minicart .section4
  padding-bottom: 0
  padding-top: 0

#minicart .outer
  padding: 0
  padding-bottom: 5px
  width: 100%
  -webkit-overflow-scrolling: touch

#minicart .cardtext
  padding: 0
  text-align: center
  display: -webkit-box
  -webkit-box-orient: vertical
  -webkit-line-clamp: 1
  overflow: hidden

#minicart .v-card
  border-radius: 8px
  box-shadow: 0 2px 12px rgba(32,33,36,.28)
  -webkit-box-shadow: 0 2px 12px rgba(32,33,36,.28)
  -moz-box-shadow: 0 2px 12px rgba(32,33,36,.28)

#minicart .slide-group
  padding: 10px 10px 10px 20px
  height: 110px
  display: -ms-flex
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  overflow-x: auto

#minicart .slide-group::-webkit-scrollbar
  display: none

#minicart .justify-center
  overflow: hidden

#minicart .newtitle
  padding: 0
  height: 22px
  font-size: 14px
  color: rgba(0,0,0,0.54)
  text-align: center
  display: -webkit-box
  -webkit-box-orient: vertical
  -webkit-line-clamp: 1
  overflow: hidden
  margin: 2px
</style>
