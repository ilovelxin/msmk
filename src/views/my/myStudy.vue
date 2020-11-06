<template>
    
  <div style="min-height:100%;">
    <!-- 头部 -->
    <app-header style="border-bottom: 0.01rem solid #eee">
      <div slot="left" @click="$router.go(-1)">
        <van-icon name="arrow-left" />
      </div>
      <div slot="title">我的学习</div>
      <div slot="right" @click="$router.push('/rili')">
        <van-icon name="underway-o" />
      </div>
    </app-header>

    <!-- 导航栏 -->
    <van-tabs
      color="#eb6100"
      title-active-color="#eb6100"
      ellipsis
      @click="onClick"
    >
      <van-tab
        v-for="item in nav_obj.typeNum"
        :title="`${item.name}(${item.num})`"
        :key="item.type"
      >
        <div class="list" v-if="item.num != 0">
          <div
            class="item"
            v-for="t in nav_obj.courseList"
            :key="t.course_id"
            @click="$router.push(`/xuexi-info?id=${t.course_id}`)"
          >
            <p class="title">{{ t.title }}</p>
            <div class="time">
              <span>共{{ t.section_num }}课时</span>
            </div>
            <div class="info">
              <div>
                <div>
                  <van-progress :percentage="t.progress_rate" pivot-text="" />
                </div>
                <span>已学习{{ t.progress_rate }}%</span>
              </div>
              <span></span>
            </div>
          </div>
        </div>

        <!-- 空状态 -->
        <van-empty
          description="你还没有添加课程,先去添加课程吧"
          v-if="item.num == 0"
        >
          <van-button type="danger" class="bottom-button" @click="$router.push('/teseke')"> 选择课程 </van-button>
        </van-empty>
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
      nav_obj: {}, // 导航栏
      type: 2,
    };
  },
  created() {},
  mounted() {
    this.nav();
  },
  methods: {
    //   顶部导航栏
    async nav() {
      let { data: res } = await this.$http.myStudy_nav(this.type);
      this.nav_obj = res.data;
    },
    // 切换标签栏
    onClick(index) {
      this.type = this.nav_obj.typeNum[index].type;
      this.nav();
    },
  },
};
</script>

<style scoped lang="scss">
.bottom-button {
  width: 23.46667vw;
  height: 7.46667vw;
  border-radius: 1.06667vw;
  background-color: #eb6100;
  font-size: 3vw;
  color: #fff;
  line-height: 7.46667vw;
}
.list {
  padding: 2.66667vw 4vw;
  > .item {
    background-color: #fff;
    border-radius: 1.33333vw;
    padding: 6vw 3.73333vw;
    margin-bottom: 4vw;
    position: relative;
    box-shadow: 0 0 2vw rgba(0, 0, 0, 0.1);
    > .title {
      font-size: 4.26667vw;
      font-family: PingFangSC-Medium;
      font-weight: 400;
      color: #333;
      vertical-align: top;
    }
    > .time {
      margin-bottom: 8vw;
      font-size: 3.2vw;
      font-weight: 400;
      color: #666;
      margin-top: 2.66667vw;
    }
    > .info {
      display: flex;
      justify-content: space-between;
      > div {
        display: flex;
        align-items: center;
        > div {
          width: 24vw;
          height: 1.06667vw;
          flex: 1;
        }
        > span {
          font-size: 3.2vw;
          color: #8c8c8c;
          margin-left: 0.05rem;
        }
      }
      > span {
        font-size: 3.2vw;
        color: #eb6100;
      }
    }
  }
}
</style>