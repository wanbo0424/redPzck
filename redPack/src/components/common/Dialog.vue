<template>
  <div class="dialog">
      <!--外层的遮罩 点击事件用来关闭弹窗，isShow控制弹窗显示 隐藏的props-->
      <div class="dialog-cover back"  v-if="isShow"  @click="closeMyself"></div>
      <!-- transition 这里可以加一些简单的动画效果 -->
      <transition name="drop">
         <!--style 通过props 控制内容的样式  -->
        <div class="dialog-content" :style="{width:widNum+'%'}"  v-if="isShow">
          <div class="dialog_head back">
             <!--弹窗头部 title-->
            <slot name="header">提示信息</slot>
          </div>
          <div class="dialog_main" >
            <!--弹窗的内容-->
            <slot name="main">弹窗内容</slot>
          </div>
          <!--弹窗关闭按钮-->
          <div  class="foot_close" @click="closeMyself">
              <div class="close_img back">x</div>
          </div>
        </div>
    </transition>
  </div>
</template> 
<script>
export default {
    props:{
        isShow:{
            type: Boolean,
            default: false,
        },
        widNum:{
            type:Number,
            default:0
        }
    },
     methods: {
        closeMyself() {
            this.$emit("on-close");
        }
    }
}
</script>

<style lang="scss">
.dialog {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: #2e2c2d;
    font-size: 16px;
    // 遮罩 设置背景层，z-index值要足够大确保能覆盖，高度 宽度设置满 做到全屏遮罩
    .dialog-cover {
        background: rgba(0,0,0, 0.8);
        position: fixed;
        z-index: 200;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
     // 内容层 z-index要比遮罩大，否则会被遮盖，
    .dialog-content{
        position: fixed;
        top: 35%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 300;
        .dialog_head {
            width: 86.5%;
            height: 43px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            background-color: aquamarine
        }
        .dialog_main {
            // 主体内容样式设置
            background: #ffffff;
            display: flex;
            justify-content: center;
            align-content: center;
            width: 86.5%;
            padding: 22px 0 47px 0;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }
        .foot_close {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #fcca03;
            display: flex;
            justify-content: center;
            align-content: center;
            margin-top: -25px;
        }
        .close_img {
            width: 42px;
            height: 42px;
        }
    }
}
</style>
