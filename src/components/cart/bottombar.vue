<template>
  <div>
    <v-app-bar
      class="bottombar"
      bottom
      app
      height="90"
    >
      <v-btn
        v-if="flag"
        dark
        color="#4285F4"
        width="92vw"
        height="46"
        class="subtitle-1"
        @click="dialog = true"
      >
        前 往 支 付
      </v-btn>
      <v-btn
        v-else
        width="92vw"
        height="46"
        class="subtitle-1"
        disabled
      >
        前 往 支 付
      </v-btn>
    </v-app-bar>
    <v-dialog
      v-if="flag"
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          确认支付
        </v-card-title>
        <v-card-text style="padding-bottom:0;padding-top:12px">
          共计：CN￥{{ subtotal }}
        </v-card-text>

        <v-card-actions>
          <div class="flex-grow-1" />
          <v-btn
            color="grey"
            text
            @click="dialog = false"
          >
            取消
          </v-btn>

          <v-btn
            color="#4285F4"
            text
            @click="checkout"
          >
            确认支付
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    subtotal: {
      type: Number,
      default: function () {
        return null
      }
    }
  },
  data: () => ({
    dialog: false
  }),
  computed: {
    flag: function () {
      return this.$store.state.cart.sum
    }
  },
  methods: {
    checkout: function () {
      this.dialog = false
      this.$store.state.loading = true
      setTimeout(() => {
        this.$store.state.tipstext = '支付成功'
        this.$store.state.snackbar = true
        this.$store.state.loading = false
        this.$store.commit('CHECKOUT')
        this.$store.commit('RESET_SELECTEDGOODS')
      }, 1500)
    }
  }
}
</script>

<style lang="sass" scoped>
.bottombar
  box-shadow: 0 -1px 24px rgba(0,0,0,.18) !important
  -webkit-box-shadow: 0 -1px 24px rgba(0,0,0,.18) !important
  -moz-box-shadow: 0 -1px 24px rgba(0,0,0,.18) !important
  z-index: 4

.bottombar .v-btn
  border-radius: 8px

.bottombar ::v-deep .v-btn__content
  font-weight: bold

</style>
