<template>
  <div style="height: 100%; background: #f0f2f5">
    <!-- 头部 -->
    <app-header style="border-bottom: 0.01rem solid #eee">
      <div slot="left"></div>
      <div slot="title">特色课</div>
      <div slot="right" @click="$router.push('/search')">
        <van-icon name="search" />
      </div>
    </app-header>

    <!-- 下拉菜单 -->
    <div class="select" >
      <van-dropdown-menu  >
        <van-dropdown-item title="分类" ref="fenlei">
          <div class="prent-box">
            <div class="tm-kind">
              <p>{{ obj.attrclassify[0].name }}</p>
              <div class="tm-item">
                <span
                  v-for="t in obj.attrclassify[0].child"
                  :key="t.name"
                  @click="attr1(t.id)"
                  :class="active1 == t.id ? 'hover' : ''"
                  >{{ t.name }}</span
                >
              </div>
            </div>
            <div class="tm-kind">
              <p>{{ obj.attrclassify[1].name }}</p>
              <div class="tm-item">
                <span
                  v-for="t in obj.attrclassify[1].child"
                  :key="t.name"
                  @click="attr2(t.id)"
                  :class="active2 == t.id ? 'hover' : ''"
                  >{{ t.name }}</span
                >
              </div>
            </div>
            <div class="tm-search">
              <van-button plain type="info" @click="clear">重置</van-button>
              <van-button type="warning" @click="ok">确定</van-button>
            </div>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>

      <van-dropdown-menu>
        <van-dropdown-item
          title="排序"
          :options="options1"
          v-model="value1"
          @change="change1"
        ></van-dropdown-item>
      </van-dropdown-menu>

      <van-dropdown-menu>
        <van-dropdown-item title="筛选" ref="shaixuan">
          <div class="shai">
            <span
              v-for="item in options2"
              :key="item.value"
              :class="active3 == item.value ? 'hover' : ''"
              @click="change2(item.value)"
              >{{ item.text }}</span
            >
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>

    <!-- 列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      offset="10"
    >
      <div class="content">
        <div
          class="item"
          v-for="item in list"
          :key="item.id"
          @click="$router.push(`/kecheng?id=${item.id}&type=3`)"
        >
          <p class="title">
            <font>{{ item.title }}</font>
          </p>
          <div class="time">
            <p>共{{ item.total_periods }}课时</p>
          </div>
          <div class="teacher">
            <div v-for="t in item.teachers_list" :key="t.id">
              <img :src="t.teacher_avatar" alt="" /><font>{{
                t.teacher_name
              }}</font>
            </div>
          </div>
          <div class="info">
            <span>{{ item.sales_num }}人已报名</span>
            <font style="color: green" v-if="item.price == 0">免费</font>
            <font style="color: red" v-if="item.price != 0"
              >{{ item.price / 100 }}.00</font
            >
          </div>
          <div class="ii-icon" v-if="item.has_buy != 0"></div>
        </div>
      </div>
    </van-list>
  </div>
</template>


<script>
import appHeader from "../../components/Header";
export default {
  name: "",
  components: { appHeader },
  data() {
    return {
      obj: {}, // 所有分类数据
      // 参数
      basis_obj: {
        page: 1,
        limit: 10,
        course_type: 0,
        classify_id: "",
        order_by: 0,
        attr_val_id: "",
        is_vip: 0,
      },
      total: "",
      list: [], //  所有课程
      loading: false,
      finished: false,
      value1: "0",
      options1: [
        { text: "综合排序", value: "0" },
        { text: "最新", value: "1" },
        { text: "最热", value: "2" },
        { text: "价格从低到高", value: "3" },
        { text: "价格从高到低", value: "4" },
      ],
      value2: "0",
      options2: [
        { text: "全部", value: "0" },
        { text: "大班课", value: "2" },
        { text: "小班课", value: "3" },
        { text: "公开课", value: "4" },
        { text: "点播课", value: "5" },
        { text: "面授课", value: "7" },
        { text: "音频课", value: "8" },
        { text: "系统课", value: "9" },
        { text: "图文课", value: "10" },
        { text: "会员课", value: "11" },
      ],
      active1: "",
      active2: "",
      active3: "",
      attr_arr_id: [],
    };
  },
  created() {},
  mounted() {
    this.courseClassify();
    this.coursebasis();
  },
  methods: {
    //   获取课程分类
    async courseClassify() {
      let { data: res } = await this.$http.courseClassify();
      this.obj = res.data;
    },
    // 获取所有课程
    async coursebasis() {
      let { data: res } = await this.$http.courseBasis(this.basis_obj);
      this.total = res.data.total;
      this.list = res.data.list;
      if (res.code == 200) {
        this.loading = false;
      }
      if (this.basis_obj.limit >= this.total) {
        this.finished = true;
      }
    },
    // 加载
    async onLoad() {
      this.basis_obj.limit += 5;
      this.coursebasis();
    },
    // 选择第二个参数
    change1(value) {
      this.basis_obj.order_by = value;
      this.coursebasis();
    },
    // 选择第三个参数
    change2(value) {
      this.active3 = value;
      this.$refs.shaixuan.toggle()
      if (value == 11) {
        this.basis_obj.course_type = "";
        this.basis_obj.is_vip = 1;
        this.coursebasis();
        return false;
      }
      this.basis_obj.course_type = value;
      this.coursebasis();
    },
    // 选择第一个参数
    attr1(id) {
      this.active1 = id;
      console.log(this.active1);
    },
    attr2(id) {
      this.active2 = id;
      console.log(this.active2);
    },
    ok() {
      this.attr_arr_id[0] = this.active1;
      this.attr_arr_id[1] = this.active2;
      let str = this.attr_arr_id.join(",");
      this.basis_obj.attr_val_id = str;
      this.coursebasis();
      this.$refs.fenlei.toggle()
    },
    // 清空参数
    clear() {
      this.basis_obj = {
        page: 1,
        limit: 10,
        course_type: 0,
        classify_id: "",
        order_by: 0,
        attr_val_id: "",
        is_vip: 0,
      };
      this.active3=''
      this.active2=''
      this.active1=''
      this.coursebasis()
    },
  },
};
</script>

<style scoped lang="scss">
.van-list {
  margin-bottom: 0.5rem;
}
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
    > .ii-icon {
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
.select {
  display: flex;
  width: 100%;
  height: 11.2vw;
  > .van-dropdown-menu {
    flex: 1;
  }
}
.prent-box {
  padding-left: 4vw;
  padding-bottom: 2.66667vw;
  > .tm-kind {
    padding-bottom: 2.66667vw;
    border-bottom: 1px solid #f1f1f1;
    > p {
      padding: 4.26667vw 0 2.66667vw;
      font-size: 3.2vw;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #595959;
    }
    > .tm-item {
      > span {
        margin: 0 5.13333vw 1.86667vw 0;
        display: inline-block;
        width: 18.4vw;
        height: 8.8vw;
        background: #f5f5f5;
        border-radius: 0.8vw;
        font-size: 3.46667vw;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #646464;
        text-align: center;
        line-height: 8.8vw;
        overflow: hidden;
      }
      > .hover {
        color: #eb6100;
        background: #ebeefe;
      }
    }
  }
  > .tm-search {
    padding: 4vw 0;
    display: flex;
    justify-content: space-between;
    > button {
      width: 45.33333vw;
      height: 8.8vw;
      background: #fff;
      border-radius: 1.06667vw;
      border: 0.26667vw solid #d9d9d9;
      font-size: 3.46667vw;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #595959;
      margin-right: 2.66667vw;
    }
    > button:nth-child(2) {
      color: #fff;
      background: #eb6100;
      border: 0;
    }
  }
}
.shai {
  padding-left: 4vw;
  padding-bottom: 2.66667vw;
  display: flex;
  flex-wrap: wrap;
  > span {
    margin: 0 5.13333vw 1.86667vw 0;
    display: inline-block;
    width: 18.4vw;
    height: 8.8vw;
    background: #f5f5f5;
    border-radius: 0.8vw;
    font-size: 3.46667vw;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #646464;
    text-align: center;
    line-height: 8.8vw;
    overflow: hidden;
  }
  > .hover {
    color: #eb6100;
    background: #ebeefe;
  }
}
</style>