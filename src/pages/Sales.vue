<template>
  <div class="trial-cars">
    <mt-header fixed :title="title" >
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="25" class="car-list">
      <div class="item" v-for="sale in sales.data" @click="pushToPage(sale)">
        <img class="car-img" :src="getImgUrl(sale.mainPhoto)">
        <div class="car-info">
          <div class="display-name">{{sale.title}}</div>
          <div class="subtitle"><span class="price">{{sale.downPayment}}</span>元享试驾，{{sale.subTitle}}</div>
          <div class="car-shop">钜惠价：{{sale.salePrice}}万元</div>
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
    name: 'sales',
    data() {
      return {
        title: '车商城',
        pageNum: 1
      }
    },
    methods: {
      ...mapActions([
        'getSales'
      ]),
      getImgUrl(key) {
        return 'http://qiniu-cdn.carhot.cn/' + key + '?imageView/2/w/176/h/132'
      },
      pushToPage(trialCar) {
        this.$router.push("/sales/" + trialCar.id);
      },
      loadMore() {
        if (this.$store.state.loadMore.hasMore) {
          this.$store.dispatch('getSales', {page: this.$store.state.sales.pageNum});
        }
      }
    },
    computed: {
      ...mapGetters([
        'sales'
      ])
    },
    beforeCreate() {
      this.$store.state.loadMore.hasMore = true
      this.$store.state.loadMore.noMore = false
      this.$store.state.loadMore.loading = false
    },
    created() {
      this.loading = false
      this.$store.state.tab = 'tab1'
    }
  }

</script>
<style scoped>

</style>
