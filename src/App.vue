<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch:{
    $route(to){
      document.title=to.meta.title
    }
  }
};
</script>

<style scoped lang>
</style>