<template>
    
  <div>
    <app-header>
      <div slot="left" @click="$router.go(-1)">
        <van-icon name="arrow-left" />
      </div>
      <div slot="title">消息通知</div>
      <div slot="right"></div>
    </app-header>

    <ul class="news-content">
      <li>
        <div class="icon">
          <img
            src="https://wap.365msmk.com/img/icon-msg-course.d8a2c8d5.png"
            alt=""
          />
        </div>
        <div class="info">
          <span>课程通知</span>
          <p>暂无消息</p>
        </div>
      </li>
      <li>
        <div class="icon">
          <img
            src="https://wap.365msmk.com/img/icon-msg-system.db56e51b.png"
            alt=""
          />
        </div>
        <div class="info">
          <span>系统通知</span>
          <p>暂无消息</p>
        </div>
      </li>
      <li>
        <div class="icon">
          <img
            src="https://wap.365msmk.com/img/icon-msg-order.41755990.png"
            alt=""
          />
        </div>
        <div class="info">
          <span>订单通知</span>
          <p>暂无消息</p>
        </div>
      </li>
      <li>
        <div class="icon">
          <img
            src="https://wap.365msmk.com/img/icon-msg-oto.d8a2c8d5.png"
            alt=""
          />
        </div>
        <div class="info">
          <span>约课通知</span>
          <p>暂无消息</p>
        </div>
      </li>
      <li>
        <div class="icon">
          <img
            src="https://wap.365msmk.com/img/icon-msg-exam.8a210fd7.png"
            alt=""
          />
        </div>
        <div class="info">
          <span>考试通知</span>
          <p>暂无消息</p>
        </div>
      </li>
    </ul>
      
  </div>
</template>


<script>
import appHeader from "../../components/Header";
export default {
  name: "",
  components: { appHeader },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.news-content {
  background: #fff;
  padding: 1.33333vw 4vw;
  margin: 2.66667vw 0;
  margin-top: 0;
  > li {
    height: auto;
    line-height: normal;
    display: flex;
    font-size: 3.73333vw;
    color: #595959;
    position: relative;
    > .icon {
      padding: 2.66667vw 0;
      margin-right: 4vw;
      > img {
        width: 11.73333vw;
        height: 11.73333vw;
        border-radius: 50%;
      }
    }
    > .info {
      display: flex;
      flex-direction: column;
      color: #595959;
      padding: 2vw 0;
      position: relative;
      > span {
        font-size: 4vw;
        font-weight: 500;
        margin-bottom: 2.66667vw;
      }
      > p {
        font-size: 3.46667vw;
      }
    }
  }
  > li::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 1px;
    background-color: #f5f5f5;
  }
}
</style>