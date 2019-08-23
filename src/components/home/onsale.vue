<template>
  <div id="onsale">
    <p class="headline">
      折扣商品
    </p>
    <v-sheet>
      <v-row
        justify="center"
        no-gutters
        class="top"
      >
        <v-col>
          <v-card>
            ad
          </v-card>
        </v-col>
        <v-col class="right">
          <v-card>
            ad
          </v-card>
        </v-col>
      </v-row>
      <v-row
        no-gutters
        justify="center"
        class="bottom"
      >
        <v-col>
          <v-card>ad</v-card>
        </v-col>
        <v-col class="right">
          <v-card>ad</v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
#onsale
  background: #fff
  padding-top: 5vw
  text-align: center
  margin-top: 18px
  box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -webkit-box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -moz-box-shadow: 0 2px 12px rgba(0,0,0,.1)

#onsale .v-sheet
  padding: 3vw
  border-radius: 0px

#onsale .v-card
  border-radius: 10px
  height: 53vw
  width: 45vw
  box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -webkit-box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -moz-box-shadow: 0 2px 12px rgba(0,0,0,.1)

#onsale .top
  margin-left: 1vw

#onsale .bottom
  margin-left: 1vw
  margin-top: 2vw

#onsale .right
  margin-left: 0.5vw

</style>
