<!-- 模板：html结构 -->
<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <!-- tabcontainer -->
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="tab1"><home/></mt-tab-container-item>
        <mt-tab-container-item id="tab2"><contact/></mt-tab-container-item>
        <mt-tab-container-item id="tab3"><discover/></mt-tab-container-item>
        <mt-tab-container-item id="tab4"><me/></mt-tab-container-item>
      </mt-tab-container>
    </div>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item v-for="(item, index) in tabs" :key="index" :id="item.id">
        <img slot="icon" :src="item.id == selected ? item.img : item.default">
        {{item.name}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<!-- 行为：处理逻辑-->
<script>
  import Home from '../components/Home'
  import Contact from '../components/Contact'
  import Discover from '../components/Discover'
  import Me from '../components/Me'

  export default {
    name: 'tabs',
    components: {
      'home': Home,
      'contact': Contact,
      'discover': Discover,
      'me': Me
    },
    data() {
      return {
        selected: this.$route.meta.tab? this.$route.meta.tab : 'tab1',
        tabs: [{
          id: "tab1",
          name: "看车",
          default: require('../assets/mine-line.svg'),
          img: require('../assets/mine-filled.svg')
        }, {
          id: "tab2",
          name: "车讯录",
          default: require('../assets/mine-line.svg'),
          img: require('../assets/mine-filled.svg')
        }, {
          id: "tab3",
          name: "发现",
          default: require('../assets/mine-line.svg'),
          img: require('../assets/mine-filled.svg')
        }, {
          id: "tab4",
          name: "我",
          default: require('../assets/mine-line.svg'),
          img: require('../assets/mine-filled.svg')
        }]
      }
    }
  }
</script>

<!-- 样式：界面样式 -->
<style scoped>
  .page-tabbar-container {
    margin-top: 44px;
  }
</style>
