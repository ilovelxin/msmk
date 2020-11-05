<template>
    
  <div style="height: 100% background:#eee">
    <app-header style="border-bottom: 0.01rem solid #eee">
      <div slot="left"></div>
      <div slot="title">约课记录</div>
      <div slot="right"></div>
    </app-header>
    <van-tabs v-model="active">
      <van-tab title="待上课">
        <div>
          <van-empty description="还没有待上课的记录哦">
            <van-button type="warning" class="bottom-button" @click="$router.push('/oto')">
              立即约课
            </van-button>
          </van-empty>
        </div>
      </van-tab>
      <van-tab title="已上课">
        <div>
          <van-empty description="还没有上课记录哦">
            <van-button type="warning" class="bottom-button" @click="$router.push('/oto')">
              立即约课
            </van-button>
          </van-empty>
        </div>
      </van-tab>
      <van-tab title="已取消">
        <div>
          <van-empty description="还没有取消上课的记录哦">
          </van-empty>
        </div>
      </van-tab>
    </van-tabs>
      
  </div>
</template>


<script>
import appHeader from "../../components/Header";
export default {
  name: "",
  components: { appHeader },
  data() {
    return {
      active: 0,
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.bottom-button {
  width: 25.46667vw;
  height: 7.46667vw;
  font-size: 3.46667vw;
}
</style>