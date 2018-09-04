<template>
    <div class="img-box" id="ec-slide-box">
        <div class="img-show">
            <img :src="listSrc[nowIndex].src" >
        </div>
        <div class="img-type img-left">
            <ul :style="{'width':ulWidth, 'transform':'translate3d(-'+(listWidth*(nowIndex))+'rem,0,0)','transition':'all .3s '}">
                <li v-for="(li,index) in listSrc"  :key="index" >
                    <a :href="li.href?li.href:'javascript:;'">
                        <img :src="li.src" class="slider-img" :class="{select: nowIndex == index}"/>
                    </a>
                </li>
            </ul>
        </div>
        <!--如果需要显示箭头-->
        <div class="arrow">
            <div class="arrow-left" @click="swich('back')"
                 :style="{'width':50+'px','height':50+'px',}"> 《</div>
            <div class="arrow-right" @click="swich()"
                 :style="{'width':50+'px','height':50+'px'}"> 》</div>
        </div>
        <!-- 对应的点 -->
        <div class="option">
            <div>
                <span v-for="(li,index) in listSrc"
                      :class="{active:index == nowIndex}"></span>
            </div>
        </div>
    </div>
</template>
<script>
// ['list', 'autoplay', 'type', 'time', 'sildetype', 'arrowurl', 'arrowsize', 'option', 'direction'],

export default {
  data() {
    return {
      nowIndex: 0,
      timer: null
    };
  },
  props: {
    listSrc: {
      type: Array,
      default: () => {
        return [
          { src: "../../../static/1.jpg" },
          { src: "../../../static/2.jpg" },
          { src: "../../../static/3.jpg" },
          { src: "../../../static/4.jpg" }
        ];
      }
    },
    isAuto: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
    autoTime: {
      type: Number,
      default: () => {
        return 2000;
      }
    }
  },
  computed: {
    //ul宽度
    ulWidth: function() {
      return this.listSrc.length * this.listWidth + "rem";
    },
    //li宽度
    listWidth: function() {
      return 6;
    },

  },
  created() {
    if (this.isAuto) {
      this.auto(this.autoTime);
    }
  },
  methods: {
    /**
     * 滑动动作
     * @return {Number} 滑动图片索引值
     */
    swich: function(direction) {
      clearInterval(this.timer);
      if (direction == "back") {
        if (this.nowIndex == 0) {
          this.nowIndex = this.listSrc.length - 1;
        } else {
          this.nowIndex--;
        }
      } else {
        if (this.nowIndex == this.listSrc.length - 1) {
          this.nowIndex = 0;
        } else {
          this.nowIndex++;
        }
      }
      if (this.isAuto) {
        this.auto(this.autoTime);
      }
    },
    /**
     * 自动播放
     */
    auto: function(ms) {
      this.timer = setInterval(() => {
        this.swich();
      }, ms);
    }
  }
};
</script>

<style lang="scss">
.img-box {
  width: 100%;
  height: 100%;
  position: relative;
  touch-action: none;
}
.img-show {
  text-align: center;
  img {
    width: 300px;
    height: 240px;
  }
}

.img-type {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
//   &.img-transparent {
//     li {
//       opacity: 0;
//       transition: opacity 1s;
//       width: 0;
//       &.cur {
//         width: auto;
//       }
//       &.show {
//         opacity: 1;
//       }
//     }
//   }
ul {
  height: 8rem;
  font-size: 0;
  padding: 1rem;
  &.tran {
    transition: all 0.4s;
  }
  li {
    width: 6rem;
    display: inline-block;
    font-size: 0;
    text-align: center;
  }
  img {
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    &.select {
      transform: scale(1.2, 1.2);
      border: 2px solid white;
      border-radius: 15%;
    }
  }
}

.arrow {
  div {
    position: absolute;
    z-index: 2;
    margin: 6rem auto;
    top: 0;

    opacity: 0.5;
    &.arrow-left {
      left: 10px;
      right: auto;
    }
    &.arrow-right {
      right: 10px;
      left: auto;
      text-align: right;
    }
  }
}
.option {
  position: absolute;
  font-size: 0;
  bottom: 10px;
  text-align: center;
  width: 100%;
  z-index: 5;
  top: 11rem;
  span {
    border-radius: 100%;
    margin: 0 5px;
    background: #fff;
    display: inline-block;
    width: 10px;
    height: 10px;
    &.active {
      background: #09f;
    }
  }
}
</style>
