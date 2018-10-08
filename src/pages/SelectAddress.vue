<template>
  <div class="content">
    <mt-header title="选择地址">
      <router-link :to="/trial-car-order/+this.$route.params.id" slot="left">
        <mt-button icon="back">取消</mt-button>
      </router-link>
    </mt-header>
    <iframe class="frame" src="http://apis.map.qq.com/tools/locpicker?search=1&type=1&key=NJWBZ-RH63D-ENE42-HHCU7-2ZVLO-54FHX&referer=sevencent_mobile" frameborder="0"></iframe>
  </div>
</template>

<script>
  import '../assets/styles/page/trial-car-order.scss'
  import {MessageBox} from 'mint-ui';

  export default {
    name: "selectAddress",
    data() {
      return {
      }
    },
    methods: {
      selectAddress() {
        var context = this;
        window.addEventListener('message', function (e) {
          // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
          var location = e.data;
          if (location && location.module === 'locationPicker') {//防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
            console.log(location)
          }
        });
      }
    },
    created() {
      this.selectAddress();
    }
  }
</script>

<style scoped>
  .content {
    height: 100%;
  }
  .frame {
    width: 100%;
    height: 100%;
  }
</style>
