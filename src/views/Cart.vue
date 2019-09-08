<template>
  <v-app id="cart">
    <v-topbar3 />
    <v-sidebar />

    <v-content>
      <v-container fluid>
        <v-summary
          :subtotal="subtotal"
          :change="cartgoods[0]"
        />
        <v-list :cartgoods="cartgoods" />
      </v-container>
    </v-content>
    <v-bottombar :subtotal="subtotal" />
  </v-app>
</template>

<script>
import Topbar3 from '@/components/cart/topbar3'
import Summary from '@/components/cart/summary'
import List from '@/components/cart/list'
import Bottombar from '@/components/cart/bottombar'
import Sidebar from '@/common/_sidebar'

export default {
  components: {
    'v-topbar3': Topbar3,
    'v-sidebar': Sidebar,
    'v-summary': Summary,
    'v-list': List,
    'v-bottombar': Bottombar
  },
  computed: {
    cartgoods: function () {
      return this.$store.state.cart.cartgoods
    },
    subtotal: function () {
      this.$store.commit('SET_SUM')
      return this.$store.state.cart.sum
    }
  }
}
</script>

<style lang="sass" scoped>
#cart ::v-deep .container
  padding: 0
</style>
