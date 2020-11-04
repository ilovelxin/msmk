<template>
  <div style="min-height: 100%;background:#eee;">
    <!-- 头部 -->
    <app-header style="border-bottom:0.01rem solid #eee">
        <div slot="left" @click="$router.go(-1)"><van-icon name="arrow-left" /></div>
        <div slot="title">修改用户名</div>
        <div slot="right" @click="ok">保存</div>
    </app-header>
    <!-- 头部 -->
  <van-field v-model="name"  placeholder="请输入用户名" />

  </div>
</template>


<script>
import appHeader from '../../components/Header'
export default {
    name: '',
    components:{appHeader},
    data () {
        return {
            name:this.$route.query.name
        }
    },
    created() {

    },
    mounted() {

    },
    
    methods: {
    async ok(){
        let {data:res} = await this.$http.ok_up_user({nickname:this.name})
        this.$router.go(-1)
    }
    }
}
</script>

<style scoped >
.van-field{
    margin-top: 0.1rem;;
}
</style>