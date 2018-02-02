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
  import { MessageBox } from 'mint-ui';

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
        selected: this.$store.state.tab,
        tabs: [{
          id: "tab1",
          name: "看车",
          default: require('../assets/img/mine-line.svg'),
          img: require('../assets/img/mine-filled.svg')
        }, {
          id: "tab2",
          name: "车讯录",
          default: require('../assets/img/mine-line.svg'),
          img: require('../assets/img/mine-filled.svg')
        }, {
          id: "tab3",
          name: "发现",
          default: require('../assets/img/mine-line.svg'),
          img: require('../assets/img/mine-filled.svg')
        }, {
          id: "tab4",
          name: "我",
          default: require('../assets/img/mine-line.svg'),
          img: require('../assets/img/mine-filled.svg')
        }]
      }
    },
    watch: {
      selected: function (val, oldVal) {
        // 这里就可以通过 val 的值变更来确定
        this.icon=val;
        this.$store.state.isLogin = true
        if (val == 'tab4' && this.$store.state.isLogin) {
          this.$router.push({
            name: 'Login'
          })
        }
      }
    },
  }
</script>

<!-- 样式：界面样式 -->
<style scoped>

</style>
