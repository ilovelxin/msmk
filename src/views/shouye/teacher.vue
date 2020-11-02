<template>
    
  <div style="background: #eee">
    <div class="header">
      <header>
        <span @click="$router.go(-1)"><van-icon name="arrow-left" /></span>
        <h3>讲师详情</h3>
      </header>
    </div>

    <div class="teacher-info">
      <div class="ti-base">
        <img :src="tc_obj.teacher.avatar" alt="" />
        <div>
          <p>
            <span>{{ tc_obj.teacher.real_name }}</span
            ><font>M10</font>
          </p>
          <p>男&emsp;{{ tc_obj.teacher.introduction }}</p>
        </div>
        <button v-if="tc_obj.flag == 0" @click="guan">关注</button>
        <p v-if="tc_obj.flag != 0" @click="guan">已关注</p>
      </div>
      <div class="ti-lable"></div>
    </div>
    <div class="com-box">
        <van-tabs v-model="active" color="#eb6100" title-active-color="#eb6100">
        <van-tab title="讲师介绍">
          <ul>
            <li>
              <span>教龄</span>
              <font>30年</font>
            </li>
          </ul>
        </van-tab>
        <van-tab title="主讲课程">
          <div class="index-page">
            <div
              class="ii-item"
              v-for="(item, index) in co_obj.list"
              :key="index"
            >
              <p class="ii-title">
                {{ item.title }}
              </p>
              <div class="ii-time">
                <p>共{{ item.course_type }}课时</p>
              </div>
              <div class="ii-teacher">
                <img :src="item.teachers_list[0].teacher_avatar" alt="" />
                <font>{{ item.teachers_list[0].teacher_name }}</font>
              </div>
              <p class="ii-info">
                <span>{{ item.sales_num }}人已报名</span>
                <font style="color: #44a426" v-if="item.price == 0">免费</font>
                <font style="color: red" v-if="item.price != 0"
                  >{{ item.price }}.00</font
                >
              </p>
              <img :src="item.cover_img" alt="" />
            </div>
          </div>
          <van-empty description="暂无课程" v-if="co_obj.list.length == 0" />
        </van-tab>
        <van-tab title="学员评价"><van-empty description="暂无评价" /></van-tab>
      </van-tabs>
    </div>
    <div class="btn">
      <span>立即预约</span>
    </div>
  </div>
</template>


<script>
export default {
  name: "",
  data() {
    return {
      id: "", // 讲师id
      active: 0, // 当前下标
      tc_obj: {}, // 讲师信息
      co_obj: [], // 主讲课程
    };
  },
  created() {},
  mounted() {
    this.id = this.$route.query.id;
    this.tc();
    this.course();
  },
  methods: {
    // 讲师信息
    async tc() {
      let { data: res } = await this.$http.teacher(this.id);
      this.tc_obj = res.data;
    },
    // 讲师主讲课程
    async course() {
      let obj = {
        limit: 10,
        page: 1,
        teacher_id: this.id,
      };
      let { data: res } = await this.$http.mainCourse(obj);
      this.co_obj = res.data;
      console.log(this.co_obj);
    },
    // 关注老师
    async guan() {
        let {data:res} = await this.$http.collect(this.id)
        // console.log(res);
        // this.tc()
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  height: 26.66667vw;
  line-height: 11.73333vw;
  background: linear-gradient(180deg, #63b7fe, #4e7de3);
  > header {
    height: 11.73333vw;
    width: 100%;
    padding-right: 6.66667vw;
    box-sizing: border-box;
    color: #fff;
    display: flex;
    > span {
      width: 6.66667vw;
      height: 100%;
      padding-left: 2.66667vw;
    }
    > h3 {
      flex: 2;
      text-align: center;
      font-size: 4.8vw;
      color: #fff;
      font-weight: 400;
    }
  }
}
.teacher-info {
  margin: -15.2vw auto 0;
  width: 94.66667vw;
  padding: 0 4vw;
  background: #fff;
  border-radius: 1.06667vw;
  box-sizing: border-box;
  > .ti-base {
    height: 20.26667vw;
    display: flex;
    align-items: center;
    > img {
      width: 10.66667vw;
      height: 10.66667vw;
      margin-right: 3.2vw;
      border-radius: 50%;
      flex: none;
    }
    > div {
      flex: 1;
      > p:nth-child(1) {
        padding-bottom: 0.8vw;
        > span {
          font-size: 4vw;
          color: #595959;
          line-height: 5.6vw;
          padding-right: 1.33333vw;
        }
        > font {
          font-size: 2.93333vw;
          color: #ea7a2f;
        }
      }
      > p:nth-child(2) {
        font-size: 3.2vw;
        color: #b7b7b7;
        line-height: 4.53333vw;
      }
    }
    > button {
      width: 16.53333vw;
      height: 7.46667vw;
      background: #ebeefe;
      border-radius: 4.13333vw;
      font-size: 3.46667vw;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #eb6100;
      border: 0;
    }
    > p {
      font-size: 4vw;
      color: #b7b7b7;
    }
  }
  > .ti-lable {
    padding-bottom: 4vw;
  }
}
.com-box {
  margin-top: 2.66667vw;
  background: #fff;
}
.van-tabs__content {
  ul {
    padding: 0 4vw;
    > li {
      display: flex;
      line-height: 10.66667vw;
      font-size: 3.46667vw;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #8c8c8c;
      padding-top: 2.66667vw;
      > span {
        margin-left: 1.33333vw;
        margin-right: 5.33333vw;
      }
      > font {
        padding-top: 1.33333vw;
        line-height: 8vw;
        flex: 1;
      }
    }
  }
  .index-page {
    padding: 4vw;
    > .ii-item {
      background: #fff;
      border-radius: 1.33333vw;
      padding: 0 3.73333vw;
      margin-bottom: 4vw;
      position: relative;
      box-shadow: 0 0.4vw 0.93333vw 0 hsla(0, 0%, 81.2%, 0.35);
      > .ii-title {
        padding-top: 4vw;
        font-size: 4.26667vw;
        font-family: PingFangSC-Medium;
        font-weight: 400;
        color: #333;
      }
      > .ii-time {
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
      > .ii-teacher {
        height: 17.33333vw;
        display: flex;
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
      > .ii-info {
        border-top: 1px solid #f5f5f5;
        height: 11.73333vw;
        line-height: 11.73333vw;
        display: flex;
        font-size: 3.46667vw;
        font-family: PingFangSC-Regular;
        > span {
          flex: 1;
        }
        > font {
          font-size: 4.26667vw;
        }
      }
      > img {
        position: absolute;
        right: 4vw;
        top: 17.33333vw;
        background-size: 100% 100%;
        width: 15.73333vw;
        height: 12.8vw;
        border-radius: 50%;
      }
    }
  }
}
.btn {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 11.73333vw;
  line-height: 11.73333vw;
  text-align: center;
  background: #eb6100;
  font-size: 4.53333vw;
  font-weight: 400;
  color: #fff;
}
.btn::after {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: #000;
  border: inherit;
  border-color: #000;
  border-radius: inherit;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 0;
  content: " ";
}
</style>