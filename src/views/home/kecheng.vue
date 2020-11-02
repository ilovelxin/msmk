<template>
  <div>
    <app-header>
      <div slot="left"></div>
      <div slot="title">特色课</div>
      <div slot="right"><van-icon name="search" /></div>
    </app-header>
    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value" :options="option" />
    </van-dropdown-menu>
  </div>
</template>


<script>
import appHeader from "../../components/Header";
export default {
  name: "",
  components: { appHeader },
  data() {
    return {
      value: 0,
      option: [
        { text: "全部", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
    };
  },
  created() {},
  mounted() {
    this.course();
  },
  methods: {
    //   获取课程分类
    async course() {
      let { data: res } = await this.$http.courseClassify();
      console.log(res);
    },
  },
};
</script>

<style scoped lang="scss">
</style>