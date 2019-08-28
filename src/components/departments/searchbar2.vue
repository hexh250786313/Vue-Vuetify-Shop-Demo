<template>
  <div id="searchbar">
    <v-sheet>
      <v-text-field
        ref="input"
        v-model="model"
        hide-details
        solo
        clearable
        :prepend-inner-icon="barIcon"
        :append-icon="barIcon2"
        @click:prepend-inner="changeIcon('click')"
        @focus="changeIcon('focus')"
        @click:append="toCart"
      >
        <template #label>
          <v-icon small>
            {{ iconLabel }}
          </v-icon>
          {{ textLabel }}
        </template>
      </v-text-field>
    </v-sheet>

    <v-overlay
      color="#fff"
      opacity="1"
      :value="overlay"
    >
      <v-list
        dense
        nav
        light
      >
        <v-list-item
          v-for="item in filterList"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>mdi-magnify</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-overlay>
  </div>
</template>

<script>
import theData from '@/http/mock' // 模拟数据
import { setTimeout } from 'timers'

export default {
  data: () => ({
    list: [],
    filterList: [],
    overlay: false,
    model: '',
    barIcon: 'mdi-menu',
    barIcon2: 'mdi-cart',
    iconLabel: 'mdi-google',
    textLabel: '要寻找什么商品？',
    flag: true,
    flag_2: true // 注释掉亦可
  }),
  watch: {
    model: function (newValue) {
      if (this.flag) {
        // 请求拦截
        this.$api({
          method: 'post',
          url: '/datas'
        })
        // 拦截完毕
          .then(response => {
            this.list = response.data.goods
          })
        // 处理错误
          .catch(function (error) {
            alert(error)
          })
        this.newValue = newValue
        // 只在第一次输入内容的时候请求数据
        this.flag = false
      }
      setTimeout(() => { // 此处要用箭头函数，因为 setTimeout 的执行环境在 window 中，this 指向了 window
        // 把全部请求的数据打印一次，可注释掉这一段
        if (this.flag_2) {
          for (var i = 0; i < this.list.length; i++) {
            console.log(this.list[i].title)
          }
          console.log('——————分割线——————')
          this.flag_2 = false
        }

        // 匹配数据
        if (newValue !== '') {
          this.filterList = this.list.filter(function (item) {
            var reg = new RegExp('' + newValue)
            return item.title.match(reg)
          })
        }
      }, 500)
    }
  },
  methods: {
    toCart () {
      this.$store.state.loading = true
      setTimeout(() => {
        this.$store.state.loading = false
        this.$router.push('/cart')
      }, 1500)
    },
    changeIcon: function (type) {
      if (type === 'click') {
        if (this.overlay) {
          this.overlay = false
          this.barIcon = 'mdi-menu'
          this.barIcon2 = 'mdi-cart'
          this.iconLabel = 'mdi-google'
          this.textLabel = '要寻找什么商品？'
          this.$refs.input.blur()
        } else {
          this.$store.state.drawer = !this.$store.state.drawer
        }
      } else if (type === 'focus') {
        this.barIcon = 'mdi-arrow-left'
        this.barIcon2 = ''
        this.overlay = true
        this.iconLabel = ''
        this.textLabel = ''
      }
    }
  }
}
</script>

<style lang="sass" scoped>
#searchbar
  width: 100%

#searchbar ::v-deep .v-input__slot
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2), 0px 0px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)
  -webkit-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2), 0px 0px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)
  -moz-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2), 0px 0px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)

#searchbar ::v-deep label,
#searchbar ::v-deep input
  margin-left: 12px

#searchbar ::v-deep p
  color: white

#searchbar ::v-deep .v-overlay
  height: 100vh
  justify-content: flex-start
  align-items: stretch
  top: 65px

#searchbar .v-list
  width: 100vw

#searchbar .v-list-item__title
  font-size: 1rem

#searchbar .v-list-item__icon
  margin-right: 20px

</style>
