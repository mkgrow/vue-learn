<template>
  <div class="me-page">
    <mt-header fixed :title="title" class="title"></mt-header>
    <div class="cell">
      <mt-cell title="未设置昵称" label="看车号：542341" is-link to="/user-info" class="user">
        <img slot="icon" src="../assets/img/img-default-avatar.svg" class="avator">
        <img src="../assets/img/ico-qrcode.svg">
      </mt-cell>
    </div>
    <div class="item">
      <mt-cell title="我的车" is-link>
        <img slot="icon" src="../assets/img/me/ico-mycar.svg">
      </mt-cell>
      <mt-cell title="钱包" is-link>
        <img slot="icon" src="../assets/img/me/ico-wallet.svg">
      </mt-cell>
      <mt-cell title="卡券" is-link>
        <img slot="icon" src="../assets/img/me/ico-coupon.svg">
      </mt-cell>
    </div>
    <div>
      <mt-cell title="订单" is-link>
        <img slot="icon" src="../assets/img/me/ico-order.svg">
      </mt-cell>
    </div>
    <div class="item">
      <mt-cell title="设置" is-link>
        <img slot="icon" src="../assets/img/me/ico-settings.svg">
      </mt-cell>
    </div>
  </div>
</template>
<script>
  import '../assets/styles/page/me-page.scss'
  export default {
    name: 'me',
    data() {
      return {
        title: '我'
      }
    }
  }
</script>

<style scoped>

</style>
