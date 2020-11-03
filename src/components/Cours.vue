<template>
    
  <div style="height: 100%">
    <div
      class="item-list"
      v-for="item in list"
      :key="item.course_id"
      @click.capture="$router.push(`/kecheng?id=${item.course_id}`)"
    >
      <div class="content-icon">
        <van-icon
          name="star"
          color="#eb6100"
          v-if="!show"
          @click.self="can(item.collect_id)"
        />
      </div>
      <div class="top">
        <p class="title">
          {{ item.title }}
        </p>
        <p class="time">
          <span>共{{ item.section_num }}课时</span>
        </p>
        <ul class="teacher">
          <li>
            <img :src="item.teachersAvatar" alt="" /><span>{{
              item.teachers
            }}</span>
          </li>
        </ul>
      </div>
      <div class="bottom">
        <div class="info">
          <p>5人已报名</p>
          <div>
            <p style="color: red" v-if="item.price != 0">
              <img
                src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                alt=""
              />{{ item.price / 100 }}.00
            </p>
            <p style="color: green" v-if="item.price == 0">免费</p>
          </div>
        </div>
      </div>
    </div>
      
  </div>
</template>


<script>
export default {
  props: ["list"],
  name: "",
  data() {
    return {
      show: false,
    };
  },
  created() {},
  mounted() {},
  methods: {
    //   取消收藏
    can(id) {
      this.$emit("collent", id);
    },
  },
  watch:{
      list:{
          deep:true,
          handler(val){
              this.list=val
          }
      }
  }
};
</script>

<style scoped lang="scss">
.item-list {
  background-color: #fff;
  padding: 2.66667vw;
  margin-bottom: 2.66667vw;
  border-radius: 1.33333vw;
  position: relative;
  > .top {
    > .title {
      font-size: 4.26667vw;
      font-weight: 500;
      color: #000;
    }
    > .time {
      margin-bottom: 8vw;
      font-size: 3.2vw;
      font-weight: 400;
      color: #666;
      margin-top: 2.66667vw;
    }
    > .teacher {
      display: flex;
      justify-content: flex-start;
      margin-top: 6.66667vw;
      > li {
        > img {
          width: 7.46667vw;
          height: 7.46667vw;
          border-radius: 50%;
          vertical-align: middle;
        }
        > span {
          font-size: 2.93333vw;
          color: rgba(0, 0, 0, 0.45);
          vertical-align: middle;
          margin-left: 2vw;
          display: inline-block;
          width: 16vw;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
  > .bottom {
    border-top: 1px solid #f5f5f5;
    margin-top: 4vw;
    padding-top: 1.33333vw;
    > .info {
      > p {
        font-size: 3.2vw;
        color: rgba(0, 0, 0, 0.45);
        display: inline-block;
        text-align: left;
      }
      > div {
        float: right;
        > p {
          font-size: 4.66667vw;
          color: #ee1f1f;
          display: inline-block;
          > img {
            width: 2.13333vw;
          }
        }
      }
    }
  }
  > .content-icon {
    background-size: 0.37333rem 0.37333rem;
    background-size: 3.73333vw 3.73333vw;
    width: 8vw;
    height: 8vw;
    float: right;
    font-size: 4.26667vw;
    text-align: center;
    line-height: 8vw;
  }
}
</style>