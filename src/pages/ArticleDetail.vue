<template>
  <div class="article-item-page">
    <mt-header>
      <router-link to="/articles" slot="left">
        <mt-button icon="back">车头条</mt-button>
      </router-link>
    </mt-header>
    <mt-index-list>
      <div class="title-height" v-if="article.title">
        {{article.title}}
      </div>

      <div class="article-content" v-if="article.content">
        <div class="article">
          {{article.newsOwner.name}}
          <span class="time">{{formatDate(article.createdAt)}}</span>
        </div>
        <div class="html-content large" v-html="article.content">
        </div>
        <div class="footer-read">
          阅读：{{article.impressionsCount || 0}}
        </div>
      </div>
    </mt-index-list>
  </div>
</template>

<script>
  import '../assets/styles/page/article-item-page.scss'
  import {mapGetters, mapActions} from 'vuex';
  import moment from "moment"

  export default {
    name: "articleDetail",
    data() {
      return {}
    },
    methods: {
      ...mapActions([
        'getArticle'
      ]),
      formatDate(date) {
        return moment(date).format('YYYY/MM/DD')
      },
    },
    computed: {
      ...mapGetters([
        'article'
      ])
    },
    created() {
      this.$store.dispatch('getArticle', {id: this.$route.params.id});
    }
  }
</script>

<style scoped>

</style>
