<template>
  <div>
    <mt-header fixed :title="title" class="title"></mt-header>
    <div class="item">
      <mt-cell title="我的收藏" is-link>
        <img slot="icon" src="../assets/contact/my-favorite.svg">
      </mt-cell>
    </div>
    <div>
      <mt-cell title="好友车" is-link>
        <img slot="icon" src="../assets/contact/car-friends.svg">
      </mt-cell>
      <mt-cell title="应用号" is-link>
        <img slot="icon" src="../assets/contact/app-account.svg">
      </mt-cell>
    </div>
  </div>
  </div>
</template>
<script>
  export default {
    name: 'contact',
    data () {
      return {
        title: '车讯录'
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
