<template>
  <v-overlay
    id="_loading"
    :value="overlay"
  >
    <v-progress-circular
      indeterminate
      size="64"
    />
  </v-overlay>
</template>

<script>
export default {
  computed: {
    overlay () {
      return this.$store.state.loading
    }
  }
}
</script>
