<template>
  <div id="comments">
    <v-row>
      <v-col style="padding-bottom:1vw">
        <span class="subtitle-2">评论</span>
      </v-col>
    </v-row>
    <v-row style="color:white">
      <v-col class="outer">
        <ul class="slide-group">
          <li
            v-for="(item, index) in comment"
            :key="index"
            style="list-style:none"
          >
            <v-card
              class="ma-4"
              height="201"
              width="264"
            >
              <v-row>
                <v-col style="padding-bottom:0; padding-top:0">
                  {{ item.user }}
                </v-col>
              </v-row>
              <v-row>
                <v-col style="padding-bottom:0; padding-top:0">
                  <v-rating
                    dense
                    readonly
                    size="10"
                    full-icon="mdi-star"
                    empty-icon="mdi-star-outline"
                    :value="item.rating"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col class="textbox">
                  {{ item.comment }}
                </v-col>
              </v-row>
              <div class="more caption">
                查看完整评论
                <v-icon
                  color="#1976D2"
                  style="margin-bottom:2.2px"
                >
                  mdi-menu-right
                </v-icon>
              </div>
            </v-card>
          </li>
          <li>
            <div style="width:12px" />
          </li>
        </ul>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    comment: [
      {
        user: 'IGN.com',
        comment: '打开盒子一瞬间觉得很惊艳，和图上看起来没有什么差别，好看！',
        rating: 5
      }, {
        user: 'Polygon',
        comment: '首先打开包装就看到满满啊的惊喜，里面还赠送一个哆啦A梦的手办，手表质感比想象中更好，超级喜欢，实物比照片更带感，爱了！',
        rating: 3
      }, {
        user: 'The Verge',
        comment: '很酷炫！手感很好！高大上！简单大方得体的漂亮 哈哈哈',
        rating: 4
      }, {
        user: 'GameSpot',
        comment: '东西收到了，很喜欢，非常帅，非常适合我',
        rating: 4
      }, {
        user: 'Nintendo Life',
        comment: '我买的是黑白的，质量真心不错，重量也刚刚合适，用着感觉非常好',
        rating: 5
      }, {
        user: 'Destructoid',
        comment: '现代化的设计，实物也有质感。唯一的看时间需要仔细了',
        rating: 3
      }, {
        user: 'Kotaku',
        comment: '我的手挺粗的，带上也刚好，特别喜欢这款手表。快递到手就迫不及待的带上来。有些问题请教了客服，客服很细心的回答，物流也快',
        rating: 3
      }, {
        user: 'Trusted Reviews',
        comment: '手表很好，颜值控必选手表，很帅气，媳妇儿很喜欢！',
        rating: 5
      }
    ]
  })
}
</script>

<style lang="sass" scoped>
#comments .outer
  padding: 0
  margin-right: 16px !important
  width: 100%
  -webkit-overflow-scrolling: touch

#comments .slide-group
  display: -ms-flex
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  padding: 0
  overflow-x: auto

#comments .slide-group::-webkit-scrollbar
  display: none

#comments .justify-center
  overflow: hidden

#comments .v-card
  border-radius: 7px
  margin: 7px !important
  margin-right: 0 !important
  margin-left: 12px !important
  padding: 16px
  box-shadow: 0 1px 6px rgba(32,33,36,.28)
  -webkit-box-shadow: 0 1px 6px rgba(32,33,36,.28)
  -moz-box-shadow: 0 1px 6px rgba(32,33,36,.28)

#comments .textbox
  padding-bottom: 0
  display: -webkit-box
  -webkit-box-orient: vertical
  -webkit-line-clamp: 3
  overflow: hidden

#comments .more
  position: absolute
  bottom:  16px
  left: 16px
  color: #1976D2

</style>
