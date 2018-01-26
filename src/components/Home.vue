<template>
  <div class="home-page">
    <mt-header fixed :title="title" class="title">
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="line"></div>
    <div class="cell" v-for="subscription in subscriptions.data">
      <mt-cell :title="subscription.name" :label="subscription.latestMsg" :to="getLink(subscription.name)">
        <img slot="icon" :src="getImgUrl(subscription.logo)" class="avator">
        <div>{{formatDate(subscription.latestMsgAt)}}</div>
      </mt-cell>
    </div>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  import moment from "moment"
  export default {
    name: 'home',
    data() {
      return {
        title: '看车'
      }
    },
    methods: {
      ...mapActions([ // 从store上绑定的action中载入需要的到此组件中
        'getSubscriptions' // 我们稍后在src/store/actions.js中创建一个名为fun的方法
      ]),
      formatDate(date) {
        return moment(date).format('YYYY-MM-DD')
      },
      getImgUrl(url) {
        return require(`${process.env.BASE_URL}${url}`)
      },
      getLink(name) {
        switch (name) {
          case '车商城':
            return '';
          case '试驾':
            return '/trial-cars';
          case '车头条':
            return '';
          case '活动':
            return '';
        }
      }
    },
    computed: {
      ...mapGetters([ // 从store上绑定的getters中载入需要的到此组件中
        'subscriptions' // 我们稍后在src/store/getters.js中创建一个名为msg的方法
      ])
    },
    created() {
      this.$store.dispatch('getSubscriptions')
    }
  }
</script>

<style scoped>
  .home-page {
    margin-top: 12px;
  }

  .line {
    border-top: .5px solid #e7e7e7;
  }

  .title {
    height: 44px;
    font-size: 18px;
    color: #fff;
    background-color: #333;
  }

  .avator {
    padding: 12px 2px;
    width: 56px;
    height: 56px;
  }
</style>
