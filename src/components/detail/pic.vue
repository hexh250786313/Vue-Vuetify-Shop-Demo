<template>
  <div id="pic">
    <div>
      <v-avatar
        class="topright"
        size="30"
        @click="goTo"
      >
        <v-icon dark>
          mdi-arrow-left
        </v-icon>
      </v-avatar>
    </div>
    <v-carousel
      height="250"
      :show-arrows="false"
      :continuous="false"
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="(item, index) in pics"
        :key="index"
        :src="item"
      />
    </v-carousel>
  </div>
</template>

<script>
export default {
  props: {
    pic: {
      type: String,
      default: function () {
        return '@/assets/class/01.png'
      }
    }
  },
  data: function () {
    return {
      pics: [
        this.pic,
        this.pic,
        this.pic,
        this.pic
      ]
    }
  },
  methods: {
    goTo () {
      this.$router.go(-1) // 登录成功后，返回上次进入的页面；
    }
  }
}
</script>

<style lang="sass" scoped>
#pic .topright
  position: absolute
  top:  11px
  left: 8px
  z-index: 1
  background: rgb(189, 189, 189, 0.4)

</style>
