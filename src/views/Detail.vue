<template>
  <div id="detail">
    <v-app v-if="goods">
      <v-pic :pic="goods.imgPath3" />
      <v-content>
        <v-container fluid>
          <v-intro
            :title="goods.title"
            :intro="goods.intro"
            :count="goods.count"
            :rate="goods.rate"
          />
          <v-info
            :onsale="goods.onsale"
            :type="type"
          />
          <v-selector
            :goods="goods"
            :type="type"
          />
          <v-detail />
          <v-comments />
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Pic from '@/components/detail/pic'
import Intro from '@/components/detail/intro'
import Info from '@/components/detail/info'
import Selector from '@/components/detail/selector'
import Detail from '@/components/detail/detail'
import Comments from '@/components/detail/comments'

export default {
  components: {
    'v-pic': Pic,
    'v-intro': Intro,
    'v-info': Info,
    'v-selector': Selector,
    'v-detail': Detail,
    'v-comments': Comments
  },
  data: function () {
    return {
      goods: this.$store.state.home.goods[this.$route.params.id]
    }
  },
  computed: {
    type () {
      return this.goods.type[this.$route.params.id]
    }
  },
  beforeCreate: function () {
    this.$store.state.detail.selected = 0
  }
}
</script>
