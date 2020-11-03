<template>
    
  <div>
    <app-header>
      <div slot="left" @click="$router.go(-1)">
        <van-icon name="arrow-left" />
      </div>
      <div slot="title">学习日历</div>
      <div slot="right"></div>
    </app-header>
    <van-calendar
      title=""
      :poppable="false"
      :show-confirm="false"
      :style="{ height: '500px' }"
    />
  </div>
</template>


<script>
import appHeader from "../../components/Header";
export default {
  name: "",
  components: { appHeader },
  data() {
    return {
      show: "",
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang>
</style>