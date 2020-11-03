<!-- 拖拽滑动 -->
<template>
  <div
    id="default_drag_comp"
    @click="show=true"
    @touchstart="down"
    @touchmove="move"
    @touchend="end"
  >
    <span><van-icon name="comment" color="#fff" /></span>
    <van-overlay :show="show">
      <div class="wrapper">
        <div class="block" @click.stop='show=false'>
            留言面板
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  name: "defaultDrag",
  data() {
    return {
      flags: false,
      position: { x: 0, y: 0 },
      nx: "",
      ny: "",
      dx: "",
      dy: "",
      xPum: "",
      yPum: "",
      show:false,
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    // 实现移动端拖拽
    down() {
      let default_drag_comp = document.querySelector("#default_drag_comp");
      this.flags = true;
      var touch;
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }
      this.maxW = document.body.clientWidth - default_drag_comp.offsetWidth;
      this.maxH = document.body.clientHeight - default_drag_comp.offsetHeight;

      this.position.x = touch.clientX - default_drag_comp.offsetLeft;
      this.position.y = touch.clientY - default_drag_comp.offsetTop;
      this.dx = touch.clientX;
      this.dy = touch.clientY;
    },
    move(event) {
      event.preventDefault();
      let default_drag_comp = document.querySelector("#default_drag_comp");
      if (this.flags) {
        var touch;
        if (event.touches) {
          touch = event.touches[0];
        } else {
          touch = event;
        }
        this.nx = touch.clientX - this.position.x;
        this.ny = touch.clientY - this.position.y;

        if (this.nx < 0) {
          this.nx = 0;
        } else if (this.nx > this.maxW) {
          this.nx = this.maxW;
        }

        if (this.ny < 0) {
          this.ny = 0;
        } else if (this.ny >= this.maxH) {
          this.ny = this.maxH;
        }

        default_drag_comp.style.left = this.nx + "px";
        default_drag_comp.style.top = this.ny + "px";
        //阻止页面的滑动默认事件；如果碰到滑动问题，1.2 请注意是否获取到 touchmove
        document.addEventListener(
          "touchmove",
          function () {
            // event.preventDefault();
          },
          false
        );
      }
    },
    //鼠标释放时候的函数
    end() {
      this.flags = false;
    },
  },
};
</script>
<style scoped lang="scss">
#default_drag_comp {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  border: 0.02px solid #ffffff;
  box-shadow: 0 0 0.4rem 0.02 #d3d3d3;
  background: blue;
  position: fixed;
  z-index: 1000;
  bottom: 0.8rem;
  right: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  span {
    color: #ffffff;
    font-size: 0.24rem;
  }
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>