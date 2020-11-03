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
          @input="show = true"
          @blur="show = false"
        />
      </div>
      <div slot="right">
        <span style="font-size: 3.73333vw; color: #d2d2d1" v-show="!show">
          取消
        </span>
        <span style="font-size: 3.73333vw" v-show="show">搜索</span>
      </div>
    </app-header>

    <div class="search">
      <header>
        <p>
          <span>历史搜索</span>
          <span><van-icon name="delete" /></span>
        </p>
      </header>
      <div class="list">
        <span>111</span>
      </div>
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
    };
  },
  created() {},
  mounted() {},
  methods: {},
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
</style>