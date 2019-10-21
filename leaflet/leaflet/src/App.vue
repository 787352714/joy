<template>
  <div id="app">
    <test />
  </div>
</template>

<script>
import Test from './view/test'

export default {
  name: 'app',
  components: {
    Test
  }
}
</script>

<style lang="scss">
  @import "./style/index.scss";
  html, body {
    overflow-x: auto;
  }
  #app {
    min-width: 1280px;
    height: 100%;
    overflow: hidden;
  }
</style>
