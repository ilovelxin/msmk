<template>
    
  <div style="height: 100%; background: #eee">
    <app-header>
      <div slot="left" @click="$router.go(-1)">
        <van-icon name="arrow-left" />
      </div>
      <div slot="title">个人信息</div>
      <div slot="right"></div>
    </app-header>

    <ul>
      <li @click="show = true">
        <span>头像</span>
        <span
          ><img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2020k0LJ1Nni2z1603939323.jpg"
            alt=""
        /></span>
      </li>
      <li>
        <span>昵称</span>
        <span>小绵羊</span>
      </li>
      <li id="mobile">
        <span>手机号</span>
        <span>18035825422</span>
      </li>
      <li>
        <span>出生日期</span>
        <span>2001-12-17</span>
      </li>
      <li>
        <span>所在城市</span>
        <span>北京，北京市，昌平区</span>
      </li>
      <li>
        <span>学科</span>
        <span>语文，数学</span>
      </li>
      <li>
        <span>年级</span>
        <span>请选择</span>
      </li>
    </ul>
    <van-action-sheet
      v-model="show"
      :actions="actions"
      @select="onSelect"
      cancel-text="取消"
      close-on-click-action
    />
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
      show: false,
      actions: [
        { name: "相机", index: 0 },
        { name: "从相册选择", index: 1 },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 个人信息获取
    async userinfo() {
      let { data: res } = await this.$http.userInfo();
      console.log(res);
    },
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
    },
  },
};
</script>

<style scoped lang="scss">
ul {
  background: #fff;
  margin: 2.66667vw 0;
  padding: 0 4vw;
  > li {
    height: 14.66667vw;
    line-height: 14.66667vw;
    display: flex;
    justify-content: space-between;
    position: relative;
    > span:nth-child(1) {
      font-size: 3.73333vw;
      color: #595959;
    }
    > span:nth-child(2) {
      font-size: 3.73333vw;
      color: #8c8c8c;
      margin-right: 6.66667vw;
      > img {
        width: 9.86667vw;
        height: 9.86667vw;
        border-radius: 50%;
        vertical-align: middle;
      }
    }
  }
  > #mobile::before {
    border: none;
  }
  li::before {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    width: 2.66667vw;
    height: 2.66667vw;
    border-top: 1px solid #b7b7b7;
    border-right: 1px solid #b7b7b7;
  }
  li::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 1px;
    background-color: #f5f5f5;
  }
}
</style>