<template>
    
  <div style="height: 100%; background: #efefef">
    <app-header>
      <div slot="left" @click="$router.go(-1)">
        <van-icon name="arrow-left" />
      </div>
      <div slot="title">我的收藏</div>
      <div slot="right"></div>
    </app-header>
    <div class="content">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <cours :list="list" @collent="collent"></cours>
      </van-list>
    </div>
  </div>
</template>


<script>
import cours from "../../components/Cours";
import appHeader from "../../components/Header";
export default {
  name: "",
  components: { appHeader, cours },
  data() {
    return {
      list: [],
      page: 1,
      limit: 5,
      loading: false,
      finished: false,
      total: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    async onLoad() {
      let obj = {
        page: this.page,
        limit: this.limit,
        type: 1,
      };
      let { data: res } = await this.$http.my_teacher(obj);
      this.list = res.data.list;
      this.total = res.data.total;
      if (res.code == 200) {
        this.loading = false;
      }
      if (this.list.length >= this.total) {
        this.finished = true;
      }
    },
    collent(id) {
      this.$http.cel_col(id);
      this.onLoad()
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  padding: 4vw 2.66667vw;
}
</style>