<template>
  <header>
    <router-link
      v-if="$route.matched[0].path=='/category'"
      class="icon-go"
      :to="{ name: '首页'}"
    />
    <span
      v-else
      class="icon-go"
      @click="$router.go(-1)"
    />
    <slot name="title" />
  </header>
</template>

<style lang="less" scoped>
@import '../assets/fz.less';
@import '../assets/index/style.css';
header {
  background-color: #F8FCFF;
  text-align: center;
  position: relative;
  height: 12vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4vw;
  h1 {
    .fz(font-size,34);
    letter-spacing: .2vw;
    font-weight: 600;
    margin-right: 36vw;
  }
  span,a {
    display: inline-block;
    .fz(font-size,46);
    transform: rotate(-180deg);
    &::before {
      color:#333;
    }
  }
}

</style>

<script>
export default {

}
</script>
