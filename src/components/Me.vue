<template>
  <div class="me-page">
    <mt-header fixed :title="title" class="title"></mt-header>
    <div class="cell">
      <mt-cell :title="nickName(consumer)" :label="owerNum(consumer)" is-link to="/user-info" class="user">
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
      <mt-cell title="设置" to="/setting" is-link>
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
        title: '我',
        consumer: {}
      }
    },
    methods: {
      nickName(consumer) {
        return consumer.nickName ? consumer.nickName : '未设置昵称'
      },
      owerNum(consumer) {
        return `看车号：${consumer.carOwnerNumber}`
      }
    },
    created() {
      this.consumer = this.$store.state.consumer
    }
  }
</script>

<style scoped>

</style>
