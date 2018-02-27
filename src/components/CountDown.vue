<template>
  <span :endTime="endTime" :endText="endText">{{time}}</span>
</template>
<script>
  import moment from "moment"
  export default {
    data(){
      return {
        time: '',
        timerId: ''
      }
    },
    props:{
      endTime:{
        type: String
      },
      endText:{
        type : String
      }
    },
    mounted () {
      this.timerId = setInterval(()=>{
        let expiredAt = new Date(this.endTime).getTime();
        let now = new Date().getTime();
        let duration = moment.duration(expiredAt - now);
        this.time = duration.days()+'天' + duration.hours()+'时' + duration.minutes()+'分' +duration.seconds()+'秒';
      },1000);
    },
    destroyed() {
      clearInterval(this.timerId);
    }
  }
</script>
