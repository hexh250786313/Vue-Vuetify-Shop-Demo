<template>
  <div id="md-shop">
    <router-view />
    <Loading />
    <Tips />
    <Minicart />
  </div>
</template>

<script>
import Loading from '@/common/_loading'
import Tips from '@/common/_tips'
import Minicart from '@/common/_minicart'

export default {
  components: {
    Loading,
    Tips,
    Minicart
  }
}
</script>

<style lang="sass" scoped>
#_loading
  z-index: 1001 !important
</style>
