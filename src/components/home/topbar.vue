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
        <v-badge
          color="#1976D2"
          overlap
          class="align-self-center"
        >
          <template v-slot:badge>
            <span
              v-if="cartcount"
              style="font-size:10px"
            >{{ cartcount }}</span>
          </template>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
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
  computed: {
    cartcount: function () {
      return this.$store.state.cart.cartgoods.length
    }
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

.topbar ::v-deep .v-badge__badge
  min-width: 18px
  width: 18px
  height: 18px

</style>
