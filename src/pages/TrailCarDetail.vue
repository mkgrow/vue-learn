<template>
  <div>
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
  import '../assets/styles/page/trial-car-detail-page.css'
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
  .trial-car {
    padding: 0 12px;
    background-color: #fff;
  }

  .img {
    height: inherit;
    width: 100%;
  }

  .car-name {
    padding-top: 12px;
    font-size: 17px;
    color: #41454d;
    text-align: center;
  }

  .car-subtitle {
    padding: 6px 0 12px;
    font-size: 12px;
    color: #acb1b7;
    text-align: center;
  }

  .rmb {
    font-size: 16px;
    color: #fc3333;
  }

  .car-price {
    margin: 13px 0 6px;
    font-size: 25px;
    color: #fc3333;
  }

  .date {
    padding: 8px 0 12px;
  }

  .gray-text {
    font-size: 12px;
    color: #acb1b7;
  }

  .margin-top {
    margin-top: 8px;
  }

  .pick-up {
    display: flex;
  }

  .address {
    margin-left: 10px;
    font-size: 13px;
  }

  .prompt {
    padding: 10px 12px;
    background-color: #f8fbfd;
  }

  .sale-info {
    margin: 12px 0;
    padding: 0 12px;
    background-color: #fff;
    border-top: 0.55px solid #e7e7e7;
    border-bottom: 0.55px solid #e7e7e7;
  }

  .trial-car-dealer {
    padding: 15px 0 6px;
    font-size: 15px;
    color: #41454d;
  }

  .little-icon {
    margin-right: 6px;
    width: 12px;
    height: 12px;
  }

  .dealer-address {
    padding: 6px 0 16px;
  }

  .line {
    border-top: .55px solid #e7e7e7;
    margin-left: 12px;
  }

  .trial-car-process {
    padding: 16px 43px;
    display: flex;
    background-color: #fff;
  }

  .trial-car-process .step,
  .trial-car-process .step-arrow {
    position: relative;
    display: inline-block;
    flex: 1;
    font-size: 12px;
    text-align: center;
  }

  .trial-car-process .right-arrow {
    width: 10px;
    height: 10px;
    background-image: url('../assets/img/step-arrow.svg');
    background-repeat: no-repeat;
    background-size: contain;
  }

  .trial-car-process .step-hint {
    margin-top: 3px;
    font-size: 11px;
    color: #acb1b7;
  }
  .trial-car-process .v-center {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  .car-data {
    margin: 12px 0;
  }
</style>
