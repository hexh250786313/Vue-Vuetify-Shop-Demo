<template lang="html">
  <div class="wrap">
    <div class="spinner">
      <div class="double-bounce1" />
      <div class="double-bounce2" />
    </div>
    <p>正在拼命加载中.....</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.wrap {
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 2vw;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999;
}

p {
  text-align: center;
  font-size: 24px;
}

.spinner {
  width: 50px;
  height: 50px;
  position: relative;
  margin: 65% auto;
  margin-bottom: 40px;
}

.double-bounce1,
.double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #facd2d;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: bounce 2s infinite ease-in-out;
  animation: bounce 2s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@-webkit-keyframes bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>
