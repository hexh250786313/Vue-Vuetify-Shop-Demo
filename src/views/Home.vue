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

export default {
  components: {
    'v-topbar': Topbar,
    'v-welcome': Welcome,
    'v-sidebar': Sidebar,
    'v-events': Events,
    'v-onsale': Onsale
  }
}
</script>

<style lang="sass" scoped>
.v-content ::v-deep .container
  padding: 0
</style>
