<template>
  <div id="dialog">
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          商品详情
        </v-card-title>

        <v-card-text style="padding-bottom:0;padding-top:12px">
          商品名称：{{ item.title }}<br>
          类型：{{ item.type }}<br>
          价格：CN￥{{ item.onsale }}<br>
        </v-card-text>

        <v-card-actions>
          <div class="flex-grow-1" />
          <v-btn
            color="grey"
            text
            @click="dialog = false"
          >
            取消
          </v-btn>

          <v-btn
            color="#1976D2"
            text
            @click="addToCart"
          >
            添加到购物车
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: function () {
        return null
      }
    }
  },
  computed: {
    dialog: {
      // getter
      get: function () {
        return this.$store.state.dialog
      },
      // setter
      set: function (newValue) {
        this.aniflag = true
        this.$store.state.dialog = newValue
      }
    }
  },
  methods: {
    addToCart: function () {
      this.$store.commit('PUSH_CARTGOODS', this.item)
      this.$store.state.drawer2 = !this.$store.state.drawer2
      this.$store.state.dialog = false
    }
  }
}
</script>
