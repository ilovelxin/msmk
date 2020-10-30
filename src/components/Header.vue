<template>
    
  <div>
    <van-sticky>
      <div class="header">
        <slot name="left">left</slot>
        <slot name="title">title</slot>
        <slot name="right">right</slot>
      </div>
    </van-sticky>
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
};
</script>

<style scoped lang="scss">
.header {
  height: 11.73333vw;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:0 5vw;
}
</style>