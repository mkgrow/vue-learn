<template>
  <div>
    <mt-header fixed :title="title" class="title">
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>
<script>
  export default {
    name: 'home',
    data () {
      return {
        title: '看车'
      }
    }
  }
</script>

<style scoped>
  .title {
    height: 44px;
    font-size: 18px;
    color: #fff;
    background-color: #333;
  }
</style>
