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
            :rules="[() => !!account || '请输入账号 &quot;741&quot;', () => accountFlag || '无此账号，请注册账号或输入账号 &quot;741&quot;']"
            outlined
            label="电子邮箱或者电话号码"
            hint="请输入 &quot;741&quot;"
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
            :rules="[() => !!password || '请输入密码 &quot;369&quot', () => passwordFlag || '密码错误，请输入 &quot;369&quot;']"
            outlined
            label="输入您的密码"
            hint="请输入 &quot;369&quot;"
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

    <!--提示信息-->
    <v-snackbar
      v-model="snackbar"
    >
      输入栏不能为空
      <v-btn
        color="#1565C0"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { setTimeout } from 'timers'
import theData from '@/http/mock' // 模拟数据

export default {
  data: () => ({
    snackbar: false,
    accountFlag: true,
    passwordFlag: true,
    show: false,
    overlay: false,
    step: 1,
    account: '',
    password: '',
    list: [],
    theAccount: {}
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
  beforeCreate: function () {
    // 如果是从普通页过来的，意味着 sidebar 打开了，需要先关闭
    this.$store.state.drawer = false
    if (window.sessionStorage.getItem('token')) {
      this.$router.push('/')
    }
  },
  methods: {
    // 读取数据库的账号，并验证账号
    accountLoad: function () {
      if (this.account !== '') {
        // 关闭弹出信息
        this.snackbar = false

        // 请求拦截
        this.$api({
          method: 'post',
          url: '/datas'
        })
        // 拦截完毕
          .then(response => {
            this.list = response.data.accountInfo
          })
        // 处理错误
          .catch(function (error) {
            alert(error)
          })

        // 加载遮罩过渡动画
        this.overlay = true

        // 配对账号
        setTimeout(() => {
          this.theAccount = this.list.filter(item => {
            return this.account === item.account
          })[0]
        }, 1000)

        setTimeout(() => {
          if (this.theAccount) {
            this.overlay = false
            this.step++
          } else {
            this.accountFlag = false
            // 就算变变为了 false，输入框不改变的话依然不会触发提示，因此放一个不被识别的转义字符来触发提示，这是回车键
            this.account = this.account + '\r'
            this.overlay = false
            console.log(document.referrer)
            // 0.5秒后恢复 accountFlag 的状态，否则后续每次输入都会是 false 状态导致不断提示
            setTimeout(() => {
              this.accountFlag = true
            }, 500)
          }
        }, 1500)
      } else {
        this.snackbar = true
      }
    },

    // 验证密码并跳转
    login: function () {
      if (this.password !== '') {
        // 关闭弹出信息
        this.snackbar = false

        // 加载遮罩过渡动画
        this.overlay = true
        setTimeout(() => {
          if (this.password === this.theAccount.password) {
            // 这个是保存登录状态，session_id 表示储存状态（这是个自定义的所有账号特有的主键），SET_USER 表示储存账号
            this.$store.commit('CHANGE_TOKEN', this.theAccount.session_id)
            this.$store.commit('SET_USER', this.theAccount.account)
            if (window.history.length <= 1) {
              this.$router.push('/')
            } else {
              this.$router.go(-1) // 登录成功后，返回上次进入的页面；
            }
          } else {
            this.passwordFlag = false
            // 就算变变为了 false，输入框不改变的话依然不会触发提示，因此放一个不被识别的转义字符来触发提示，这是回车键
            this.password = this.password + '\r'
            this.overlay = false
            // 0.5秒后恢复 passwordFlag 的状态，否则后续每次输入都会是 false 状态导致不断提示
            setTimeout(() => {
              this.passwordFlag = true
            }, 500)
            this.overlay = false
          }
        }, 1000)
      } else {
        this.snackbar = true
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
    height: 125px

  #login-page ::v-deep .v-snack__wrapper
    min-width: 300px

</style>
