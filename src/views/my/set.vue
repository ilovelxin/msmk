<template>
    
  <div>
    <app-header>
      <div slot="left" @click="$router.go(-1)">
        <van-icon name="arrow-left" />
      </div>
      <div slot="title">设置</div>
      <div slot="right"></div>
    </app-header>
      
    <ul>
      <li @click="$router.push('/uppwd')">修改密码</li>
    </ul>
    <div class="bottom-box">
      <div class="btn-exit" @click="exit">退出登录</div>
    </div>
  </div>
</template>


<script>
import appHeader from "../../components/Header";
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    //   退出登录
    exit(){
        this.$router.push('/')
        this.$toast("已退出")
        sessionStorage.removeItem('token')
    }
  },
  components: { appHeader },
};
</script>

<style lang="scss" scoped>
ul {
  background: #fff;
  padding: 1.33333vw 4vw;
  margin: 2.66667vw 0;
  li {
    height: 14.66667vw;
    line-height: 14.66667vw;
    position: relative;
    font-size: 3.73333vw;
    color: #595959;
  }
  li::after {
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
}
.bottom-box {
  overflow: hidden;
  background-color: #fff;
  height: 40vw;
  > .btn-exit {
    background-color: #eb6100;
    color: #fff;
    width: 92vw;
    height: 11.73333vw;
    margin: 17.33333vw auto;
    border-radius: 1.06667vw;
    font-size: 4.53333vw;
    text-align: center;
    line-height: 11.73333vw;
  }
}
</style>