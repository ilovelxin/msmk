<template>
    
  <div>
    <app-header>
      <div slot="left" @click="$router.go(-1)">
        <van-icon name="arrow-left" />
      </div>
      <div slot="title">意见反馈</div>
      <div slot="right"></div>
    </app-header>

      
    <div class="content">
      <div class="item">
        <van-field
          v-model="text"
          rows="2"
          autosize
          type="textarea"
          maxlength="300"
          placeholder="请输入留言"
          show-word-limit
        />
      </div>
    </div>
    <p class="btn" @click="submit">提交</p>
  </div>
</template>


<script>
import appHeader from "../../components/Header";
export default {
  name: "",
  components: { appHeader },
  data() {
    return { text: "" };
  },
  created() {},
  mounted() {},
  methods: {
    //   提交
    async submit(){
        if(this.text==''){
            this.$toast("输入的内容不能为空")
            return false 
        }
        let {data:res} = await this.$http.feedback({content:this.text})
        console.log(res);
        if(res.code==200){
            this.$toast("反馈成功")
            this.$router.go(-1)
        }
    }
  },
};
</script>

<style scoped lang="scss">
.content {
  padding:4vw;
}
.btn {
  background-color: #eb6100;
  color: #fff;
  width: 92vw;
  height: 11.73333vw;
  margin: 3.06667rem auto;
  margin: 15.66667vw auto;
  border-radius: 1.06667vw;
  font-size: 4.53333vw;
  text-align: center;
  line-height: 11.73333vw;
}
.item{
    border:0.01rem solid #eee;
    border-radius: 0.1rem;;
}
.van-field{
    border-radius: 0.1rem;;

}
</style>