<template>
  <div class="sale-detail">
    <mt-header>
      <router-link to="/sales" slot="left">
        <mt-button icon="back">车商城</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-index-list>
      <div class="trial-car">
        <div class="car-name">{{sale.title}}</div>
        <div class="car-subtitle">{{sale.subTitle}}</div>
        <mt-swipe :auto="4000" :speed="2000">
          <mt-swipe-item v-for="item in sale.images" :key="item.id">
            <img :src="item.url" class="img">
          </mt-swipe-item>
        </mt-swipe>
        <div class="car-price">
          <span class="down-payment">定金:</span>
          <span class="rmb">￥</span>{{sale.downPayment}}
          <span class="coupon-position">
            <span class="coupon-item car-coin">{{sale.carCoin}}车币</span>
          </span>
        </div>
        <div class="gray-text">裸车优惠金额:{{sale.discountPriceRange}}万元</div>
        <div class="gray-text count-down">优惠倒计时:</div>
      </div>
      <mt-cell class="service" title="选择车型" label="请选择具体车型" is-link></mt-cell>
      <mt-cell class="service" title="金融服务" label="请选择金融服务" is-link></mt-cell>
      <div class="sale-info">
        <div class="trial-car-dealer">经销商信息</div>
        <div class="gray-text"><img class="little-icon" src="../assets/img/car-shop.svg">{{sale.carShopName}}</div>
        <div class="gray-text dealer-address"><img class="little-icon" src="../assets/img/address.svg">{{sale.address}}
        </div>
      </div>
      <div class="car-data">
        <mt-cell title="参数配置" is-link></mt-cell>
        <mt-cell title="车型评分" is-link value="0分"></mt-cell>
      </div>
      <div>
        <mt-cell title="商品详情"></mt-cell>
        <div v-html="sale.htmlSafe" class="html-info"></div>
      </div>
      <div class="btn-area">
        <mt-button type="primary" size="large" class="bottom-btn">在线支付</mt-button>
      </div>
    </mt-index-list>

  </div>
</template>

<script>
  import '../assets/styles/page/trial-car-detail-page.scss'
  import {MessageBox} from 'mint-ui';
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: "saleDetail",
    data() {
      return {}
    },
    methods: {
      ...mapActions([
        'getSale'
      ])
    },
    computed: {
      ...mapGetters([
        'sale'
      ])
    },
    created() {
      this.$store.dispatch('getSale', {id: this.$route.params.id});
    }
  }
</script>

<style scoped>

</style>
