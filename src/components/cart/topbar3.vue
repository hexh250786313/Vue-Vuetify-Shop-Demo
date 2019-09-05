<template>
  <div id="topbar3">
    <v-app-bar
      class="topbar3"
      app
      height="65"
    >
      <v-searchbar3 />
    </v-app-bar>
  </div>
</template>

<script>
import Searchbar3 from '@/components/cart/searchbar3'

export default {
  components: {
    'v-searchbar3': Searchbar3
  }
}
</script>

<style lang="sass" scoped>
.topbar3
  box-shadow: 0 2px 12px rgba(0,0,0,.1) !important
  -webkit-box-shadow: 0 2px 12px rgba(0,0,0,.1) !important
  -moz-box-shadow: 0 2px 12px rgba(0,0,0,.1) !important
  z-index: 4

.topbar3 ::v-deep .v-toolbar__content
  padding: 2vw
</style>
