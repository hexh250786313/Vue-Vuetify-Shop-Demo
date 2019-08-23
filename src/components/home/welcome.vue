<template>
  <div
    id="welcome"
    class="title"
  >
    {{ welcomeText }}
    <v-sheet class="outer">
      <ul class="slide-group">
        <li
          v-for="item in list"
          :key="item.id"
        >
          <v-card
            class="ma-4"
            height="162"
            width="138"
          >
            <v-img
              max-width="138"
              max-height="162"
              :src="getImgUrl(item.src)"
            >
              <v-img
                max-width="138"
                max-height="162"
                :src="require('@/assets/home/shadow.png')"
              >
                <v-row
                  class="fill-height"
                  align="end"
                  justify="center"
                >
                  {{ item.content }}
                </v-row>
              </v-img>
            </v-img>
          </v-card>
        </li>
        <li>
          <v-card
            class="ma-4"
            height="162"
            width="100"
            elevation="0"
          >
            <v-row
              id="more"
              class="fill-height"
              align="center"
              justify="center"
            >
              <v-avatar color="grey">
                <v-icon color="white">
                  mdi-arrow-right
                </v-icon>
              </v-avatar>
            </v-row>
          </v-card>
        </li>
      </ul>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({
    list: [{
      id: 1,
      src: '01',
      content: '电器'
    }, {
      id: 2,
      src: '02',
      content: '居家'
    }, {
      id: 3,
      src: '03',
      content: '化妆品'
    }, {
      id: 4,
      src: '04',
      content: '玩具游戏'
    }, {
      id: 5,
      src: '05',
      content: '杂货'
    }, {
      id: 6,
      src: '06',
      content: '日常用品'
    }, {
      id: 7,
      src: '07',
      content: '服饰'
    }, {
      id: 8,
      src: '08',
      content: '户外用品'
    }, {
      id: 9,
      src: '09',
      content: '工具'
    }]
  }),
  computed: {
    welcomeText () {
      if (this.$store.state.login.token) {
        return '一起享受购物吧，' + this.$store.state.login.user
      } else {
        return '欢迎您，请登录。'
      }
    }
  },
  methods: {
    // 需要拼接，否则会有问题
    getImgUrl (icon) {
      return require('@/assets/home/' + icon + '.png')
    }
  }
}
</script>

<style lang="sass" scoped>
#welcome
  padding-top: 10px
  padding-bottom: 10px
  text-align: center
  background: #fff
  box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -webkit-box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -moz-box-shadow: 0 2px 12px rgba(0,0,0,.1)

#welcome .outer
  width: 100%
  -webkit-overflow-scrolling: touch

#welcome .slide-group
  display: -ms-flex
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  padding: 0
  overflow-x: auto

#welcome .slide-group::-webkit-scrollbar
  display: none

#welcome .justify-center
  overflow: hidden

#welcome li
  list-style: none

#welcome .v-card
  margin-right: 0 !important
  margin-left: 12px !important

#welcome .row
  color: white
  padding-bottom: 13px

#welcome #more
  padding-bottom: 0

#welcome .v-sheet
  border-radius: 7px

</style>
