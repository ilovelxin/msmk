<template>
    
  <div style="height: 100%; background: #efefef">
    <app-header>
      <div slot="left" @click="$router.go(-1)">
        <van-icon name="arrow-left" />
      </div>
      <div slot="title">我的关注</div>
      <div slot="right"></div>
    </app-header>
      
    <!-- 关注的老师列表 -->
    <div class="content">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="list-item" v-for="item in list" :key="item.teacher_id" @click.capture="$router.push(`/teacher?id=${item.teacher_id}`)">
          <img :src="item.avatar" alt="" />
          <div class="info">
            <p class="name">
              <span>{{ item.teacher_name }}</span>
              <font>M20</font>
            </p>
            <p class="introduction">
              {{ item.introduction }}
            </p>
          </div>
          <p @click.self="cancel(item.collect_id)">取消关注</p>
        </div>
      </van-list>
    </div>
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
      list: [],
      loading: false,
      finished: false,
      page: 1, // 当前页数
      limit: 5, // 一页几条数据
      total: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    //   加载数据
    async onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      this.limit += 2;
      let obj = {
        page: this.page,
        limit: this.limit,
        type: 2,
      };
      let { data: res } = await this.$http.my_teacher(obj);
      this.list = res.data.list;
      this.total = res.data.total;
      console.log(res);
      if (res.code == 200) {
        // 加载状态结束
        this.loading = false;
      }
      // 数据全部加载完成
      if (this.list.length >= this.total) {
        this.finished = true;
      }
    },
    // 取消关注
    async cancel(id) {
      let { data: res } = await this.$http.cancel_teacher(id);
      if (res.code == 200) {
        this.onLoad();
        Toast("取消关注")
      }
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  padding: 4vw 2.66667vw;
}
.list-item {
  background-color: #fff;
  padding: 2.66667vw;
  margin-bottom: 2.66667vw;
  border-radius: 1.33333vw;
  position: relative;
  display: flex;
  align-items: center;
  > img {
    width: 10.66667vw;
    height: 10.66667vw;
  }
  > .info {
    margin-left: 2.66667vw;
    line-height: 6.66667vw;
    > .name {
      > span {
        font-size: 4vw;
        color: #595959;
      }
      > font {
        margin-left: 1.6vw;
        font-size: 2.93333vw;
        color: #ea7a2f;
      }
    }
    > .introduction {
      font-size: 3.2vw;
      color: #b7b7b7;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 53.33333vw;
    }
  }
  > p {
    position: absolute;
    top: 50%;
    right: 4vw;
    transform: translateY(-50%);
    font-size: 3.46667vw;
    color: #eb6100;
    text-align: center;
    width: 20.26667vw;
    height: 7.46667vw;
    line-height: 7.46667vw;
    background: rgba(235, 97, 0, 0.1);
    border-radius: 4.13333vw;
  }
}
</style>