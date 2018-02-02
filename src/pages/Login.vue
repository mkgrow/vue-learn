<template>
  <div class="login-page">
    <mt-header title="登录">
      <router-link to="/" slot="left">
        <mt-button @click="handleClose">关闭</mt-button>
      </router-link>
    </mt-header>
    <mt-field placeholder="请输入您的手机号" v-model="phone">
      <mt-button size="small" class="send-code">发送验证码</mt-button>
    </mt-field>
    <mt-field placeholder="请输入验证码" v-model="code"></mt-field>
    <div class="prompt">点击登录，即表示您同意<span class="service">《看车服务协议》</span></div>
    <div class="login-btn">
      <mt-button type="primary" size="large">登录</mt-button>
    </div>
  </div>
</template>

<script>
  import '../assets/styles/page/login-page.scss'

  export default {
    name: "",
    data() {
      return {
        phone: '',
        code: ''
      }
    },
    components: {},
    methods: {
      handleClose() {
        this.$router.push({
          name: 'Tabs'
        })
      }
    },
    created() {
      this.$store.state.tab = 'tab4'
    }
  }
</script>

<style scoped>

</style>
