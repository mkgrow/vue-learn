<template>
  <div>
    <mt-header fixed :title="title" class="title"></mt-header>
    <div class="item">
      <mt-cell title="我的收藏" is-link>
        <img slot="icon" src="../assets/img/contact/my-favorite.svg" class="icon">
      </mt-cell>
    </div>
    <div>
      <mt-cell title="好友车" is-link>
        <img slot="icon" src="../assets/img/contact/car-friends.svg" class="icon">
      </mt-cell>
      <mt-cell title="应用号" is-link>
        <img slot="icon" src="../assets/img/contact/app-account.svg" class="icon">
      </mt-cell>
    </div>
  </div>
  </div>
</template>
<script>
  import '../assets/styles/page/home-page.css'
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

  .icon {
    border-radius: 5px;
  }
</style>
