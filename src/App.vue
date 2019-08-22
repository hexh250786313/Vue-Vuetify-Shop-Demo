<template>
  <div id="md-shop">
    <router-view />
    <Loading />
    <Tips />
  </div>
</template>

<script>
import Loading from '@/common/_loading'
import Tips from '@/common/_tips'

export default {
  components: {
    Loading,
    Tips
  }
}
</script>

<style lang="sass" scoped>
#_loading
  z-index: 1001 !important
</style>
