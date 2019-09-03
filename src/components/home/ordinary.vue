<template>
  <div id="ordinary">
    <p class="headline">
      电器
    </p>
    <v-sheet>
      <v-row
        v-if="goods"
        justify="center"
        no-gutters
        class="top"
      >
        <v-card
          v-for="(item, index) in goods.slice(4, 7)"
          :key="index + 4"
          @click="loadPage(goods[index + 4].id)"
        >
          <v-list-item three-line>
            <v-list-item-avatar
              size="30vw"
              tile
            >
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
              <v-img
                v-if="item"
                :src="item.imgPath2"
              />
            </v-list-item-avatar>
            <v-list-item-content
              v-if="item"
              class="align-self-center"
            >
              <v-list-item-title
                class="headline mb-2"
              >
                <span class="onsale">CN¥{{ item.onsale }}</span><span class="price subtitle-1">CN¥{{ item.price }}</span>
              </v-list-item-title>

              <v-list-item-subtitle class="subtitle-1 title">
                {{ item.title }}
              </v-list-item-subtitle>
              <v-list-item-action-text class="subtitle-2">
                {{ item.intro }}
              </v-list-item-action-text>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-row>
    </v-sheet>
    <v-btn
      outlined
      color="#4285F4"
      width="92vw"
      height="46"
      class="subtitle-1"
    >
      全 部 电 器
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
    loadPage (id) {
      this.$store.state.loading = true
      setTimeout(() => {
        if (id === '') {
          this.$store.state.drawer = false
          this.$store.state.loading = false
        } else {
          this.$store.state.drawer = false
          this.$router.push('/detail/' + id)
          this.$store.state.loading = false
        }
      }, 1500)
    }
  }
}
</script>

<style lang="sass" scoped>
#ordinary
  background: #fff
  padding-top: 5vw
  padding-bottom: 5vw
  text-align: center
  margin-top: 18px
  box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -webkit-box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -moz-box-shadow: 0 2px 12px rgba(0,0,0,.1)

#ordinary .v-card
  border-radius: 10px
  width: 92vw
  margin-bottom: 3vw !important
  box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -webkit-box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -moz-box-shadow: 0 2px 12px rgba(0,0,0,.1)

#ordinary .v-sheet
  padding: 3vw
  padding-bottom: 3vw

#ordinary .v-list-item
  padding: 0

#ordinary .v-avatar--tile
  margin: 0
  min-width: 125px !important

#ordinary .topright
  position: absolute
  top:  -1.5vw
  right: -1.5vw
  z-index: 1
  box-shadow: 0px 1px 6px 0px rgba(0,0,0,.3)
  -webkit-box-shadow: 0px 1px 6px 0px rgba(0,0,0,.3)
  -moz-box-shadow: 0px 1px 6px 0px rgba(0,0,0,.3)

#ordinary .v-btn
  border-radius: 8px

#ordinary ::v-deep .v-btn__content
  font-weight: bold

#ordinary .onsale
  font-size: 1.1rem
  font-weight: bold
  margin-right: 10px

#ordinary .price
  text-decoration: line-through

#ordinary .v-list-item__title
  margin-bottom: 0 !important

#ordinary .v-list-item__content
  height: 30vw
  padding: 12px
  padding-right: 0
  padding-top: 0
  padding-bottom: 0

#ordinary .v-list-item__action-text
  display: -webkit-box
  -webkit-box-orient: vertical
  -webkit-line-clamp: 2
  overflow: hidden

#ordinary .title
  line-height: 1rem
</style>
