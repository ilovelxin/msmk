<template>
    
  <div class="box">
     
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>


<script>
import me from '../../js/meiqia'
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
.box {
  background:rgb(240, 242, 245);
  min-height: 100%;
}
</style>