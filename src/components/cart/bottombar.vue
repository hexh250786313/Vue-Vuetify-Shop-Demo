<template>
  <v-app-bar
    class="bottombar"
    bottom
    app
    height="90"
  >
    <v-btn
      dark
      color="#4285F4"
      width="92vw"
      height="46"
      class="subtitle-1"
    >
      前 往 支 付
    </v-btn>
  </v-app-bar>
</template>

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
