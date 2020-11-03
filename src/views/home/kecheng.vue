<template>
  <div style="height: 100%;background:#f0f2f5;">
    <app-header>
      <div slot="left"></div>
      <div slot="title">特色课</div>
      <div slot="right" @click="$router.push('/search')"><van-icon name="search" /></div>
    </app-header>
    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value" :options="option" />
    </van-dropdown-menu>

    <div class="content">
      <div class="item">
        <p class="title"><font>李老师16号到22号地理大课堂开课啦</font></p>
        <div class="time"><p>共1课时</p></div>
        <div class="teacher">
          <div><img src="" alt="" /><font>李青</font></div>
        </div>
        <div class="info">
          <span>139人已报名</span>
          <font style="color:green">免费</font>
          <!-- <font style="green">1.00</font> -->
        </div>
        <div class="ii-icon"></div>
      </div>
    </div>
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
      option: [],
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
      let obj = res.data;
      this.option = obj.appCourseType.map((item) => {
        return { id: item.id, text: item.name, is_show: item.is_show };
      });
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  padding: 4vw;
  > .item {
    background: #fff;
    border-radius: 1.33333vw;
    padding: 0 3.73333vw;
    margin-bottom: 4vw;
    position: relative;
    > .title {
      padding-top: 4vw;
      > font {
        font-size: 4.26667vw;
        font-family: PingFangSC-Medium;
        font-weight: 400;
        color: #333;
      }
    }
    > .time {
      display: flex;
      align-items: center;
      > p {
        height: 8vw;
        line-height: 8vw;
        display: inline-block;
        font-size: 3.2vw;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #666;
        padding-right: 4.53333vw;
        position: relative;
      }
    }
    > .teacher {
      height: 17.33333vw;
      display: flex;
      > div {
        display: flex;
        height: 100%;
        align-items: center;
        > img {
          width: 7.2vw;
          height: 7.2vw;
          border-radius: 50%;
        }
        > font {
          font-size: 3.2vw;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.45);
          margin-left: 2.26667vw;
          margin-right: 4.66667vw;
        }
      }
    }
    > .info {
      border-top: 1px solid #f5f5f5;
      height: 11.73333vw;
      line-height: 11.73333vw;
      display: flex;
      font-size: 3.46667vw;
      font-family: PingFangSC-Regular;
      > span {
        flex: 1;
        padding-right: 2.66667vw;
        color: rgba(0, 0, 0, 0.45);
      }
      > font {
        font-size: 4.26667vw;
      }
    }
  }
}
</style>