<template>
  <!--提示信息-->
  <v-snackbar
    id="tips"
    v-model="snackbar"
  >
    {{ tipstext }}
    <v-btn
      color="#1565C0"
      text
      @click="snackbar = false"
    >
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    tipstext () {
      return this.$store.state.tipstext
    },
    snackbar: {
      // getter
      get: function () {
        return this.$store.state.snackbar
      },
      // setter
      set: function (newValue) {
        this.$store.state.snackbar = newValue
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  #tips ::v-deep .v-snack__wrapper
    min-width: 300px
</style>
