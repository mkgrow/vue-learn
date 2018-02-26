<template>
  <div class="articles">
    <mt-header fixed :title="title" >
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="25" class="article-list">
      <div class="item" v-for="article in articles.data" @click="pushToPage(article)">
        <div class="single-image-box" v-if="article.attachments.length == 1">
          <div class="single-image-title">
            <div class="title">{{article.title}}</div>
            <div class="time">{{formatDate(article.createdAt)}}</div>
          </div>
          <div class="single-image" :style="{backgroundImage: 'url('+getImgUrl(article.attachments[0].attach_key)+')'}"></div>
        </div>

        <div class="multi-images" v-if="article.attachments.length > 1">
          <div class="single-image-title title">{{article.title}}</div>
          <div class="box-multi-img" v-if="article.attachments.length > 1">
            <div class="multi-img" v-for="attachment in article.attachments" :style="{backgroundImage: 'url('+getImgUrl(attachment.attach_key)+')'}"></div>
          </div>
          <div class="time">{{formatDate(article.createdAt)}}</div>
        </div>

        <div class="no-images" v-if="article.attachments.length == 0">
          <div class="single-image-title title">{{article.title}}</div>
          <div class="time">{{formatDate(article.createdAt)}}</div>
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
  import '../assets/styles/page/articles-page.scss'
  import moment from "moment"

  export default {
    name: 'articles',
    data() {
      return {
        title: '车头条',
        pageNum: 1
      }
    },
    methods: {
      ...mapActions([
        'getArticles'
      ]),
      getImgUrl(key) {
        return 'http://qiniu-cdn.carhot.cn/' + key + '?imageView/2/w/176/h/132'
      },
      formatDate(date) {
        return moment(date).format('YYYY/MM/DD')
      },
      pushToPage(article) {
        this.$router.push("/articles/" + article.id);
      },
      loadMore() {
        if (this.$store.state.loadMore.hasMore) {
          this.$store.dispatch('getArticles', {page: this.$store.state.loadMore.pageNum});
        }
      }
    },
    computed: {
      ...mapGetters([
        'articles'
      ])
    },
    created() {
      this.loading = false
      this.$store.state.tab = 'tab1'
    },
    destroyed() {
      this.$store.state.loadMore.hasMore = true
      this.$store.state.loadMore.noMore = false
      this.$store.state.loadMore.loading = false
    }
  }

</script>
<style scoped>

</style>
