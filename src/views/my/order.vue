<template>
  <div>
    <!-- 表头 -->
    <app-header>
      <div slot="left" @click="$router.go(-1)">
        <van-icon name="arrow-left" />
      </div>
      <div slot="title">{{ $route.query.name }}</div>
      <div slot="right"></div>
    </app-header>
    <!-- 导航栏 -->
    <van-tabs v-model="active" animated @click="dian">
      <van-tab v-for="(item, index) in nav" :title="item" :key="index + '1'">
        <template v-if="list.length == 0">
          <van-empty description="暂无订单" />
        </template>

        <template v-else>
          <div class="list">
            <div class="item" v-for="item in list " :key='item.id'>
              <div class="title">
                <p class="number">订单编号：2020110617152993552</p>
                <p class="status">交易完成</p>
              </div>
              <div class="content">
                <p class="name">{{item.title}}</p>
                <p class="time">时间：{{item.order_number}}</p>
                <p class="price">
                  <span>实付款：</span
                  ><img
                    src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                    alt=""
                  /><span>{{item.order_price}}.00</span>
                </p>
              </div>
              <div class="bottom" v-if="item.is_join_study==0">
                <span>加入学习</span>
              </div>
            </div>
          </div>
        </template>
      </van-tab>
    </van-tabs>
  </div>
</template>


<script>
import appHeader from "../../components/Header";
export default {
  data() {
    return {
      active: "1",
      list: [],
      nav: ["全部订单", "待支付", "已完成", "已取消"],
    };
  },
  components: { appHeader },
  created() {},
  async mounted() {
    let { data } = await this.$http.my_order({
      limit: 10,
      order_status: 0,
      order_type: this.$route.query.order_type,
      page: 1,
    });
    this.list = data.data.list;
    console.log(this.list);
  },
  methods: {
    async dian(i) {
      let { data } = await this.$http.my_order({
        limit: 10,
        order_status: i,
        order_type: "2",
        page: 1,
      });
      this.list = data.data.list;
    },
  },
};
</script>


<style scoped lang="scss">
.list {
  padding: 4vw;
  > .item {
    background-color: #fff;
    border-radius: 1.33333vw;
    padding: 4vw 3.73333vw;
    margin-bottom: 4vw;
    position: relative;
    box-shadow: 0 0 2vw rgba(0, 0, 0, 0.1);
    > .title {
      display: flex;
      justify-content: space-between;
      padding-bottom: 2.66667vw;
      margin-bottom: 2.66667vw;
      border-bottom: 1px solid #f5f5f5;
      > .number {
        font-size: 3.2vw;
        color: #595959;
      }
      > .status {
        font-size: 3.2vw;
        color: #ea7a2f;
      }
    }
    > .content {
      margin-bottom: 1.33333vw;
      > .name {
        font-size: 3.46667vw;
        color: #595959;
        margin-bottom: 2.66667vw;
      }
      > .time {
        font-size: 3.2vw;
        color: #8c8c8c;
        margin-bottom: 0.2rem;
        margin-bottom: 2vw;
      }
      > .price {
        font-size: 3.2vw;
        color: #8c8c8c;
        > span:nth-child(3) {
          font-size: 4.26667vw;
          color: #595959;
        }
        > img {
          width: 3.2vw;
          margin-right: 0.4vw;
        }
      }
    }
    > .bottom {
       text-align: right;
      > span {
        border: 1px solid #ea7a2f;
        color: #ea7a2f;
        display: inline-block;
        width: 20.26667vw;
        height: 7.46667vw;
        border-radius: 3.73333vw;
        font-size: 3.2vw;
        line-height: 7.46667vw;
        text-align: center;
        margin-left: 2.66667vw;
      }
    }
  }
}
</style>
