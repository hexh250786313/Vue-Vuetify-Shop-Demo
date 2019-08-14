<template>
  <v-app id="login-page">
    <v-avatar>
      <img
        src="https://raw.githubusercontent.com/hexh250786313/amai_mayoi.github.io/master/img/tama.ico"
        alt="Vue"
      >
    </v-avatar>
    <h1 class="headline">
      登录
    </h1>
    <span class="subtitle">
      {{ tipText }}
    </span>

    <v-window v-model="step">
      <v-window-item :value="1">
        <!--这个 v-sheet 是用来限制 input 的长宽的-->
        <v-sheet>
          <v-text-field
            v-model="model"
            outlined
            label="电子邮箱或者电话号码"
            hint="请输入 &quot;admin@admin.com&quot;"
          />
        </v-sheet>
        <p>忘记了电子邮件地址?</p>
      </v-window-item>

      <v-window-item :value="2">
        <v-sheet>
          <v-text-field
            v-model="model"
            outlined
            label="输入您的密码"
            hint="请输入 &quot;admin&quot;"
          />
        </v-sheet>
        <p>忘记了电子邮件地址?</p>
      </v-window-item>

      <v-row no-gutters>
        <v-col>
          <v-btn
            id="register"
            color="#fff"
            depressed
            type="text"
          >
            创建账号
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            id="input-password"
            color="primary"
            depressed
            @click="acountLoad"
          >
            下一步
          </v-btn>
        </v-col>
      </v-row>
    </v-window>

    <v-overlay
      color="#fff"
      opacity="0.5"
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

export default {
  data: () => ({
    overlay: false,
    step: 1,
    model: ''
  }),
  computed: {
    tipText () {
      switch (this.step) {
        case 1: return '使用您的登录账号'
        case 2: return '要继续操作，请首先验证登录者是本人'
        default: return '使用您的登录账号'
      }
    }
  },
  methods: {
    acountLoad: function () {
      this.overlay = true
      setTimeout(() => {
        this.overlay = false
        this.step++
      }, 1500)
    }
  }
}
</script>

<style lang="sass" scoped>

  #login-page
    background: #FFF

  #login-page ::v-deep .v-application--wrap
    align-items: center
    margin: 3vh
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
    margin-right: 20vw

  #login-page #input-password
    margin-left: 21vw

  #login-page p
    margin-bottom: 50px
    margin-right: 50vw
    color: #1565C0

  #login-page ::v-deep .v-overlay
    justify-content: flex-start
    align-items: stretch

  #login-page ::v-deep .v-overlay__content
    position: static

</style>
