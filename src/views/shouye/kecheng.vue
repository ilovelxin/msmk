<template>
    
  <div style="background: #eee; height: 100%">
    <app-header style="border: 0.01rem solid #eee">
      <div slot="left">
        <van-icon name="arrow-left" @click="$router.go(-1)" />
      </div>
      <div slot="title">课程详情</div>
      <div slot="right" @click="show = true"><van-icon name="share-o" /></div>
    </app-header>

    <div class="cd-body">
      <!-- 课程详情 -->
      <div class="cd-info">
        <p class="info-title">{{ co_obj.info.title }}</p>
        <i
          @click="co_col(co_obj.info.is_collect, co_obj.info.collect_id)"
          v-if="co_obj.info.is_collect == 0"
        ></i>
        <span @click="co_col(co_obj.info.is_collect, co_obj.info.collect_id)"
          ><van-icon
            name="star"
            color="#eb6100"
            v-if="co_obj.info.is_collect == 1"
        /></span>
        <p
          class="info-price"
          style="color: green"
          v-if="co_obj.info.price == 0"
        >
          免费
        </p>
        <p
          class="info-price"
          style="color: #ee1f1f"
          v-if="co_obj.info.price != 0"
        >
          {{ co_obj.info.price }}.00
        </p>
        <div>
          <p>
            共{{ co_obj.info.total_periods }}课时 |
            {{ co_obj.info.sales_num }}人已报名
          </p>
          <p>
            开课时间：{{ co_obj.info.start_play_date | setTime }} -
            {{ co_obj.info.end_play_date | setTime }}
          </p>
        </div>
      </div>
      <!-- 讲师团队 -->
      <div class="cd-teacher">
        <p>教学团队</p>
        <ul>
          <li v-for="item in co_obj.teachers" :key="item.teacher_id">
            <img :src="item.teacher_avatar" alt="" />
            <span>{{ item.teacher_name }}</span>
          </li>
        </ul>
      </div>
      <!-- 课程介绍 -->
      <div class="cd-tro">
        <p>课程介绍</p>
        <div v-html="co_obj.info.course_details"></div>
      </div>
      <!-- 课程大纲 -->
      <div class="cd-list">
        <p>课程大纲</p>
        <div>
          <section>
            <div>
              <span>回放</span>
              <font v-html="co_obj.info.course_details"></font>
            </div>
            <p>李青&emsp;<span>03月09日 18:30 - 19:30</span></p>
          </section>
        </div>
      </div>
      <!-- 课程评价 -->
      <div class="cd-comment">
        <p>课程评价</p>
        <div class="com-item">
          <div>
            <ul>
              <li v-for="item in co_comment.list" :key="item.id">
                <div>
                  <img :src="item.avatar" alt="" />
                  <div>
                    <div class="info">
                      <span class="name">{{ item.nickname }}</span>
                      <div>
                        <van-rate
                          v-model="item.grade"
                          size="0.12rem"
                          color="#ffd21e"
                          readonly
                        />
                      </div>
                      <span class="time">{{
                        (item.created_at * 1000) | setTime
                      }}</span>
                    </div>
                    <div class="btom">{{ item.content }}</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 报名 -->
    <div class="btn">
      <span v-if="co_obj.info.is_buy == 0" @click="baoming"
        >立即报名</span
      ><span v-if="co_obj.info.is_buy != 0" @click="$router.push(`/xuexi-info?id=${co_obj.info.id}`)">立即学习</span>
    </div>

    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop="show = false">
        <div class="block"></div>
      </div>
    </van-overlay>
  </div>
</template>


<script>
import { Toast } from "vant";
import appHeader from "../../components/Header";
export default {
  name: "",
  components: { appHeader },
  data() {
    return {
      value: 2,
      id: this.$route.query.id, // 课程id
      co_obj: {}, // 课程信息
      show: false, // 分享弹框
      co_comment: {}, // 课程评价
    };
  },
  created() {},
  mounted() {
    this.co();
    this.co_com();
  },
  methods: {
    //   获取课程详细信息
    async co() {
      let { data: res } = await this.$http.courese(this.id);
      this.co_obj = res.data;
    },
    // 获取课程评价
    async co_com() {
      let obj = {
        id: this.id,
        limit: 10,
        page: 1,
      };
      let { data: res } = await this.$http.co_com(obj);
      this.co_comment = res.data;
    },
    // 课程收藏
    async co_col(flag, id) {
      if (flag == 0) {
        let obj = {
          course_basis_id: this.id,
          type: 1,
        };
        let { data: res } = await this.$http.co_col(obj);
        Toast("收藏成功");
        this.co();
      } else {
        let { data } = await this.$http.cel_col(id);
        Toast("已取消");
        this.co();
      }
    },
    // 报名
    async baoming() {
      let obj = {
        shop_id: this.id,
        type: 5,
      };
      let { data: res } = await this.$http.baoming(obj);
      if (res.code == 200) {
        Toast("报名成功");
        this.co();
      } else {
        Toast(res.msg);
      }
    },
  },
  filters: {
    setTime(value) {
      let oldDate = new Date(value);
      let newDate = new Date();
      var dayNum = "";
      var getTime = (newDate.getTime() - oldDate.getTime()) / 1000;
      let year = oldDate.getFullYear();
      let month = oldDate.getMonth() + 1;
      let day = oldDate.getDate();
      let hour = oldDate.getHours();
      let minute = oldDate.getMinutes();
      let second = oldDate.getSeconds();
      return (
        dayNum +
        " " +
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hour +
        ":" +
        minute
      );
    },
  },
};
</script>

<style type="text/scss" scoped lang="scss" >
.cd-body {
  margin-bottom: 11.8vw;
}
.cd-info {
  padding: 4vw;
  background: #fff;
  position: relative;
  > .info-title {
    padding: 4vw;
    background: #fff;
    position: relative;
    font-size: 4.26667vw;
    font-family: PingFangSC-Medium;
    font-weight: 400;
    color: #333;
    padding-right: 10.66667vw;
    line-height: 6.13333vw;
  }
  > i {
    font-size: 4.26667vw;
    position: absolute;
    right: 2.66667vw;
    top: 1.33333vw;
    width: 6.66667vw;
    height: 6.66667vw;
    background: url(data:image/png;base64,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)
      no-repeat 50%;
    background-size: 4.8vw 4.8vw;
  }
  > span {
    font-size: 4.26667vw;
    position: absolute;
    right: 2.66667vw;
    top: 1.33333vw;
    width: 6.66667vw;
    height: 6.66667vw;
    background-size: 4.8vw 4.8vw;
  }
  > .info-price {
    font-size: 4.53333vw;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    line-height: 8.53333vw;
  }
  > div {
    > p {
      font-size: 4vw;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.45);
      line-height: 8vw;
    }
  }
}
.cd-teacher {
  margin-top: 4vw;
  background: #fff;
  padding: 1.33333vw 2.66667vw;
  > p {
    font-size: 4vw;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #262626;
    padding-top: 2.66667vw;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 2.66667vw 0;
    > li {
      padding: 2.66667vw 0;
      width: 20%;
      height: 24vw;
      display: flex;
      align-items: center;
      flex-direction: column;
      box-sizing: border-box;
      > img {
        width: 10.4vw;
        height: 10.4vw;
        border-radius: 50%;
      }
      > span {
        padding: 2.13333vw 0.8vw 0;
        padding-top: 2.13333vw;
        font-size: 3.2vw;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #595959;
      }
    }
  }
}
.cd-tro {
  margin-top: 4vw;
  background: #fff;
  padding: 1.33333vw 2.66667vw;
  > p {
    font-size: 4vw;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #262626;
    padding-top: 2.66667vw;
  }
  > div {
    font-size: 3.73333vw;
    padding: 0.4rem 0.13333rem;
    padding: 4vw 1.33333vw;
  }
}
.cd-list {
  margin-top: 4vw;
  background: #fff;
  padding: 1.33333vw 2.66667vw;
  > p {
    font-size: 4vw;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #262626;
    padding-top: 2.66667vw;
  }
  > div {
    padding: 0 4vw 2.66667vw;
    > section {
      padding: 2.66667vw 0 0 0;
      > div {
        position: relative;
        padding-left: 4vw;
        line-height: 8vw;
        font-size: 3.2vw;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #595959;
        display: flex;
        align-items: center;
        > span {
          display: inline-block;
          margin-right: 1.33333vw;
          padding: 0 1.33333vw;
          height: 4.8vw;
          border-radius: 0.53333vw;
          font-size: 3.2vw;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: hsla(0, 0%, 100%, 0.85);
          line-height: 4.8vw;
          text-align: center;
          background: #ea7a2f;
        }
        > font {
          flex: 1;
        }
      }
      > div::after {
        content: "";
        position: absolute;
        left: 0.53333vw;
        top: 50%;
        transform: translateY(-50%);
        width: 1.06667vw;
        height: 1.06667vw;
        border-radius: 50%;
        background: #eb6100;
      }
      > p {
        font-size: 3.2vw;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #8c8c8c;
        padding-bottom: 1.33333vw;
        padding-left: 6.66667vw;
        > span {
          padding-left: 2.66667vw;
        }
      }
    }
  }
}
.cd-comment {
  margin-top: 4vw;
  background: #fff;
  padding: 1.33333vw 2.66667vw;
  > p {
    font-size: 4vw;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #262626;
    padding-top: 2.66667vw;
  }
  > .com-item {
    li {
      padding: 2.66667vw 2.66667vw;
      > div {
        display: flex;
        > img {
          width: 6.66667vw;
          height: 6.66667vw;
          border-radius: 50%;
        }
        > div {
          flex: 1;
          > .info {
            display: flex;
            padding-left: 2.66667vw;
            align-items: center;
            > .name {
              font-size: 3.73333vw;
              font-weight: 400;
              color: #333;
            }
            > div {
              margin-left: 2.66667vw;
              margin-top: 0;
              height: 4vw;
              box-sizing: border-box;
            }
            > .time {
              flex: 1;
              font-size: 2.93333vw;
              font-family: PingFangSC-Regular;
              font-weight: 400;
              color: #999;
              text-align: right;
            }
          }
          > .btom {
            padding-top: 1.33333vw;
            line-height: 6.4vw;
            color: #999;
            font-size: 3.2vw;
            font-weight: 400;
            margin-left: 2.66667vw;
          }
        }
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
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #fff;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>