<template>
    
  <div style="height: 100%">
    <!-- 头部 -->
    <app-header style="border: 0.01rem solid #eee">
      <div slot="left" @click="$router.go(-1)">
        <van-icon name="arrow-left" />
      </div>
      <div slot="title" class="head-title">
        每时每课特级教师-自主招生冲刺讲座6-多元方程组与可转化为多元方程组问题
      </div>
      <div slot="right" @click="$router.push('/rili')">
        <van-icon name="clock-o" />
      </div>
    </app-header>

    <!-- 学习进度 -->
    <div class="info">
      <span>共{{ study_obj.course.section_num }}课时</span>
      <div>
        <van-progress
          color="#f2826a"
          inactive
          :percentage="study_obj.course.progress_rate"
          pivot-text=""
        />
      </div>
      <span>已学习{{ study_obj.course.progress_rate }}%</span>
    </div>
    <!-- 内容 -->
    <div class="content">
      <div
        class="item"
        v-for="item in study_obj.periods"
        :key="item.id"
        @click="video(item.video_id, item.periods_title)"
      >
        <div class="title">
          <span>{{ item.periods_title }}</span>
        </div>
        <div class="teacher">
          <span></span>
        </div>
        <div class="i-info">
          <div>
            <van-progress
              inactive
              :percentage="item.progress_rate"
              pivot-text=""
              color="#eb6100"
            />
          </div>
          <span>已学习{{ item.progress_rate }}%</span>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div class="footer">
      <p @click="pl_show = true">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAhCAYAAACxzQkrAAAE30lEQVRYR7WYXYwTVRTH/+e22x2g0yVoVh9IRGNCiIkPCEGjxkQe/ODFlzUQMDyoaNiklum0sismoyjJMjOdZj8wRCNqDApVNCEGkn3QIMFoEBXF+KIh6wcmfC2702W77dxjLtndlNpu26Xc13s+fnPuOeeeO4SbtCzLiui6voKZtwN4EEBARMeFEN6VK1dOW5ZVquaabgaPZVmarutJZk4AuHXGBxExM/8thOgfGxvzqkHdFCDXdV9n5m0AojU+OE9EO5LJZLZyv+VAjuNsAPA+gLa5os/M50Oh0FrDMH4ul2sZUH9/f7vv+zFN03wppcobY44IKYYiEW1LJpNDLQeyLCus6/oeAAsKhUJC07QJKeUOZjaISKsRKQngVdM0d7UUyPO8xVLKAWbeNG34YKlU2jI5OXlV13WbmV8A0F4JxcyTALamUql9LQMaHBy8pVAoZKWUTxNRpMzwESnlSx0dHWfHx8dVcvcAWFwB9X0kEnkqHo//1RIg27YXAfiIiB4DUA6j7AcAjkopn9M07XKhUFBH9woApaPWBSHEOsMwvmtJlQ0NDd0+MTGxj4gen6uSiGi4vb19Q2dn5+jIyIilckoI8U8oFNqUSCS+bUlj7OvrWxoKhfYw8xNEFK7XWInoaynl1nw+/2s0Gt0opfwjlUqdUE3yhoGy2extpVLpEwD3A6gLoxwysySiY+FweHMikfhzGqIqjNpruA9lMpm7pJT7AaypF5WKfeX8jBBivWEYZ+rpNgTU19e3XAixl4geAhCqZ7R8n5lPEdGLpmmeVAGrp1sXKJPJ3C2lPATgHgCinsHrSpjoZBAE69Pp9O+N6s0FRK7r3qtKm5lXNGpwWk514RPhcHhjIpEYaUa3JpDjOKsBvAVgZTO5Nu18GEDcNM3fmoGpmdTZbHZNEAT7mfnOecAcllJuSafT/zYLUxXIcZz7AHwK4I4mDarufHhqampLb2/v+SZ1Z8X/d2Se560MgmAQwAONGp2eBD8mopeTyeRMr2lU/Tq564Bs296Uz+f3x2KxZcx8gJlXNWBVlfLeYrHY29PTc7kB+TlFZoEymcwqKeUxAKbv++8sXLhwiRDic2ZeTURVy52ZS0T0biQSScXj8bEbhSnPIVXibzPzswAuAnB833disdgKKaUHYG0VZwpG3Wk7TdO80AqYWSDP85YFQXAUwPJpw2oI3xuNRrfn8/lOKeUHAB4tc6rGz51Sykwqlcq3CmYWyHGcZwCoRI7NGGfmKeVUCOHGYrEFo6OjOQCPAFDvKVcI8YZhGFdbCXMNSD3ootHoAIDnq/QcH8AeXddf831/KTO/SUSnNU3zuru71V7LF2UymSXM/AUzq5Gi2ioQ0QE10xSLRe3cuXP+wMBAoVLQtu11RKSeQE3dd2V21JhykBzHUQ3wJwAdFU5UOZeYeUwI8UsQBIl0Ov1jrZC4rqtGC/V0rnth17BxbUwh27bVgH6gQmiciL4BMMzMX/q+/4NlWerCrLl27979ZDgcflhKOe8IMfNxFaH3AGwGoEJ2ipk/UyCRSOTspUuXLtYDKSfs6uoKdXV1zSuvcrkccrlcoIByau5ta2s7VPkkqZIni4ho9ufBvDzPoVQsFseaOm/XdXcxc6rZqbFBcJVDXzUL1M3M6o9FQwN+gyAzYiplPvwPh2MJ5xnUb/8AAAAASUVORK5CYII="
          alt=""
        />
        <span>写评论</span>
      </p>
      <p @click="$router.push(`/kecheng?id=${id}`)">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAhCAYAAACxzQkrAAAE30lEQVRYR7WYXYwTVRTH/+e22x2g0yVoVh9IRGNCiIkPCEGjxkQe/ODFlzUQMDyoaNiklum0sismoyjJMjOdZj8wRCNqDApVNCEGkn3QIMFoEBXF+KIh6wcmfC2702W77dxjLtndlNpu26Xc13s+fnPuOeeeO4SbtCzLiui6voKZtwN4EEBARMeFEN6VK1dOW5ZVquaabgaPZVmarutJZk4AuHXGBxExM/8thOgfGxvzqkHdFCDXdV9n5m0AojU+OE9EO5LJZLZyv+VAjuNsAPA+gLa5os/M50Oh0FrDMH4ul2sZUH9/f7vv+zFN03wppcobY44IKYYiEW1LJpNDLQeyLCus6/oeAAsKhUJC07QJKeUOZjaISKsRKQngVdM0d7UUyPO8xVLKAWbeNG34YKlU2jI5OXlV13WbmV8A0F4JxcyTALamUql9LQMaHBy8pVAoZKWUTxNRpMzwESnlSx0dHWfHx8dVcvcAWFwB9X0kEnkqHo//1RIg27YXAfiIiB4DUA6j7AcAjkopn9M07XKhUFBH9woApaPWBSHEOsMwvmtJlQ0NDd0+MTGxj4gen6uSiGi4vb19Q2dn5+jIyIilckoI8U8oFNqUSCS+bUlj7OvrWxoKhfYw8xNEFK7XWInoaynl1nw+/2s0Gt0opfwjlUqdUE3yhoGy2extpVLpEwD3A6gLoxwysySiY+FweHMikfhzGqIqjNpruA9lMpm7pJT7AaypF5WKfeX8jBBivWEYZ+rpNgTU19e3XAixl4geAhCqZ7R8n5lPEdGLpmmeVAGrp1sXKJPJ3C2lPATgHgCinsHrSpjoZBAE69Pp9O+N6s0FRK7r3qtKm5lXNGpwWk514RPhcHhjIpEYaUa3JpDjOKsBvAVgZTO5Nu18GEDcNM3fmoGpmdTZbHZNEAT7mfnOecAcllJuSafT/zYLUxXIcZz7AHwK4I4mDarufHhqampLb2/v+SZ1Z8X/d2Se560MgmAQwAONGp2eBD8mopeTyeRMr2lU/Tq564Bs296Uz+f3x2KxZcx8gJlXNWBVlfLeYrHY29PTc7kB+TlFZoEymcwqKeUxAKbv++8sXLhwiRDic2ZeTURVy52ZS0T0biQSScXj8bEbhSnPIVXibzPzswAuAnB833disdgKKaUHYG0VZwpG3Wk7TdO80AqYWSDP85YFQXAUwPJpw2oI3xuNRrfn8/lOKeUHAB4tc6rGz51Sykwqlcq3CmYWyHGcZwCoRI7NGGfmKeVUCOHGYrEFo6OjOQCPAFDvKVcI8YZhGFdbCXMNSD3ootHoAIDnq/QcH8AeXddf831/KTO/SUSnNU3zuru71V7LF2UymSXM/AUzq5Gi2ioQ0QE10xSLRe3cuXP+wMBAoVLQtu11RKSeQE3dd2V21JhykBzHUQ3wJwAdFU5UOZeYeUwI8UsQBIl0Ov1jrZC4rqtGC/V0rnth17BxbUwh27bVgH6gQmiciL4BMMzMX/q+/4NlWerCrLl27979ZDgcflhKOe8IMfNxFaH3AGwGoEJ2ipk/UyCRSOTspUuXLtYDKSfs6uoKdXV1zSuvcrkccrlcoIByau5ta2s7VPkkqZIni4ho9ufBvDzPoVQsFseaOm/XdXcxc6rZqbFBcJVDXzUL1M3M6o9FQwN+gyAzYiplPvwPh2MJ5xnUb/8AAAAASUVORK5CYII="
          alt=""
        />
        <span>课程详情</span>
      </p>
      <p @click="cancle">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAhCAYAAACxzQkrAAAE30lEQVRYR7WYXYwTVRTH/+e22x2g0yVoVh9IRGNCiIkPCEGjxkQe/ODFlzUQMDyoaNiklum0sismoyjJMjOdZj8wRCNqDApVNCEGkn3QIMFoEBXF+KIh6wcmfC2702W77dxjLtndlNpu26Xc13s+fnPuOeeeO4SbtCzLiui6voKZtwN4EEBARMeFEN6VK1dOW5ZVquaabgaPZVmarutJZk4AuHXGBxExM/8thOgfGxvzqkHdFCDXdV9n5m0AojU+OE9EO5LJZLZyv+VAjuNsAPA+gLa5os/M50Oh0FrDMH4ul2sZUH9/f7vv+zFN03wppcobY44IKYYiEW1LJpNDLQeyLCus6/oeAAsKhUJC07QJKeUOZjaISKsRKQngVdM0d7UUyPO8xVLKAWbeNG34YKlU2jI5OXlV13WbmV8A0F4JxcyTALamUql9LQMaHBy8pVAoZKWUTxNRpMzwESnlSx0dHWfHx8dVcvcAWFwB9X0kEnkqHo//1RIg27YXAfiIiB4DUA6j7AcAjkopn9M07XKhUFBH9woApaPWBSHEOsMwvmtJlQ0NDd0+MTGxj4gen6uSiGi4vb19Q2dn5+jIyIilckoI8U8oFNqUSCS+bUlj7OvrWxoKhfYw8xNEFK7XWInoaynl1nw+/2s0Gt0opfwjlUqdUE3yhoGy2extpVLpEwD3A6gLoxwysySiY+FweHMikfhzGqIqjNpruA9lMpm7pJT7AaypF5WKfeX8jBBivWEYZ+rpNgTU19e3XAixl4geAhCqZ7R8n5lPEdGLpmmeVAGrp1sXKJPJ3C2lPATgHgCinsHrSpjoZBAE69Pp9O+N6s0FRK7r3qtKm5lXNGpwWk514RPhcHhjIpEYaUa3JpDjOKsBvAVgZTO5Nu18GEDcNM3fmoGpmdTZbHZNEAT7mfnOecAcllJuSafT/zYLUxXIcZz7AHwK4I4mDarufHhqampLb2/v+SZ1Z8X/d2Se560MgmAQwAONGp2eBD8mopeTyeRMr2lU/Tq564Bs296Uz+f3x2KxZcx8gJlXNWBVlfLeYrHY29PTc7kB+TlFZoEymcwqKeUxAKbv++8sXLhwiRDic2ZeTURVy52ZS0T0biQSScXj8bEbhSnPIVXibzPzswAuAnB833disdgKKaUHYG0VZwpG3Wk7TdO80AqYWSDP85YFQXAUwPJpw2oI3xuNRrfn8/lOKeUHAB4tc6rGz51Sykwqlcq3CmYWyHGcZwCoRI7NGGfmKeVUCOHGYrEFo6OjOQCPAFDvKVcI8YZhGFdbCXMNSD3ootHoAIDnq/QcH8AeXddf831/KTO/SUSnNU3zuru71V7LF2UymSXM/AUzq5Gi2ioQ0QE10xSLRe3cuXP+wMBAoVLQtu11RKSeQE3dd2V21JhykBzHUQ3wJwAdFU5UOZeYeUwI8UsQBIl0Ov1jrZC4rqtGC/V0rnth17BxbUwh27bVgH6gQmiciL4BMMzMX/q+/4NlWerCrLl27979ZDgcflhKOe8IMfNxFaH3AGwGoEJ2ipk/UyCRSOTspUuXLtYDKSfs6uoKdXV1zSuvcrkccrlcoIByau5ta2s7VPkkqZIni4ho9ufBvDzPoVQsFseaOm/XdXcxc6rZqbFBcJVDXzUL1M3M6o9FQwN+gyAzYiplPvwPh2MJ5xnUb/8AAAAASUVORK5CYII="
          alt=""
        />
        <span>移除列表</span>
      </p>
    </div>

    <!-- 评论遮罩层 -->
    <van-overlay :show="pl_show">
      <div class="wrapper">
        <div class="block">
          <i class="close" @click="pl_show = false"
            ><van-icon name="cross"
          /></i>
          <div class="start">
            <span>星级：</span>
            <div>
              <van-rate
                v-model="value"
                color="#ffd21e"
                void-icon="star"
                void-color="#eee"
              />
            </div>
          </div>
          <div class="body">
            <span>内容：</span>
            <textarea v-model="text"></textarea>
          </div>
          <div class="submit" @click="comment">发布</div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>


<script>
import appHeader from "../../components/Header";
import { Tabs, Toast } from "vant";
export default {
  name: "",
  components: { appHeader },
  data() {
    return {
      text: "",
      value: 5,
      id: this.$route.query.id,
      study_obj: {},
      pl_show: false,
    };
  },
  created() {},
  mounted() {
    this.study();
  },
  methods: {
    //   学习进度详情
    async study() {
      let { data: res } = await this.$http.xuexi_info(this.id);
      this.study_obj = res.data;
    },
    // 评论
    async comment() {
      let obj = {
        content: this.text,
        course_id: this.id,
        grade: this.value,
        type: 1,
      };
      let { data: res } = await this.$http.myStudy_comment(obj);
      console.log(res);
      if (res.code == 200) {
        Toast("评论成功");
        this.study();
      } else {
        Toast(res.msg);
      }
    },
    // 移除课程
    async cancle() {
      let { data: res } = await this.$http.myStudy_course(this.id);
      if (res.code != 200) {
        Toast(res.msg);
        return false;
      }
      Toast("移除成功");
      this.$router.go(-1);
    },
    async video(video_id, title) {
      let { data: res } = await this.$http.video({ video_id, id: this.id });
      if (res.data.length == 0) {
        Toast("该课程没有回放视频");
      } else {
        window.location.href = `https://wap.365msmk.com/video?id=${this.id}&video_id=${video_id}&title=${title}`;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.head-title {
  font-size: 4.8vw;
  color: #595959;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 66.66667vw;
}
.info {
  font-size: 3.46667vw;
  color: #595959;
  height: 13.86667vw;
  line-height: 13.86667vw;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  > div {
    width: 56vw;
    height: 1.06667vw;
  }
}
.content {
  margin-bottom: 0.4rem;
  .item {
    border: 0.53333vw solid #e9e9e9;
    border-radius: 1.06667vw;
    padding: 4vw;
    margin-bottom: 4vw;
    margin-bottom: 13.33333vw;
    margin: 4vw;
    > .title {
      padding-left: 4vw;
      position: relative;
      > span {
        font-size: 3.2vw;
        color: #595959;
        vertical-align: middle;
      }
    }
    > .title::before {
      content: "";
      display: block;
      width: 1.06667vw;
      height: 1.06667vw;
      border-radius: 50%;
      background-color: #eb6100;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    > .teacher {
      padding-left: 4vw;
      margin-top: 2vw;
      font-size: 3.2vw;
      color: #8c8c8c;
    }
    > .i-info {
      margin-top: 2.66667vw;
      font-size: 3.2vw;
      color: #8c8c8c;
      display: flex;
      justify-content: space-between;
      align-items: center;
      > div {
        width: 75%;
        height: 1.06667vw;
      }
      > span {
      }
    }
  }
}
.footer {
  width: 100%;
  height: 9.86667vw;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  border-top: 0.01rem solid #f5f5f5;
  > p {
    float: left;
    width: 33.3%;
    height: 100%;
    line-height: 8.53333vw;
    text-align: center;
    > img {
      width: 3.2vw;
      height: 3.2vw;
      vertical-align: middle;
    }
    > span {
      font-size: 3.2vw;
      color: #8c8c8c;
      vertical-align: middle;
      margin-left: 1.33333vw;
    }
  }
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 94.66667vw;
  background: #fff;
  border-radius: 0.66667vw;
  padding: 10.66667vw 5.33333vw 8vw;
  box-sizing: border-box;
  font-size: 4vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #595959;
  position: relative;
  > .close {
    position: absolute;
    right: 0.32rem;
    right: 3.2vw;
    top: 0.4rem;
    top: 4vw;
    width: 0.26667rem;
    width: 2.66667vw;
    height: 0.26667rem;
    height: 2.66667vw;
  }
  > .start {
    width: 100%;
    height: 8vw;
    text-align: left;
    display: flex;
    > span {
      line-height: 4.8vw;
      display: inline-block;
      height: 5.33333vw;
    }
    > div {
      display: inline-block;
      height: 5.33333vw;
      line-height: 5.33333vw;
    }
  }
  > .body {
    margin-top: 6vw;
    width: 100%;
    display: flex;
    > span {
      line-height: 5.33333vw;
      text-align: left;
    }
    > textarea {
      flex: 1;
      height: 21.33333vw;
      border: 1px solid #bfbfbf;
      border-radius: 0.66667vw;
      box-sizing: border-box;
      padding: 1.33333vw 2.66667vw;
    }
  }
  > .submit {
    width: 23.46667vw;
    height: 7.46667vw;
    background: #eb6100;
    border-radius: 0.66667vw;
    margin: 0 auto;
    line-height: 6.53333vw;
    font-size: 3.46667vw;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #fff;
    text-align: center;
    margin-top: 6.66667vw;
  }
}
</style>