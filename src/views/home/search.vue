<template>
    
  <div>
    <app-header style="border-bottom: 0.01rem solid #eee">
      <div slot="left" @click="$router.go(-1)">
        <van-icon name="arrow-left" />
      </div>
      <div slot="title">
        <input
          type="text"
          placeholder="请输入内容"
          v-model.trim="text"
          @input="input"
        />
      </div>
      <div slot="right">
        <span
          style="font-size: 3.73333vw; color: #d2d2d1"
          v-show="!show"
          @click="$router.go(-1)"
        >
          取消
        </span>
        <span style="font-size: 3.73333vw" v-show="show" @click="serach_btn"
          >搜索</span
        >
      </div>
    </app-header>

    <div class="search" v-show="!show">
      <header>
        <p>
          <span>历史搜索</span>
          <span @click="del_ser"><van-icon name="delete" /></span>
        </p>
      </header>
      <div class="list">
        <span v-for="(item, index) in unSearch" :key="index" @click="un_ser(item)">{{ item }}</span>
      </div>
    </div>

    <div class="content" v-show="con_show">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        offset="0"
      >
        <div class="item" v-for="item in list" :key="item.id">
          <p class="title">
            <font>{{ item.title }}</font>
          </p>
          <div class="time">
            <p>共{{ item.total_periods }}课时</p>
          </div>
          <div class="teacher">
            <div
              class="teacher-item"
              v-for="t in item.teachers_list"
              :key="t.id"
              @click="$router.push(`/kecheng?id=${item.id}`)"
            >
              <img :src="t.teacher_avatar" alt="" />
              <font>{{ t.teacher_name }}</font>
            </div>
          </div>
          <div class="info">
            <span>{{ item.sales_num }}人已报名</span>
            <font style="color: green" v-if="item.price == 0">免费</font>
            <font style="color: red" v-else>{{ item.price / 100 }}.00</font>
          </div>
          <div class="has_buy" v-if="item.has_buy == 1"></div>
        </div>
      </van-list>
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
      text: "",
      show: false,
      page: 1,
      limit: 5,
      total: "",
      list: [], // 搜索出来的数据
      con_show: false,
      loading: false,
      finished: false,
      unSearch: JSON.parse(sessionStorage.getItem("unSearch")) || [], //  搜索记录
    };
  },
  created() {},
  mounted() {},
  methods: {
    input() {
      if (this.text) {
        this.show = true;
      } else {
        this.show = false;
        this.con_show = false;
      }
    },
    // 封装搜索方法
    async serach() {
      let obj = {
        page: this.page,
        limit: this.limit,
        course_type: 0,
        keywords: this.text,
      };
      let { data: res } = await this.$http.serach(obj);
      this.total = res.data.total;
      this.list = res.data.list;
      this.loading = false;
    },
    // 搜索
    serach_btn() {
      this.con_show = true;
      if (this.unSearch.length < 5) {
        this.unSearch.unshift(this.text);
      } else {
        this.unSearch.splice(this.unSearch.length - 1, 1);
        this.unSearch.unshift(this.text);
      }
      sessionStorage.setItem("unSearch", JSON.stringify(this.unSearch));
      this.serach();
    },
    // 加载
    onLoad() {
      this.limit += 2;
      this.serach();
      // 加载状态结束
      if (this.list.length >= this.total) {
        this.finished = true; //  全部加载完成显示加载完成
      }
    },
    // 清除历史记录
    del_ser() {
      this.unSearch = [];
      sessionStorage.clear("unSearch");
    },
    // 历史搜索记录
    un_ser(val){
      this.text=val
      this.show=true
      this.serach_btn()
    }
  },
};
</script>

<style scoped lang="scss">
.header {
  border-bottom: 0.01rem solid;
  input {
    height: 8vw;
    padding-left: 7.46667vw;
    border: none;
    background: #e4e7ed;
    border-radius: 4vw;
    font-size: 4vw;
    width: 100%;
  }
}
.search {
  margin: 4vw 4.53333vw;
  > header {
    height: 10.66667vw;
    > p {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      > span:nth-child(1) {
        font-size: 4vw;
        color: #333;
        font-weight: 700;
      }
      > span:nth-child(2) {
        width: 3.73333vw;
        height: 3.73333vw;
        font-size: 4vw;
      }
    }
  }
  > .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    > span {
      margin: 2.66667vw 1.86667vw 0 1.86667vw;
      padding: 1.6vw 2.66667vw;
      border-radius: 2.66667vw;
      background: #f7f7f7;
      font-size: 3.2vw;
      color: #333;
    }
  }
}
.content {
  padding: 4vw;
  background: #f8f8f8;
  .item {
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
      > .teacher-item {
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
      }
      > font {
        font-size: 4.26667vw;
      }
    }
    > .has_buy {
      position: absolute;
      right: 4vw;
      top: 17.33333vw;
      background: url(https://wap.365msmk.com/img/has-buy.6cfbd83d.png)
        no-repeat;
      background-size: 100% 100%;
      width: 15.73333vw;
      height: 12.8vw;
    }
  }
}
</style>