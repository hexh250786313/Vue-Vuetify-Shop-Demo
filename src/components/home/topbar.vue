<template>
  <div id="top-bar">
    <v-app-bar
      class="topbar"
      app
      extension-height="70"
    >
      <v-app-bar-nav-icon @click.stop="changeDrawer" />
      <v-spacer />

      <v-toolbar-title>Vue MD 商店</v-toolbar-title>

      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-searchbar />
      </template>
    </v-app-bar>
  </div>
</template>

<script>
import Searchbar from '@/components/home/searchbar'

export default {
  components: {
    'v-searchbar': Searchbar
  },
  methods: {
    changeDrawer: function () {
      this.$store.state.drawer = !this.$store.state.drawer
    }
  }
}
</script>

<style lang="sass" scoped>
.topbar
  box-shadow: 0 2px 12px rgba(0,0,0,.1) !important
  -webkit-box-shadow: 0 2px 12px rgba(0,0,0,.1) !important
  -moz-box-shadow: 0 2px 12px rgba(0,0,0,.1) !important
  z-index: 4

.topbar .v-btn--flat,
.topbar .v-app-bar__nav-icon
  margin-top: 3px

.topbar .v-btn--flat
  margin-right: -12px

.topbar .v-toolbar__title
  margin-left: 15px

</style>
