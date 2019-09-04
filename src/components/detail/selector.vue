<template>
  <div id="selector">
    <v-row>
      <v-col style="padding-bottom:1vw">
        <span class="subtitle-2">类型</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col style="padding-top:0">
        <v-chip-group
          v-model="selection"
          active-class="blue--text text--accent-4"
          mandatory
        >
          <v-chip
            v-for="(item, index) in type"
            :key="index"
          >
            {{ item }}
          </v-chip>
        </v-chip-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          block
          class="white--text"
          color="#1976D2"
          @click="pushToCart"
        >
          添加到购物车
        </v-btn>
      </v-col>
    </v-row>
    <v-divider />
    <v-dialog :item="item" />
  </div>
</template>

<script>
import Dialog from '@/common/_dialog'

export default {
  components: {
    'v-dialog': Dialog
  },
  props: {
    type: {
      type: Array,
      default: function () {
        return ['A', 'B', 'C']
      }
    },
    goods: {
      type: Object,
      default: function () {
        return null
      }
    }
  },
  data: () => ({
    item: {}
  }),
  computed: {
    selection: {
      get: function () {
        return this.$store.state.detail.selected
      },
      // setter
      set: function (newValue) {
        this.$store.state.detail.selected = newValue
      }
    }
  },
  methods: {
    pushToCart: function () {
      this.$store.state.dialog = true
      this.item = {
        id: this.goods.id,
        img: this.goods.imgPath,
        title: this.goods.title,
        onsale: this.goods.onsale,
        type: this.type[this.selection],
        mount: 1
      }
    }
  }
}
</script>
