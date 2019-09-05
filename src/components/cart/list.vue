<template>
  <div>
    <div
      v-for="(item, index) in cartgoods"
      id="list"
      :key="index"
    >
      <v-sheet class="listitem">
        <v-row>
          <v-col cols="4">
            <v-img
              width="64"
              :src="item.img"
            />
          </v-col>
          <v-col style="padding-left:0">
            <v-col style="padding-left:0">
              <div>
                <span
                  class="title"
                  style="display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden"
                >
                  {{ item.title }}
                </span>
                <span class="body-2">免运费</span><br><br>
                <span class="subtitle-2">CN￥{{ item.onsale }}</span>
              </div>
            </v-col>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            aaa
          </v-col>
        </v-row>
      </v-sheet>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cartgoods: {
      type: Array,
      default: function () {
        return null
      }
    }
  }
}
</script>

<style lang="sass" scoped>
#list
  margin-top: 16px
  padding: 14px
  background: #fff
  box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -webkit-box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -moz-box-shadow: 0 2px 12px rgba(0,0,0,.1)

#list .col
  padding: 0 14px 0 14px
  display: flex
  align-items: center

</style>
