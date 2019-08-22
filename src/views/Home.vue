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
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Topbar from '@/components/home/topbar'
import Sidebar from '@/common/_sidebar'
import Welcome from '@/components/home/welcome'

export default {
  components: {
    'v-topbar': Topbar,
    'v-welcome': Welcome,
    'v-sidebar': Sidebar
  },
  data: () => ({
    pos: 0
  })
}
</script>

<style lang="sass" scoped>
.v-content ::v-deep .container
  padding: 0
</style>
