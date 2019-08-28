<template>
  <div id="stores">
    <p class="headline">
      探索商店
    </p>
    <v-sheet class="outer">
      <ul class="slide-group">
        <li
          v-for="item in list"
          :key="item.id"
        >
          <v-card
            class="ma-4"
            height="159"
            width="138"
          >
            <v-img
              max-width="138"
              max-height="92"
              :src="getImgUrl(item.src)"
            />
            <div class="box">
              <v-avatar color="white">
                <v-img
                  :src="getIconUrl(item.src)"
                />
              </v-avatar>
            </div>
            <v-card-text>
              {{ item.content }}
            </v-card-text>
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
      content: 'Costco Grocery'
    }, {
      id: 2,
      src: '02',
      content: 'Costco Wholesale'
    }, {
      id: 3,
      src: '03',
      content: 'Target'
    }, {
      id: 4,
      src: '04',
      content: 'Best Buy'
    }, {
      id: 5,
      src: '05',
      content: 'Overstock'
    }, {
      id: 6,
      src: '06',
      content: 'Boxed'
    }, {
      id: 7,
      src: '07',
      content: '99 Ranch Market'
    }, {
      id: 8,
      src: '08',
      content: 'Moosejaw'
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
      return require('@/assets/stores/' + icon + '.png')
    },
    getIconUrl (icon) {
      return require('@/assets/stores/icon/' + icon + '.png')
    }
  }
}
</script>

<style lang="sass" scoped>
#stores
  background: #fff
  padding-top: 5vw
  text-align: center
  margin-top: 18px
  box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -webkit-box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -moz-box-shadow: 0 2px 12px rgba(0,0,0,.1)

#stores .outer
  width: 100%
  -webkit-overflow-scrolling: touch

#stores .slide-group
  display: -ms-flex
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  padding: 0
  overflow-x: auto

#stores .slide-group::-webkit-scrollbar
  display: none

#stores .justify-center
  overflow: hidden

#stores li
  list-style: none

#stores .v-card
  margin-right: 0 !important
  margin-left: 12px !important
  box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -webkit-box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -moz-box-shadow: 0 2px 12px rgba(0,0,0,.1)

#stores .row
  color: white
  padding-bottom: 13px

#stores #more
  padding-bottom: 0

#stores .v-sheet
  border-radius: 7px

#stores .box
  height: 24px

#stores .box .v-avatar
  top: -24px

#stores .v-image
  border-radius: 7px 7px 0 0

#stores .box .v-image
  border-radius: 50%

#stores .v-card__text
  color: black
  font-weight: bold
  padding: 0
  padding-top: 10px

</style>
