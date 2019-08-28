<template>
  <div id="classes">
    <v-sheet v-if="classes">
      <v-row class="section1">
        <span class="title">{{ classes.title }}</span>
      </v-row>
      <v-row>
        <v-img :src="getImgUrl(classes.contentUrl)" />
      </v-row>
      <v-row class="outer">
        <ul class="slide-group">
          <li
            v-for="(item, index) in classes.content"
            :key="index"
          >
            <v-card
              elevation="0"
              class="ma-4"
            >
              <v-img
                max-width="162"
                max-height="162"
                :src="getImgUrl(classes.classUrl[index])"
              />
              <v-card-text>
                {{ item }}
              </v-card-text>
            </v-card>
          </li>
        </ul>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      type: Object,
      default: function () {
        return {
          title: '标题',
          content: [],
          contentUrl: '01',
          imgUrl: '01'
        }
      }
    }
  },
  methods: {
    getImgUrl: function (url) {
      return require('@/assets/class/' + url + '.png')
    }
  }
}
</script>

<style lang="sass" scoped>
#classes
  background: #fff
  text-align: center
  margin-top: 18px
  box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -webkit-box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -moz-box-shadow: 0 2px 12px rgba(0,0,0,.1)

#classes .v-sheet
  padding: 4vw
  padding-bottom: 3vw
  border-radius: 0px

#classes .row
  margin-left: -4vw
  margin-right: -4vw

#classes .section1
  margin-left: 0
  padding-bottom: 10px

#classes .outer
  width: 100vw
  -webkit-overflow-scrolling: touch

#classes .slide-group
  display: -ms-flex
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  overflow-x: auto

#classes .slide-group::-webkit-scrollbar
  display: none

#classes .justify-center
  overflow: hidden

#classes li
  margin-left: 20px
  list-style: none

#classes .v-card
  margin-right: 0 !important
  margin-left: 12px !important
  margin-top: 0 !important
  margin-bottom: 0 !important

#classes #more
  padding-bottom: 0

#classes .v-card__text
  font-size: 1.1rem
  padding: 0
  padding-top: 30px

</style>
