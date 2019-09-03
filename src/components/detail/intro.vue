<template>
  <div id="intro">
    <v-row>
      <v-col cols="10">
        <div class="textbox">
          <span class="tt">{{ title }}</span> {{ intro }}
        </div>
      </v-col>
      <v-col class="saveIcon">
        <div>
          <v-row style="justify-content: center">
            <v-icon @click="changeIcon">
              {{ icon }}
            </v-icon>
          </v-row>
          <v-row>
            <span class="caption">{{ iconText }}</span>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col style="display:flex; padding-top:0; padding-bottom:0">
        <v-rating
          dense
          readonly
          size="10"
          full-icon="mdi-star"
          empty-icon="mdi-star-outline"
          :value="rate"
        />
        <p
          class="caption"
          style="margin-top: 2px"
        >
          ({{ count }})
        </p>
      </v-col>
    </v-row>
    <v-divider />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: function () {
        return '标题'
      }
    },
    intro: {
      type: String,
      default: function () {
        return '内容'
      }
    },
    count: {
      type: Number,
      default: function () {
        return 800
      }
    },
    rate: {
      type: Number,
      default: function () {
        return 3
      }
    }
  },
  data: () => ({
    icon: 'mdi-bookmark-outline',
    iconText: '收藏'
  }),
  methods: {
    changeIcon () {
      if (this.icon === 'mdi-bookmark-outline') {
        this.icon = 'mdi-bookmark'
        this.iconText = '已收藏'
      } else {
        this.icon = 'mdi-bookmark-outline'
        this.iconText = '收藏'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
#intro .col-10
  padding-right: 0

#intro .saveIcon
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-items: center
  padding-left: 0

#intro .tt
  font-weight: bold

#intro .textbox
  display: -webkit-box
  -webkit-box-orient: vertical
  -webkit-line-clamp: 2
  overflow: hidden

#intro .v-rating
  margin-right: 5px

#intro ::v-deep .mdi-star,
#intro ::v-deep .mdi-star-outline
  padding: 0

</style>
