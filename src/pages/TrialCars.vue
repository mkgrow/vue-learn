<template>
  <div class="trial-cars">
    <mt-header fixed :title="title" >
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="25" class="car-list">
      <div class="item" v-for="trialCar in trialCars.data" @click="pushToPage(trialCar)">
        <img class="car-img" :src="getImgUrl(trialCar.cover)">
        <div class="car-info">
          <div class="display-name">{{trialCar.displayName}}</div>
          <div class="subtitle"><span class="price">{{trialCar.price}}</span>元享试驾，{{trialCar.subTitle}}</div>
          <div class="car-shop">{{trialCar.carShopName}}</div>
        </div>
      </div>
    </div>
    <div class="bottom-area">
      <mt-spinner type="fading-circle" v-if="this.$store.state.loadMore.loading"></mt-spinner>
      <div v-if="this.$store.state.loadMore.noMore" class="no-more">没有更多了</div>
    </div>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  import '../assets/styles/page/trial-cars-page.scss'

  export default {
    name: 'trialCars',
    data() {
      return {
        title: '试驾',
        pageNum: 1
      }
    },
    methods: {
      ...mapActions([
        'getTrialCars'
      ]),
      getImgUrl(key) {
        return 'http://qiniu-cdn.carhot.cn/' + key + '?imageView/2/w/176/h/132'
      },
      pushToPage(trialCar) {
        this.$router.push("/trial-cars/" + trialCar.id);
      },
      loadMore() {
        if (this.$store.state.loadMore.hasMore) {
          this.$store.dispatch('getTrialCars', {page: this.$store.state.loadMore.pageNum});
        }
      }
    },
    computed: {
      ...mapGetters([
        'trialCars'
      ])
    },
    created() {
      this.loading = false
      // this.$store.dispatch('getTrialCars', {page: this.pageNum});
      this.$store.state.tab = 'tab1'
    }
  }

</script>
<style scoped>

</style>
