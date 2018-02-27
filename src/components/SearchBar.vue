<template>
  <div class="search-bar">
    <div class="search-input">{{placeholder}}</div>
  </div>
</template>
<script>
  export default {
    name: 'search-bar',
    data () {
      return {
        placeholder: '搜索'
      }
    }
  }
</script>

<style scoped>

  .search-bar {
    margin: 8px 12px;
    background-color: #f7f7f7;
  }

  .search-input {
    padding: 0 28px;
    height: 26px;
    line-height: 26px;
    font-size: 13px;
    color: #acb1b7;
    text-align: center;
    border: .5px solid #e7e7e7;
    border-radius: 2px;
    background-color: #fff;
  }

</style>
