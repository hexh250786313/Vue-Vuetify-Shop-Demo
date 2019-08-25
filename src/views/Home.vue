<template>
  <v-app
    id="home-page"
  >
    <v-topbar />
    <v-sidebar />

    <v-content>
      <v-container fluid>
        <!--欢迎文本-->
        <v-welcome />
        <!--销售活动-->
        <v-events />
        <!--折扣商品-->
        <v-onsale />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Topbar from '@/components/home/topbar'
import Sidebar from '@/common/_sidebar'
import Welcome from '@/components/home/welcome'
import Events from '@/components/home/events'
import Onsale from '@/components/home/onsale'
import store from '@/store'

export default {
  components: {
    'v-topbar': Topbar,
    'v-welcome': Welcome,
    'v-sidebar': Sidebar,
    'v-events': Events,
    'v-onsale': Onsale
  },
  mounted () {
    // 只在一个 session 生命中的开头读取，flag 负责判断
    if (store.state.home.flag) {

    } else {
      // 请求拦截
      this.$api({
        method: 'post',
        url: '/datas'
      })
      // 拦截完毕
        .then(response => {
          // 放到 store 中
          this.$store.commit('SET_FLAG', 1)
          this.$store.commit('SET_GOODS', response.data.goods)
          this.$store.commit('SET_EVENTS', response.data.events)
        })
      // 处理错误
        .catch(function (error) {
          alert(error)
        })
    }
  }
  /*
  ,
  mounted () {
    setTimeout(() => {
      console.log(this.datas)
    }, 1000)
  }
  */
}
</script>

<style lang="sass" scoped>
.v-content ::v-deep .container
  padding: 0
</style>
