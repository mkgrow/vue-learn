<template>
  <div>
    <mt-header fixed :title="title" class="title"></mt-header>
    <div class="item">
      <mt-cell title="车友圈" is-link>
        <img slot="icon" src="../assets/img/discovery/car-social.svg">
      </mt-cell>
    </div>
    <div class="item">
      <mt-cell title="扫一扫" is-link>
        <img slot="icon" src="../assets/img/discovery/scan.svg">
      </mt-cell>
      <mt-cell title="按喇叭" is-link>
        <img slot="icon" src="../assets/img/discovery/bibi.svg">
      </mt-cell>
    </div>
    <div class="item">
      <mt-cell title="附近有车" is-link>
        <img slot="icon" src="../assets/img/discovery/nearby-car.svg">
      </mt-cell>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'discover',
    data() {
      return {
        title: '发现'
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

  .item {
    margin: 12px 0;
  }
</style>
