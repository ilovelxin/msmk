<template>
    
  <div style="height: 100%; background: #f0f2f5">
    <!-- 头部 -->
    <div class="header">
      <header>
        <span @click="$router.go(-1)"
          ><van-icon name="arrow-left" color="#fff"
        /></span>
        <div>预约课程</div>
      </header>
    </div>

    <!-- 讲师信息 -->
    <div class="teacher-info">
      <img :src="teacher_obj.avatar" alt="" />
      <div>
        <p>
          <span>{{ teacher_obj.teacher_name }}</span>
        </p>
        <p>
          <font v-if="teacher_obj.sex == 0">男</font><font v-else>女</font>
          {{ teacher_obj.teach_age }}年教龄
        </p>
      </div>
      <span @click="$router.push('/teacher?id=' + id)">查看详情</span>
    </div>
      

    <!-- 选择上课时间 -->
    <div class="title">选择时间<span>(北京时间)</span></div>

    <!-- 课程安排 -->
    <div class="content">
      <van-empty description="暂无信息" />
    </div>

    <!-- 立即预约 -->
    <div class="bottom"><span>立即预约</span></div>
        
  </div>
</template>


<script>
export default {
  name: "",
  data() {
    return {
      id: this.$route.query.id,
      teacher_obj: {},
      teacher_flag: "",
    };
  },
  created() {},
  mounted() {
    this.teacher();
  },
  methods: {
    //   获取老师信息
    async teacher() {
      let { data: res } = await this.$http.teacher(this.id);
      this.teacher_obj = res.data.teacher;
      this.teacher_flag = res.data.flag;
      console.log(this.teacher_obj);
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
    display: flex;
    > span {
      width: 6.66667vw;
      height: 100%;
      padding-left: 2.66667vw;
    }
    > div {
      flex: 2;
      text-align: center;
      font-size: 4.8vw;
      color: #fff;
    }
  }
}
.teacher-info {
  margin: -15.2vw auto 0;
  height: 21.6vw;
  width: 94.66667vw;
  display: flex;
  align-items: center;
  padding: 0 4vw;
  background: #fff;
  border-radius: 1.06667vw;
  box-sizing: border-box;
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
    }
    > p:nth-child(2) {
      font-size: 3.2vw;
      color: #b7b7b7;
      line-height: 4.53333vw;
    }
  }
  > span {
    flex: none;
    width: 20.26667vw;
    height: 7.46667vw;
    line-height: 7.46667vw;
    background: #fff;
    border-radius: 4.13333vw;
    font-size: 3.46667vw;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #eb6100;
    border: none;
    text-align: center;
    border: 0.01rem solid #eb6100;
  }
}
.title {
  font-size: 4vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #595959;
  line-height: 13.33333vw;
  position: relative;
  padding-left: 6.66667vw;
  height: 1.33333rem;
  height: 13.33333vw;
  > span {
    font-size: 3.2vw;
  }
}
.title::after {
  position: absolute;
  content: "";
  left: 3.2vw;
  top: 4.53333vw;
  width: 0.8vw;
  height: 4.26667vw;
  background: #eb6100;
}
.bottom {
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
.bottom::after {
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