<template>
  <v-app id="login-page">
    <v-avatar>
      <img
        src="https://raw.githubusercontent.com/hexh250786313/amai_mayoi.github.io/master/img/tama.ico"
        alt="Vue"
      >
    </v-avatar>
    <h1 class="headline">
      {{ title }}
    </h1>
    <span
      v-if="account && step > 1"
      class="subtitle"
    >
      {{ account }}
    </span>
    <span class="subtitle">
      {{ tipText }}
    </span>

    <v-window v-model="step">
      <v-window-item :value="1">
        <!--这个 v-sheet 是用来限制 input 的长宽的-->
        <v-sheet>
          <v-text-field
            v-model="account"
            :rules="[() => !!account || '请输入账号 &quot;admin@admin.com&quot;']"
            outlined
            label="电子邮箱或者电话号码"
            hint="请输入 &quot;admin@admin.com&quot;"
          />
        </v-sheet>
        <p>忘记了电子邮件地址?</p>
        <v-container fluid>
          <v-row>
            <v-col>
              <v-row justify="space-around">
                <v-btn
                  id="register"
                  color="#fff"
                  depressed
                  type="text"
                >
                  创建账号
                </v-btn>
                <v-spacer />
                <v-btn
                  id="input-password"
                  color="primary"
                  depressed
                  @click="accountLoad"
                >
                  下一步
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>

      <v-window-item :value="2">
        <v-sheet>
          <v-text-field
            v-model="password"
            :rules="[() => !!account || '请输入密码 &quot;admin&quot']"
            outlined
            label="输入您的密码"
            hint="请输入 &quot;admin&quot;"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
          />
        </v-sheet>
        <p>忘记了密码?</p>
        <v-container fluid>
          <v-row>
            <v-col>
              <v-row justify="space-around">
                <v-btn
                  id="register"
                  color="#fff"
                  depressed
                  type="text"
                  @click="step--"
                >
                  上一步
                </v-btn>
                <v-spacer />
                <v-btn
                  id="input-password"
                  color="primary"
                  depressed
                  @click="login"
                >
                  登录
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>

    <!--进度条和遮罩层-->
    <v-overlay
      color="#fff"
      opacity="0.6"
      :value="overlay"
    >
      <v-progress-linear
        indeterminate
        absolute
        color="#1565C0"
        light
      />
    </v-overlay>
  </v-app>
</template>

<script>
import { setTimeout } from 'timers'
import theData from '@/http/mock' // 模拟数据

export default {
  data: () => ({
    show: false,
    overlay: false,
    step: 1,
    account: '',
    password: '',
    list: [],
    filteredAccount: []
  }),
  computed: {
    tipText () {
      switch (this.step) {
        case 1: return '使用您的登录账号'
        case 2: return '要继续操作，请首先验证登录者是本人'
        default: return '使用您的登录账号'
      }
    },
    title () {
      switch (this.step) {
        case 1: return '登录'
        case 2: return '欢迎您'
        default: return '登录'
      }
    }
  },
  methods: {
    login: function () {

    },
    accountLoad: function () {
      if (this.account !== '') {
        // 请求拦截
        this.$api({
          method: 'post',
          url: '/datas'
        })
        // 拦截完毕
          .then(function (response) {
            console.log(response.data.accountInfo)
            this.list = response.data.accountInfo.filter(function (item) {
              return item.account === this.account
            })
            console.log(this.list)
          })
        // 处理错误
          .catch(function (error) {
            alert(error)
          })
        this.overlay = true
        setTimeout(() => {
          if (this.list[0]) {
            console.log(this.list[0].account)
            this.overlay = false
            this.step++
          } else {
            this.overlay = false
          }
        }, 1500)
      } else {
        alert('输入账号')
      }
    }
  }
}
</script>

<style lang="sass" scoped>

  #login-page
    background: #FFF

  #login-page ::v-deep .v-application--wrap
    align-items: center
    padding: 3vh
    min-height: 94vh

  #login-page h1
    margin-top: 16px

  #login-page .subtitle
    margin-top: 8px

  #login-page ::v-deep .v-input__control
    margin-top: 30px

  #login-page .v-input
    width: 88vw

  #login-page #register
    color: #1565C0
    padding-left: 6px
    padding-right: 6px
    left: -8px

  #login-page p
    margin-bottom: 50px
    margin-right: 50vw
    color: #1565C0

  #login-page ::v-deep .v-overlay
    justify-content: flex-start
    align-items: stretch

  #login-page ::v-deep .v-overlay__content
    position: static

  #login-page .v-sheet
    height: 120px

</style>
