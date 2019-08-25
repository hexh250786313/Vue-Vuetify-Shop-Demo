<template>
  <div id="onsale">
    <p class="headline">
      折扣商品
    </p>
    <v-sheet>
      <v-row
        justify="center"
        no-gutters
        class="top"
      >
        <!------------------------- Part One -------------------------------->
        <v-col>
          <v-card>
            <div>
              <v-avatar
                color="white"
                class="topright"
                size="30"
              >
                <v-icon
                  color="#1976D2"
                >
                  mdi-tag
                </v-icon>
              </v-avatar>
            </div>
            <div
              class="box"
              justify="center"
            >
              <!-- v-if 的作用是防止初始化出错，让其 goods 响应未及时是 null 的时候不渲染 DOM -->
              <v-img
                v-if="goods"
                :src="goods[0].imgPath"
              />
            </div>
            <div class="textbox">
              <v-card-text v-if="goods">
                <span class="subtitle-1">CN¥{{ goods[0].onsale }}</span><span class="caption">CN¥{{ goods[0].price }}</span>
                <br>
                <span class="body-1">{{ goods[0].title }}</span>
              </v-card-text>
            </div>
          </v-card>
        </v-col>
        <!------------------------- Part Two -------------------------------->
        <v-col class="right">
          <v-card>
            <div>
              <v-avatar
                color="white"
                class="topright"
                size="30"
              >
                <v-icon color="#1976D2">
                  mdi-tag
                </v-icon>
              </v-avatar>
            </div>
            <div
              class="box"
              justify="center"
            >
              <v-img
                v-if="goods"
                :src="goods[1].imgPath"
              />
            </div>
            <div class="textbox">
              <v-card-text v-if="goods">
                <span class="subtitle-1">CN¥{{ goods[1].onsale }}</span><span class="caption">CN¥{{ goods[1].price }}</span>
                <br>
                <span class="body-1">{{ goods[1].title }}</span>
              </v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row
        no-gutters
        justify="center"
        class="bottom"
      >
        <!------------------------- Part Three -------------------------------->
        <v-col>
          <v-card>
            <div>
              <v-avatar
                color="white"
                class="topright"
                size="30"
              >
                <v-icon color="#1976D2">
                  mdi-tag
                </v-icon>
              </v-avatar>
            </div>
            <div
              class="box"
              justify="center"
            >
              <v-img
                v-if="goods"
                :src="goods[2].imgPath"
              />
            </div>
            <div class="textbox">
              <v-card-text v-if="goods">
                <span class="subtitle-1">CN¥{{ goods[2].onsale }}</span><span class="caption">CN¥{{ goods[2].price }}</span>
                <br>
                <span class="body-1">{{ goods[2].title }}</span>
              </v-card-text>
            </div>
          </v-card>
        </v-col>
        <!------------------------- Part Four -------------------------------->
        <v-col class="right">
          <v-card>
            <div>
              <v-avatar
                color="white"
                class="topright"
                size="30"
              >
                <v-icon color="#1976D2">
                  mdi-tag
                </v-icon>
              </v-avatar>
            </div>
            <div
              class="box"
              justify="center"
            >
              <v-img
                v-if="goods"
                :src="goods[3].imgPath"
              />
            </div>
            <div class="textbox">
              <v-card-text v-if="goods">
                <span class="subtitle-1">CN¥{{ goods[3].onsale }}</span><span class="caption">CN¥{{ goods[3].price }}</span>
                <br>
                <span class="body-1">{{ goods[3].title }}</span>
              </v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
    <v-btn
      outlined
      color="#4285F4"
      width="92vw"
      height="46"
      class="subtitle-1"
    >
      全 部 折 扣 商 品
    </v-btn>
  </div>
</template>

<script>
export default {
  computed: {
    goods: function () {
      return this.$store.state.home.goods
    }
  },
  methods: {
    getImgUrl: function (url) {
      return require(url)
    }
  }
}
</script>

<style lang="sass" scoped>
#onsale
  background: #fff
  padding-top: 5vw
  padding-bottom: 5vw
  text-align: center
  margin-top: 18px
  box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -webkit-box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -moz-box-shadow: 0 2px 12px rgba(0,0,0,.1)

#onsale .v-sheet
  padding: 3vw
  padding-bottom: 5vw
  border-radius: 0px

#onsale .v-card
  border-radius: 10px
  height: 60vw
  width: 45vw
  box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -webkit-box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -moz-box-shadow: 0 2px 12px rgba(0,0,0,.1)

#onsale .top
  margin-left: 1vw

#onsale .bottom
  margin-left: 1vw
  margin-top: 2vw

#onsale .right
  margin-left: 0.5vw

#onsale .box
  height: 40vw
  align-items: center
  justify-content: center
  display: flex

#onsale .topright
  position: absolute
  top:  8px
  right: 8px
  z-index: 1
  box-shadow: 0px 1px 6px 0px rgba(0,0,0,.3)
  -webkit-box-shadow: 0px 1px 6px 0px rgba(0,0,0,.3)
  -moz-box-shadow: 0px 1px 6px 0px rgba(0,0,0,.3)

#onsale .textbox
  height: 17vw
  align-items: center
  justify-content: center
  display: flex

#onsale .v-card__text
  padding: 0

#onsale .v-btn
  border-radius: 8px

#onsale ::v-deep .v-btn__content
  font-weight: bold

#onsale .textbox .subtitle-1
  font-weight: bold
  color: black
  margin-right: 10px

#onsale .caption
  text-decoration: line-through

</style>
