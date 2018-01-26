<template>
  <div class="user-info">
    <mt-header fixed :title="title">
      <router-link :to="{path: '/', meta: {tab: 'tab4'}}" slot="left">
        <mt-button icon="back">我</mt-button>
        <!--<mt-button @click="handleClose">我</mt-button>-->
      </router-link>
    </mt-header>
    <div class="info">
      <mt-cell title="头像" is-link>
        <img src="../assets/img-default-avatar.svg" class="head-img">
      </mt-cell>
      <mt-cell title="昵称" is-link value="未设置昵称" class="item"></mt-cell>
      <mt-cell title="性别" is-link value="请选择性别"></mt-cell>
      <mt-cell title="年龄" is-link value="请选择年龄段"></mt-cell>
    </div>
    <div class="list">
      <mt-cell title="行业" is-link value="请选择您的行业"></mt-cell>
      <mt-cell title="公司" is-link value="添加您的公司"></mt-cell>
      <mt-cell title="职业" is-link value="添加您的职业"></mt-cell>
      <mt-cell title="个性签名" is-link value="添加个性签名，介绍一下自己吧"></mt-cell>
    </div>
  </div>
</template>

<script>
  import '../assets/styles/user-info.css'
  export default {
    name: "user-info",
    data() {
      return {
        title: "个人信息"
      }
    },
    created () {
      this.$store.state.tab = 'tab4'
    }
  }

</script>

<style scoped>
  .user-info {
    margin-top: 44px;
  }

  .head-img {
    padding: 12px 2px;
    width: 56px;
    height: 56px;
  }

  .info {
    padding-top: 12px;
  }

  .list {
    margin: 12px 0;
  }

  .item {
    font-size: 14px;
  }
</style>
