<template>
  <div class="trial-cars">
    <mt-header :title="title">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="car-list">
      <div class="item" v-for="trialCar in trialCars.data">
        <img class="car-img" :src="getImgUrl(trialCar.cover)">
        <div class="car-info">
          <div class="display-name">{{trialCar.displayName}}</div>
          <div class="subtitle"><span class="price">{{trialCar.price}}</span>元享试驾，{{trialCar.subTitle}}</div>
          <div class="car-shop">{{trialCar.carShopName}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  import '../assets/styles/page/trial-cars-page.css'
  export default {
    name: 'trialCars',
    data() {
      return {
        title: '试驾'
      }
    },
    methods: {
      ...mapActions([
        'getTrialCars'
      ]),
      getImgUrl(key) {
        return 'http://qiniu-cdn.carhot.cn/' +key+'?imageView/2/w/176/h/132'
      }
    },
    computed: {
      ...mapGetters([
        'trialCars'
      ])
    },
    created() {
      this.$store.dispatch('getTrialCars');
      this.$store.state.tab = 'tab1'
    }
  }

</script>
<style scoped>
  .trial-cars {
    background-color: #fff;
  }

  .item {
    display: inline-flex;
    margin-left: 12px;
    border-bottom: .5px solid #e7e7e7;
  }
</style>
