<template>
    
  <div class="content">
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="1500" indicator-color="white">
      <van-swipe-item v-for="(item, index) in Banner" :key="index"
        ><img :src="item.banner_img" alt=""
      /></van-swipe-item>
    </van-swipe>
    <!-- 导航 -->
    <div class="index-kind">
      <ul>
        <li @click="$router.push('/teseke')">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA8CAYAAADSfGxZAAAFZUlEQVRoQ+1bW2xUVRRd68xMeZPaFESeBkuLhkekk6IfxDEEMQqUmWGMwcQPE5FEo9GYGONP/TIh8UH88BsNwTDObR0CGsUImGDAGVEQIn1JIBYqBSwtr5m5Z5tbaDLYoXPb28d8nPs1ybl7n7PXXWedk8leRN6zfv3pSr/f9wypN4uwlhAheJKQvVnNfblc2fkLFy72ptPBbH5cqf0OhcQ/ZcqJaWVl02dRsmtJrtPQywmQwG+AfJG1M98mk0s7+9dO50dDg6jjx5vrofE2qFYC4htYnPQC6gREpwl1BD5/KpF48DRAKQ0ghNFoexVsvVKAWlCCAJYDmDZwfbQBSYPqo2XLHoo3NFD3AbEp3FKvIZ8CmFesKBE4hfcQuASgTSi7/f7pTfH4AxeLxY7G+MaNV8qV6opSEBVIjQgqSU4FRBWbTwSdCmproqmqibG1Jyv05EBCgFCxwHuNk8hCuF+RO5Dhz7dU9koyWXMNoB5uzsJxomKxi5Ntu7tcCR63oV8g1NOATPAwz8GcrTczGm2Lira/BOD3kOxOaN82+UegjwE4qrRKZcVOJ5OLO7zk3rCh/X6lsisUVJ1QgnSoD84CpI/RHp8ciJcZibRaEB32mGxAuAhyJLodYEB1REQn/P7Md/H4koybuUKhH/0VFfNDgH4eIo8BmCki95EcgQ/2/xWovYyEW/4GZLabxXl/hx0UvHnmXHfjvU6eWEx8OtuyUYhtABZ6n9NNBl5gJNx8tbCyukkwrHe6QLXFsqoaC0WHw+1riNxOADOGlX14Qb0OI256FJuhT00esqxFTxQGonk/gdVDT+op4ta4AEHiWsKqnlpo6ZFwcw+AgmOeSh00mOMFBHXCWlTg0gZEIy22SPE7wMiCYoDoP/YNI24jYRhhGHG3xhhGGEYYRhQ8d83WMFvDbA2zNQa7lBuNMBphNMJohNEIF39dGLE0YmnE0oilEUsjli4QMGJpxNKIpRFLF1JhbpZGLI1YGrE0YmnE0gUC+WI55j1UIEuuUaTHaSY7BeBh9+h5f7MEgWhmJNKyGyIx7+W5zzAYEJFws9OtOxKNpO4XBCQZibRththOO9+YPSXHCGIrY+va5tsB+zCAOWOFRCkBIYIOZfMphkJ/Tawoz34G4kUARTvaRwKsUgHCcRoQ2JHT+vXbNoX69lVa5XaNFStKBQgAl0GELav6UB8QfQ3g5XNfA+XjkfjixXKUChCK8l7X5Y5tBw48mbtLnaPh5u0CbAEwsVgxXsZL4NS4CeJzy6p+pb+Ou4CIxQ5PyuUq3yL4BiCj1hQ+zoz4F4IPc1pvTyYXO+3Ofc+A89oBQzIzH9VKPgBk1Wic6eMEhGOqOQLiHZ9v0i/x+Lwb+ay+58XF8U3YduuzFHlVgKUQTAc5yY1Xqti2GQsg7pwI10H2CORPQH9y9mzNvnSaBR2Krm5wkcipBSKBOooESdQKuAKQ8uGyZRSBcL56twC/UyRFqKOiJGVZ1e1FP06xF/LHa2tTgTlzJlQEAhNna40QgSggdQACQ8kDoNdqrC5gQwSGaVPIkvhVNCz6yr6/caP3fGfnzUtD8ae6YsRgRcZirVW2Lc9BY5NAHLvkNBKDue4cw+QPVlP1mkJ5I+HT3wBcOzjbJCPCq1ToANhIqp2JxMJWLx5Uz0D0F+O4b2eUn1liq1wQIkEI60A8MsAdRLQqW1766uuanwoBEY22BSF6l4hU5Y87ZjkQfxBMQUuKwqNqwq2Tbs1yxRg7YkDkT+ScPJnMzMoyxQU29DpA6gHMFeCYz+d7v6vr7EHnElN4caLC4ZbVhLwL0HH1ngO4F0BSa7ZrPfnSnj2zrxcrbKjj/wFPducAYoibwgAAAABJRU5ErkJggg=="
            alt=""
          />
          <font>特色课</font>
        </li>
        <li @click="token?$router.push('/oto'):show=true">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA8CAYAAADRy2JxAAAEDElEQVRoQ+2aTWhUVxTH/+fNRyYmE78WirTQFgwiXSjFjWDRlR+k0CIOlJiaVk1VNGrGmBZaOy24EXSmlBqk2inUyaRZKM3MFFxoNt1VQXEhiogSSKwL48ckMTNz7yk3VQntTN7Me2HezJv3tveee+7vnnP+9773LgFAaGjIPZ4eeVsCX4KwCZKXgEhTbRX3EP4mxiXp1b46tfHjYTPzIwX+/PloO4i/AfCGmcHKZcsAa6ALYnKiIxzY9dioX+pOxJZL4Eq1gM8AfeRyy/dPbG67bRg+mIxFwWg3OoBldkTMLFaf+qDthtE5UDDRNwrwUqMDWGnHkKvMwQ/GBAiVKW46K2sePhFjK6NnxrcDb67mncibyT7LbJ20d9LeWPJR0KZq352KLmX2vguX5n+9NDmAmB7kXqTvh7ftHLMlfFeqv5lYXARjZZ6cEAD+AmG/LeGDidhBAJFCxaBejEAYtCV8VzL2NTG+m1UJCE9rFx6AA29so7DeqtAhp6i0dyJvw33eibye2jtp76S99cptZAaO2ud5pXUEzxG82YvJOd4aEZtKsHEEr0YFb0oKXhP+cPvN/2ZhLaj9XUHYGGlpvVcz8OoTFAETID7pn/AeDwUCmfLAT/8Wxp9EuE7M2XKLHhMxMacl+NaLSW/qdCCQzjeHuU97IgbzOZGRx0T92OOp4TpZbvhlzc0cWr9B/VWe9efqnMIzIEAUnwR39ra0jpUbulR/cwf/b8TPC4/siWxqGy11Ilb0nxt4VWPA2Vx26mjko0+fWAFixKdpeJXqBPSJXKazmsCnr9WNj/wiGa16C5f/bK+T6ocuRhdoLs8KaFSv56Cc7STIzRqvJaJOMC/S8/1/eAUO/klkMz35In7093N+ofl6AV4PaC49B2VtZ3U9D00gqgOritV7q0vGnoAxX3UrJtW/+CO+OivkNfX9T2/wSm+nI6l4J0vZw0ATgfpFRhyLbC2s6l2D51uIKFHpYMXMj7YNDHjfdE++xW6PJ+eWwz9s2f5sNkNbwRezQjP7dCV/20Ccu2yLtC8V/lAy9o6LoWp+Qam2lda/ZNHqSJyZ59caf4ZEoNqjXzK8it7h5K/rNNbOMrCcqlj1DcGrPfTwYP97mov3QvJmAEuq8f6uMfiXxbtv4MdGX8PiZaRhviayPstqmqlegrYQcIBR/CVqU/CWwRZwfCQR382QYQDzitEjW8F3XD3jaRpp3AtCiIGFesGxFbyCDQ1FfemJuh2QfFqvBGwH/yrawVTfLkiEAW4oVAK2hVcl4H/o30PM3xYqAdvCqwxoH4r6Fo97PyFGb74SsDX8qxLoTsY/E1J+D0LDjEOZrAn46V1gtPFzxvSV1Je7AN2pCfjXJZCu3wqSx8H8yEXo+Qf3I4hni2PDwwAAAABJRU5ErkJggg=="
            alt=""
          />
          <font>一对一辅导</font>
        </li>
        <li @click="study">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <font>学习日历</font>
        </li>
      </ul>
    </div>
    <!-- 数据展示 -->
    <div v-for="(item, i) in appIndex" :key="i">
      <!-- 讲师 -->
      <div v-show="item.channel_info.type == 3" class="box">
        <p class="index-page">{{ item.channel_info.name }}</p>
        <div class="ot-content">
          <div
            class="ot-item"
            v-for="t in item.list"
            :key="t.teacher_id"
            @click="teacher(t.teacher_id)"
          >
            <img :src="t.teacher_avatar" alt="" />
            <div>
              <p>
                <span>{{ t.teacher_name }}</span>
              </p>
              <p>
                {{ t.introduction }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 明星讲师 -->
      <div v-show="item.channel_info.type == 4" class="box">
        <p class="index-page">{{ item.channel_info.name }}</p>
        <div class="ot-content">
          <div
            class="ot-item"
            v-for="t in item.list"
            :key="t.teacher_id"
            @click="teacher(t.teacher_id)"
          >
            <img :src="t.teacher_avatar" alt="" />
            <div>
              <p>
                <span>{{ t.teacher_name }}</span>
                <font style="font-size: 2.93333vw; color: #ea7a2f">{{t.level_name}}</font>
              </p>
              <p>
                {{ t.introduction }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 课程 -->
      <div v-if="item.channel_info.type == 1" class="box">
        <p class="index-page">{{ item.channel_info.name }}</p>
        <div class="index-item-page">
          <div
            class="ii-item"
            v-for="t in item.list"
            :key="t.id"
            @click="$router.push(`/kecheng?id=${t.id}`)"
          >
            <p class="ii-title">
              <font>{{ t.title }}</font>
            </p>
            <div class="ii-time">
              <p>共{{ t.total_periods }}课时</p>
            </div>
            <div class="ii-teacher">
              <div class="teacher-item">
                <img alt="" :src="t.teachers_list[0].teacher_avatar" />
                <font>{{ t.teachers_list[0].teacher_name }}</font>
              </div>
            </div>
            <p class="ii-info">
              <span>{{ t.sales_num }}人已报名</span>
              <font style="color: #44a426" v-if="t.price == 0">免费</font>
              <font style="color: #eb6100" v-if="t.price != 0"
                >{{ t.price / 100 }}.00</font
              >
            </p>
            <img
              src="https://wap.365msmk.com/img/has-buy.6cfbd83d.png"
              alt=""
              class="has_buy"
              v-if="t.has_buy == 1"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 未登录之前的弹框提示 -->
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="block">
          <i @click="show = false"></i>
          <img src="https://wap.365msmk.com/img/feiji.decaf161.png" alt="" />
          <p class="login-text">赶紧登录一下吧</p>
          <p class="login-message">立即预约一对一辅导，浏览更多视频课程~</p>
          <span @click="$router.push('/login')">立即登录</span>
        </div>
      </div>
    </van-overlay>
  </div>
</template>


<script>
export default {
  name: "",
  data() {
    return {
      Banner: [],
      appIndex: [],
      token: sessionStorage.getItem("token") || "",
      // 未登录的弹框
      show: false,
    };
  },
  created() {},
  mounted() {
    this.banner();
    this.appindex();
  },
  methods: {
    // 获取轮播图数据
    async banner() {
      let { data: res } = await this.$http.banner();
      this.Banner = res.data;
    },
    // 获取首页数据
    async appindex() {
      let { data: res } = await this.$http.appIndex();
      this.appIndex = res.data;
    },
    // 点击跳转讲师详情
    teacher(id) {
      console.log(id);
      if (this.token) {
        this.$router.push(`/teacher/?id=${id}`);
        return false;
      }
      this.show = true;
    },
    // 学习日历
    study() {
      if (this.token) {
        this.$router.push(`/rili`);
        return false;
      }
      this.show = true;
    },
    // 课程详情
    cours(id) {},
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.block {
  width: 75.46667vw;
  height: 92.13333vw;
  background: #fff;
  border-radius: 4vw;
  position: relative;
  text-align: center;
  > img {
    width: 100%;
    height: 60%;
    border-radius: 4vw;
  }
  > i {
    width: 3.2vw;
    height: 3.2vw;
    position: absolute;
    top: 3.06667vw;
    right: 3.46667vw;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAiCAYAAAA+stv/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzAyRDRBRjhGQzM0MTFFOEE5MjE5OENFRDA4QUUwMkEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzAyRDRBRjdGQzM0MTFFOEE5MjE5OENFRDA4QUUwMkEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRDA2NDMwNEQ2N0ExMUU4ODMwNEUwOEE3QzA3NDUwOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRDA2NDMwNUQ2N0ExMUU4ODMwNEUwOEE3QzA3NDUwOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg9KkA8AAAKQSURBVHjaxJjbS1RRFMbPbKbUMughSDHoghJ2wxuIQT4kZJmZ4lB/RmFa/gveKfBheuoiaN6CHgq0Hn3wIUip1MGm20tQPYb4EOO34hvYHc7MOXvPnHHDz9ly9uy99lrrrI81kVQq5ezmiMTj8YP4bALfwIcCnXsRbINlhT+t4DmYBmcLcHgXmCNVYsBvUAROgRlQHeLhl8FjIF7/A7bEgNfgFhecBC9D8kQbL3gAJMBV8EXx4QNwh/NjYBE05Nnt86AUfASXwLo8UNqiUdDP+WEwC2rzcHg3mGKY5eYx8DX9ULkWD2ieOAqegdM5HN4OHoG9IAlugDV9gfL40qiWE1XgBRPUdFwBk3R7ksasuBepDF+WnOjh/AR4A+oMDu/QYi43bnHf3M8AGWPgLudl9ER9gMNjzPZiJlqnZHumxcpnsyHQy3kFk+lMlvXXwRPG/BO4ycRzbA2QMQJuc17JqlmdIeZPQQlvLDdf9dtcBYzpfZcRC6DGle2zLDIbjPn7IBtHDRJLjNjDsBwBr0Az53N0uxSZa8x6J98GyBim1waYmAvMdDl8kzFPmmwYtXi/B8FPMM6y7fBwkdjvppspywr3GfzV/t+mF5xCGNBFxRTX/6KsSrleshEwUwPSwlLC97tRq5hWAmZigJewyOfDXAQsqAF+wmItYEEMCCosVgLmZ4CRsNgImMqnsNgImMoSc2NhsRAwTwOshcVQwDwNiFFY9lFY2kxru4cRfZynBaw+kwFS4SZyEZYsAnZPS8z/OjDl6liKGPOYpduzCZj+is6wCfpnwAUt5gn2iishdEZjrg5MKuZxMaAc7Nc6loQT3tA7sHPgUJSvyHnwQ+9YQhxStt9SRd9FdvsHih0BBgAvyZ5zZX2xCwAAAABJRU5ErkJggg==);
    background-size: 100%;
    background-position: 50%;
  }
  > .login-text {
    font-size: 4vw;
    font-weight: 500;
    color: #333;
    line-height: 5.86667vw;
  }
  > .login-message {
    font-size: 3.2vw;
    font-family: PingFang SC;
    font-weight: 400;
    color: #999;
    line-height: 0.50667rem;
    line-height: 5.06667vw;
  }
  > span {
    display: inline-block;
    width: 62.93333vw;
    height: 10.66667vw;
    background: #eb6100;
    border-radius: 5.33333vw;
    font-size: 4vw;
    font-weight: 400;
    color: #fff;
    line-height: 10.66667vw;
    margin-top: 7.6vw;
  }
}
.content {
  height: 100%;
  background: #f0f2f5;
  margin-bottom: 14vw;
}
.my-swipe .van-swipe-item {
  color: #fff;
  background-color: #39a9ed;
  height: 2rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.index-kind {
  padding: 0 2.66667vw;
  margin-top: -6.66667vw;
  margin-bottom: 5.33333vw;
  position: relative;
  > ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    > li {
      display: flex;
      flex-direction: column;
      background: #fff;
      border-radius: 2.66667vw;
      width: 27.46667vw;
      height: 27.46667vw;
      align-items: center;
      justify-content: center;
      > img {
        width: 5.6vw;
        height: 5.33333vw;
        display: block;
      }
      > font {
        margin-top: 0.4rem;
        margin-top: 4vw;
        font-size: 0.32rem;
        font-size: 3.2vw;
        font-weight: 400;
        color: #8c8c8c;
      }
    }
  }
}
.index-page {
  font-weight: 500;
  color: #595959;
  position: relative;
  padding-left: 7.2vw;
  line-height: 5.33333vw;
  height: 5.33333vw;
  font-size: 4.26667vw;
}
.index-page::after {
  position: absolute;
  content: "";
  left: 4vw;
  top: 50%;
  transform: translateY(-50%);
  width: 0.8vw;
  height: 4.26667vw;
  background: #eb6100;
}
div.box {
  > .ot-content {
    padding: 1.33333vw 2.66667vw 5.33333vw;
    > .ot-item {
      display: flex;
      align-items: center;
      padding: 0 4vw;
      background: #fff;
      border-radius: 1.06667vw;
      height: 21.6vw;
      margin-top: 2.66667vw;
      > img {
        width: 10.66667vw;
        height: 10.66667vw;
        margin-right: 3.2vw;
        border-radius: 50%;
        flex: none;
      }
      > div {
        flex: 1;
        > p {
          font-weight: 400;
        }
        > p:nth-child(1) {
          padding-bottom: 0.8vw;
          > span {
            font-size: 4vw;
            color: #595959;
            line-height: 5.6vw;
            padding-right: 1.33333vw;
          }
        }
        > p:nth-child(2) {
          width: 73.33333vw;
          font-size: 3.2vw;
          height: 4vw;
          padding-top: 1.33333vw;
          color: #b7b7b7;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
  > .index-item-page {
    padding: 4vw;
    > .ii-item {
      background: #fff;
      border-radius: 1.33333vw;
      padding: 0 3.73333vw;
      margin-bottom: 4vw;
      position: relative;
      > .ii-title {
        padding-top: 4vw;
        > font {
          font-size: 4.26667vw;
          font-family: PingFangSC-Medium;
          font-weight: 400;
          color: #333;
        }
      }
      > .ii-time {
        display: flex;
        align-items: center;
        > p {
          height: 8vw;
          line-height: 8vw;
          display: inline-block;
          font-size: 3.2vw;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #666;
          padding-right: 4.53333vw;
          position: relative;
        }
      }
      > .ii-teacher {
        height: 17.33333vw;
        display: flex;
        > .teacher-item {
          display: flex;
          height: 100%;
          align-items: center;
          > img {
            width: 7.2vw;
            height: 7.2vw;
            border-radius: 50%;
          }
          > font {
            font-size: 3.2vw;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.45);
            margin-left: 2.26667vw;
            margin-right: 4.66667vw;
          }
        }
      }
      > .ii-info {
        border-top: 1px solid #f5f5f5;
        height: 11.73333vw;
        line-height: 11.73333vw;
        display: flex;
        font-size: 3.46667vw;
        font-family: PingFangSC-Regular;
        > span {
          flex: 1;
          padding-right: 2.66667vw;
          color: rgba(0, 0, 0, 0.45);
        }
        > font {
          font-size: 0.42667rem;
          font-size: 4.26667vw;
        }
      }
      > .has_buy {
        position: absolute;
        right: 4vw;
        top: 17.33333vw;
        width: 12.8vw;
        height: 12.8vw;
        border-radius: 50%;
      }
    }
  }
}
</style>