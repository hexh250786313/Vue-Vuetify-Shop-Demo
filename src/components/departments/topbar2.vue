<template>
  <div id="topbar2">
    <v-app-bar
      class="topbar2"
      app
      height="65"
    >
      <v-searchbar2 />
    </v-app-bar>
  </div>
</template>

<script>
import Searchbar2 from '@/components/departments/searchbar2'

export default {
  components: {
    'v-searchbar2': Searchbar2
  }
}
</script>

<style lang="sass" scoped>
.topbar2
  box-shadow: 0 2px 12px rgba(0,0,0,.1) !important
  -webkit-box-shadow: 0 2px 12px rgba(0,0,0,.1) !important
  -moz-box-shadow: 0 2px 12px rgba(0,0,0,.1) !important
  z-index: 4

.topbar2 ::v-deep .v-toolbar__content
  padding: 2vw
</style>
