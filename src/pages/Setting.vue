<template>
  <div class="setting-page">
    <mt-header fixed :title="title">
      <router-link :to="{path: '/', meta: {tab: 'tab4'}}" slot="left">
        <mt-button icon="back">我</mt-button>
      </router-link>
    </mt-header>
    <div class="item">
      <mt-cell title="账户与安全" is-link></mt-cell>
    </div>
    <div class="item">
      <mt-cell title="实名认证" is-link></mt-cell>
      <mt-cell title="车主认证" is-link></mt-cell>
    </div>
    <div class="item">
      <mt-cell title="我的地址" is-link></mt-cell>
    </div>
    <div class="item">
      <mt-cell title="法律条款" is-link></mt-cell>
      <mt-cell title="关于我们" is-link></mt-cell>
    </div>
    <div class="item">
      <mt-button class="btn">退出登录</mt-button>
    </div>
  </div>
</template>
<script>
  import '../assets/styles/page/setting-page.scss'
  export default {
    name: 'me',
    data() {
      return {
        title: '设置',
        consumer: {}
      }
    },
    created() {
      this.$store.state.tab = 'tab4'
    }
  }
</script>

<style scoped>

</style>
