<template>
  <v-app id="cart">
    <v-topbar3 />
    <v-sidebar />

    <v-content>
      <v-container fluid>
        <v-summary :subtotal="subtotal" />
        <v-list :cartgoods="cartgoods" />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Topbar3 from '@/components/cart/topbar3'
import Summary from '@/components/cart/summary'
import List from '@/components/cart/list'
import Sidebar from '@/common/_sidebar'

export default {
  components: {
    'v-topbar3': Topbar3,
    'v-sidebar': Sidebar,
    'v-summary': Summary,
    'v-list': List
  },
  computed: {
    cartgoods: function () {
      return this.$store.state.cart.cartgoods
    },
    subtotal: function () {
      let sum = 0
      for (var i = 0; i < this.cartgoods.length; i++) {
        sum += this.cartgoods[i].mount * this.cartgoods[i].onsale
      }
      return sum
    }
  }
}
</script>

<style lang="sass" scoped>
#cart ::v-deep .container
  padding: 0
</style>
