<template>
  <div id="info">
    <v-row>
      <v-col cols="7">
        <span class="subtitle-2">CN¥{{ onsale }} · <span v-if="selected || selected === 0">已选  {{ type[selected] }}</span><span v-else>请选择商品</span></span>
        <br>
        <span class="caption">免运费 · 免税</span>
      </v-col>
      <v-col style="text-align:end">
        <v-btn
          style="margin:1.5vw"
          color="#1976D2"
        >
          访问网站
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <span
          class="body-2"
          style="color:#1976D2"
        >详细参数<v-icon
          color="#1976D2"
          style="margin-bottom:2.2px"
        >mdi-menu-right</v-icon></span>
      </v-col>
    </v-row>
    <v-divider />
  </div>
</template>

<script>
export default {
  props: {
    onsale: {
      type: Number,
      default: function () {
        return 500
      }
    },
    type: {
      type: Array,
      default: function () {
        return ['A', 'B', 'C']
      }
    }
  },
  computed: {
    selected: function () {
      return this.$store.state.detail.selected
    }
  },
  methods: {
    changeSelected (cs) {
      this.selected = cs
    }
  }
}
</script>

<style lang="sass" scoped>
#info ::v-deep .v-btn__content
  color: white
</style>
