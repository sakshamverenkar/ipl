<template>
    <div id="app">
        <Home/>
    </div>
</template>

<script>
  import Home from './components/home/home.vue';
  import Vue from "vue";
  // import Chart from 'chart.js';
  // Vue.use(Chart);

  export default {
    name: 'app',
    components: {
      Home
    }
  }
</script>

<style lang="scss">
    @import "@/assets/scss/main.scss";
</style>
