<template>
  <div id="summary">
    <v-sheet class="background">
      <v-row v-if="change">
        <v-col class="title">
          购物车
        </v-col>
        <v-col class="subtotal title">
          总计：CN￥{{ subtotal }}
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col>
          <span class="title">购物车没有东西，快去添加商品吧。</span>
        </v-col>
      </v-row>
    </v-sheet>
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
    },
    change: {
      type: Object,
      default: function () {
        return null
      }
    }
  },
  data: () => ({
    flag: true
  })
}
</script>

<style lang="sass" scoped>
#summary
  padding: 14px
  background: #fff
  box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -webkit-box-shadow: 0 2px 12px rgba(0,0,0,.1)
  -moz-box-shadow: 0 2px 12px rgba(0,0,0,.1)

#summary .subtotal
  display: flex
  justify-content: flex-end

</style>
