<template>
  <v-app id="departments">
    <v-topbar2 />
    <v-sidebar />

    <v-content>
      <v-container fluid>
        <div
          class="display-1"
          style="margin: 6vw"
        >
          浏览分区
        </div>
        <div v-if="classes">
          <v-class
            v-for="(item, index) in classes"
            :key="index"
            :classes="item"
          />
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import store from '@/store'
import Topbar2 from '@/components/departments/topbar2'
import Class from '@/components/departments/class'
import Sidebar from '@/common/_sidebar'

export default {
  components: {
    'v-topbar2': Topbar2,
    'v-sidebar': Sidebar,
    'v-class': Class
  },
  computed: {
    classes: function () {
      return this.$store.state.departments.class
    }
  },
  created () {
    // 只在一个 session 生命中的开头读取，flag 负责判断
    if (store.state.departments.flagdep) {

    } else {
      // 请求拦截
      this.$api({
        method: 'post',
        url: '/datas'
      })
      // 拦截完毕
        .then(response => {
          // 放到 store 中
          this.$store.commit('SET_CLASS', response.data.class)
          this.$store.commit('SET_FLAG_DEP', 1)
        })
      // 处理错误
        .catch(function (error) {
          alert(error)
        })
    }
  }
}
</script>

<style lang="sass" scoped>
#departments ::v-deep .container
  padding: 0 !important
</style>
