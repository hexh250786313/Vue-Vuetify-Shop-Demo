<template>
  <div id="top-bar">
    <v-app-bar
      class="topbar"
      elevation="0"
      app
      extension-height="70"
    >
      <v-app-bar-nav-icon @click.stop="$refs.vSidebar.drawer = !$refs.vSidebar.drawer" />
      <v-spacer />

      <v-toolbar-title>Vue MD Shopping</v-toolbar-title>

      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-searchbar />
      </template>
    </v-app-bar>

    <v-sidebar ref="vSidebar" />
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar.vue'
import Searchbar from '@/components/searchbar.vue'

export default {
  components: {
    'v-sidebar': Sidebar,
    'v-searchbar': Searchbar
  }
}
</script>

<style lang="sass" scoped>
.topbar .v-btn--flat,
.topbar .v-app-bar__nav-icon
  margin-top: 3px

.topbar .v-btn--flat
  margin-right: -12px

.topbar .v-toolbar__title
  margin-left: 15px

.topbar
  z-index: 4

</style>
