<!-- 模板：html结构 -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<!-- 行为：处理逻辑-->
<script>
  export default {
    name: 'app',

    data () {
      return {}
    }
  }
</script>

<!-- 样式：界面样式 -->
<style lang="scss">
  #app {
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: #f7f7f7;
  }
</style>
