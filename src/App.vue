<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
  watch: {
    $route(to) {
      document.title = to.meta.title;
    },
  },
};
</script>

<style scoped lang>
</style>