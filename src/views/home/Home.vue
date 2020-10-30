<template>
    
  <div class="box"> 
      <router-view></router-view>
      <app-footer></app-footer>
  </div>
</template>


<script>
import appFooter from "../../components/Footer";
export default {
  name: "",
  components: { appFooter },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.box{
    background: #eee;
}
</style>