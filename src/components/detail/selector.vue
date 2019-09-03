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
          Add to Cart
        </v-btn>
      </v-col>
    </v-row>
    <v-divider />
  </div>
</template>

<script>
export default {
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
      const item = {
        id: this.goods.id,
        img: this.goods.imgPath,
        title: this.goods.title,
        onsale: this.goods.onsale,
        type: this.type[this.selection],
        mount: 1
      }
      this.$store.commit('PUSH_CARTGOODS', item)
      this.$store.state.drawer2 = !this.$store.state.drawer2
    }
  }
}
</script>
