<template>
  <div id="searchbar">
    <v-sheet>
      <v-text-field
        ref="input"
        v-model="model"
        hide-details
        solo
        clearable
        :label="textLabel"
        :prepend-inner-icon="barIcon"
        @click:prepend-inner="changeIcon('click')"
        @focus="changeIcon('focus')"
      />
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

export default {
  data: () => ({
    list: [],
    filterList: [],
    overlay: false,
    model: '',
    barIcon: 'mdi-magnify',
    textLabel: 'What are you looking for?',
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
    changeIcon: function (type) {
      if (type === 'click') {
        this.overlay = false
        this.barIcon = 'mdi-magnify'
        this.textLabel = 'What are you looking for?'
        this.$refs.input.blur()
      } else if (type === 'focus') {
        this.barIcon = 'mdi-arrow-left'
        this.overlay = true
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

#searchbar ::v-deep label,
#searchbar ::v-deep input
  margin-left: 12px

#searchbar ::v-deep p
  color: white

#searchbar ::v-deep .v-overlay
  height: 100vh
  justify-content: flex-start
  align-items: stretch
  top: 120px

#searchbar .v-list
  width: 100vw

#searchbar .v-list-item__title
  font-size: 1rem

#searchbar .v-list-item__icon
  margin-right: 20px

</style>
