<template>
    
  <div style="height: 100%; background: #eee">
    <app-header style="border-bottom: 0.01rem solid #eee">
      <div slot="left" @click="$router.go(-1)">
        <van-icon name="arrow-left" />
      </div>
      <div slot="title">修改性别</div>
      <div slot="right" @click="ok">保存</div>
    </app-header>

    <van-radio-group v-model="sex">
      <van-cell-group>
        <van-cell title="男" clickable @click="sex = '0'">
          <template #right-icon>
            <van-radio name="0" />
          </template>
        </van-cell>
        <van-cell title="女" clickable @click="sex = '1'">
          <template #right-icon>
            <van-radio name="1" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
      
  </div>
</template>


<script>
import appHeader from "../../components/Header";
export default {
  name: "",
  components: { appHeader },
  data() {
    return {
      sex: this.$route.query.sex,
    };
  },
  created() {},
  mounted() {},
  methods: {
      async ok(){
          let {data:res} = await this.$http.ok_up_user({sex:this.sex})
          if(res.code==200){
              this.$router.go(-1)
          }
      }
  },
};
</script>

<style scoped lang>
</style>