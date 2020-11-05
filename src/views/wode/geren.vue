<template>
    
  <div>
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
        <span><img :src="user.avatar" alt="" /></span>
      </li>
      <li @click="$router.push(`/set-name?name=${user.nickname}`)">
        <span>昵称</span>
        <span>{{ user.nickname }}</span>
      </li>
      <li id="mobile">
        <span>手机号</span>
        <span>18035825422</span>
      </li>
      <li @click="$router.push(`/sex?sex=${user.sex}`)">
        <span>性别</span>
        <span v-if="user.sex==0">男</span>
        <span v-else>女</span>
      </li>
      <li>
        <span>出生日期</span>
        <span v-if="user.birthday!=0">{{user.birthday}}</span>
        <span v-else>请选择</span>
      </li>
      <li>
        <span>所在城市</span>
        <span v-if="user.province_name!=''">{{user.province_name}}，{{user.city_name}}，{{user.district_name}}</span>
        <span v-else>请选择</span>
      </li>
      <li>
        <span>学科</span>
        <span><font v-for="item in user.attr" :key="item.attr_val_id" v-show="item.attr_id==2">{{item.attr_value}},</font></span>
      </li>
      <li>
        <span>年级</span>
        <span v-if="user.attr[0].attr_id==1">{{user.attr[0].attr_value}}</span>
        <span v-else>请选择</span>
      </li>
    </ul>

    <van-action-sheet v-model="show" cancel-text="取消" close-on-click-action>
      <ul class="pho">
        <li>
          拍照
          <input
            type="file"
            accept="image/*"
            capture="camera"
            id="takePhoto"
            @change="takePhoto"
          />
        </li>
        <li>
          从手机相册中选择
          <input
            type="file"
            accept="image/*"
            id="takePhoto"
            @change="takePhoto"
          />
        </li>
      </ul>
    </van-action-sheet>
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
      user: {}, // 用户信息
    };
  },
  created() {},
  mounted() {
    this.userinfo();
  },
  methods: {
    // 个人信息获取
    async userinfo() {
      let { data: res } = await this.$http.userInfo();
      this.user = res.data;
      console.log(this.user);
    },
    async takePhoto() {
      let formdata = new FormData();
      formdata.append("file", event.target.files[0]);
      let { data: res } = await this.$http.add_img(formdata);
      let path = res.data.path;
      let { data: re } = await this.$http.ok_up_user({ avatar: path });
      if (re.code == 200) {
        this.userinfo();
        this.show = false;
      }
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
.pho {
  > li {
    position: relative;
    width: 100%;
    display: block;
    text-align: center;
    line-height: 13.33333vw;
    > input {
      position: absolute;
      opacity: 0;
      left: 0;
      top: 0;
    }
  }
}
</style>