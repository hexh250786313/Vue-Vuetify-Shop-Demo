<template>
  <div id="events">
    <v-sheet>
      <v-card>
        <v-img
          :src="getImgUrl"
          alt="pic"
        >
          <v-card-text
            class="headline"
            width="100"
          >
            {{ events.title }}
            <p class="subtitle-1">
              {{ events.content }}
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              large
              color="#1976D2"
              dark
            >
              马上购买
            </v-btn>
          </v-card-actions>
        </v-img>
      </v-card>
    </v-sheet>
  </div>
</template>

<script>
export default {
  computed: {
    events: function () {
      return this.$store.state.home.events
    },
    getImgUrl: function () {
      return require('@/assets/' + this.events.picUrl + '.png')
    }
  }
}
</script>

<style lang="sass" scoped>
#events
  margin-top: 18px

#events .v-card
  box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -webkit-box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -moz-box-shadow: 0 2px 12px rgba(0,0,0,.1)

#events .v-sheet
  border-radius: 0px

#events .v-card__text
  width: 50%

#events .v-card__actions
  padding-left: 16px

#events .subtitle-1
  margin-bottom: 0

</style>
