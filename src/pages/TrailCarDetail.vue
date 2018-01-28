<template>
  <div class="trial-car-detail">
    <mt-header>
      <router-link to="/trial-cars" slot="left">
        <mt-button icon="back">试驾</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-index-list>
      <div class="trial-car">
        <div class="car-name">{{trialCar.displayName}}</div>
        <div class="car-subtitle">{{trialCar.subTitle}}</div>
        <mt-swipe :auto="4000" :speed="2000">
          <mt-swipe-item v-for="item in trialCar.images" :key="item.id">
            <img :src="item.url" class="img">
          </mt-swipe-item>
        </mt-swipe>
        <div class="car-price"><span class="rmb">￥</span>{{trialCar.price}}</div>
        <div class="date gray-text">预约有效期至：{{trialCar.expiredDate}}</div>
      </div>
      <div class="prompt">
        <div class="pick-up"><img src="../assets/img/pickup-service.svg"><span class="gray-text address">接送至{{trialCar.carShopName}}</span>
        </div>
        <div class="gray-text margin-top">西安市内用户09:00 - 16:30</div>
        <div class="gray-text margin-top">阎良高陵地区用户每天13:00接车</div>
      </div>
      <div class="sale-info">
        <div class="trial-car-dealer">经销商信息</div>
        <div class="gray-text"><img class="little-icon" src="../assets/img/car-shop.svg">{{trialCar.carShopName}}</div>
        <div class="gray-text dealer-address"><img class="little-icon" src="../assets/img/address.svg">{{trialCar.address}}
        </div>
      </div>
      <div>
        <mt-cell title="试驾流程" is-link value="查看详情"></mt-cell>
        <div class="line"></div>
        <div class="trial-car-process">
          <div class="step">
            <div><img src="../assets/img/step-first.svg"></div>
            <div class="step-hint">选择服务</div>
          </div>

          <div class="step-arrow">
            <div class="right-arrow v-center"></div>
          </div>

          <div class="step">
            <div><img src="../assets/img/step-second.svg"></div>
            <div class="step-hint">预约接车</div>
          </div>

          <div class="step">
            <div class="right-arrow v-center"></div>
          </div>

          <div class="step">
            <div><img src="../assets/img/step-third.svg"></div>
            <div class="step-hint">试乘试驾</div>
          </div>
        </div>
      </div>
      <div class="car-data">
        <mt-cell title="参数配置" is-link></mt-cell>
        <mt-cell title="车型评分" is-link value="0分"></mt-cell>
      </div>
      <div>
        <mt-cell title="商品详情"></mt-cell>
        <div v-html="trialCar.htmlSafe" class="html-info"></div>
      </div>
      <div class="btn-area">
        <mt-button type="primary" size="large" class="bottom-btn">接车试驾</mt-button>
      </div>
    </mt-index-list>

  </div>
</template>

<script>
  import '../assets/styles/page/trial-car-detail-page.scss'
  import {MessageBox} from 'mint-ui';
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: "trialCarDetail",
    data() {
      return {}
    },
    methods: {
      ...mapActions([
        'getTrialCar'
      ])
    },
    computed: {
      ...mapGetters([
        'trialCar'
      ])
    },
    created() {
      this.$store.dispatch('getTrialCar', {id: this.$route.params.id});
    }
  }
</script>

<style scoped>

</style>
