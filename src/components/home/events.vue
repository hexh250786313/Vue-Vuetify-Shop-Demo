<template>
  <div id="events">
    <v-sheet>
      <v-card>
        <v-img
          :src="getImgUrl()"
          alt="pic"
        >
          <v-card-text
            class="headline"
            width="100"
          >
            {{ info.title }}
            <p class="subtitle-1">
              {{ info.content }}
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
import theData from '@/http/mock' // 模拟数据

export default {
  data: () => ({
    info: {
      title: '标题',
      content: '内容...。',
      picUrl: 'events_pre' // 预处理一张透明图片，防止初始化时会出错
    }
  }),
  created: function () {
    // 请求拦截
    this.$api({
      method: 'post',
      url: '/datas'
    })
    // 拦截完毕
      .then(response => {
        this.info = response.data.eventsInfo
      })
    // 处理错误
      .catch(function (error) {
        alert(error)
      })
  },
  methods: {
    // 需要拼接，否则会有问题
    getImgUrl () {
      return require('@/assets/' + this.info.picUrl + '.png')
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
