<template>
  <div id="md-shop">
    <router-view />
    <Loading />
  </div>
</template>

<script>
import Loading from '@/common/_loading'

export default {
  components: {
    Loading
  }
}
</script>

<style lang="sass" scoped>
  #_loading
    z-index: 1001 !important
</style>
