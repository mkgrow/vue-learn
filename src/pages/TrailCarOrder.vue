<template>
  <div class="page-trial-car-order">
    <mt-header title="我的试驾">
      <router-link to="/trial-cars" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-index-list>
      <div class="trail-car-content">
        <div class="car-info-box">
          <img :src="getImgUrl(trialCar.cover)">
          <div class="car-info">
            <div class="trial-car-title"> {{trialCar.displayName}}</div>
            <div class="coupon buy-coupon" v-if="trialCar.couponName">{{trialCar.couponName}}</div>
            <div class="coupon car-coin" v-if="trialCar.carCoin">{{trialCar.carCoin}}车币</div>
            <div :class="trialCar.couponName || trialCar.carCoin ? 'subtitle' : 'subtitle margin-top'" > {{trialCar.subTitle}}</div>
          </div>
        </div>

        <div class="car-shop-info">
          <div class="car-shop-name"><img src="../assets/img/pickup-service.svg"><span class="text">接送至{{trialCar.carShopName}}</span></div>
          <div class="dealer-info">
            <img class="top-space" src="../assets/img/trial-car-address.svg">
            <span class="dealer-title">{{trialCar.address}}</span>
          </div>
        </div>

        <div class="amounts-payment money">
          <span class="amount-label">服务费用</span>
          <span class="money-data"><span class="money-sign">￥</span>{{trialCar.price}}</span>
        </div>
      </div>
      <div class="car-data">
        <div @click="openPicker()">
          <span>接车时间：</span>
          <span>{{formatDate(pickerValue)}}</span>
        </div>

        <div @click="pushToPage(trialCar)">
          <span>接车地址：</span>
          <span>打算打算的撒</span>
        </div>
      </div>
      <mt-datetime-picker
        ref="picker"
        type="datetime"
        :startDate="new Date()"
        v-model="pickerValue">
      </mt-datetime-picker>
    </mt-index-list>

  </div>
</template>

<script>
  import '../assets/styles/page/trial-car-order.scss'
  import {mapGetters, mapActions} from 'vuex'
  import moment from "moment"

  export default {
    name: "trialCarOrder",
    data() {
      return {
        pickerValue: this.formatDate(new Date())
      }
    },
    methods: {
      ...mapActions([
        'getTrialCar'
      ]),
      getImgUrl(key) {
        return 'http://qiniu-cdn.carhot.cn/' + key + '?imageView/2/w/176/h/132'
      },
      openPicker() {
        this.$refs.picker.open();
      },
      formatDate(date) {
        return moment(date).format('YYYY/MM/DD HH:mm')
      },
      pushToPage(trialCar) {
        this.$router.push("/select-address/"+trialCar.id);
      }
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
