<template>
  <div parent="box">
    <div class="dot"></div>
    <div class="inner-circle"></div>
    <div class="outer-circle"></div>
  </div>
</template>
<style>
@keyframes circleAnimationIn {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  25% {
    transform: scale(0.3);
    opacity: 0.1;
  }
  50% {
    transform: scale(0.5);
    opacity: 0.3;
  }
  75% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
@keyframes circleAnimationOut {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  25% {
    transform: scale(0.3);
    opacity: 0.1;
  }
  50% {
    transform: scale(0.3);
    opacity: 0.3;
  }
  75% {
    transform: scale(0.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(0.8);
    opacity: 0;
  }
}
div[parent="box"] {
  position: relative;
  margin: 50px auto;
  width: 54px;
  height: 54px;
}

/* 保持大小不变的小圆点 */
.dot {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  margin-left: -4px;
  margin-top: -4px;
  border-radius: 50%;
  background-color: #fb7070; /* 实心圆 ，如果没有这个就是一个小圆圈 */
  z-index: 2;
}

/* 产生动画（向外扩散变大）的圆圈 第一个圆 */
.inner-circle {
  position: absolute;
  z-index: 1;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: 1px solid #fb7070;
  animation: circleAnimationIn 2s ease-out;
  animation-iteration-count: infinite;
  box-shadow: 1px 1px 30px #fb7070;
}

/* 产生动画（向外扩散变大）的圆圈 第二个圆 */
.outer-circle {
  position: absolute;
  z-index: 1;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: 1px solid #fb7070;
  animation: circleAnimationOut 2s ease-out;
  animation-iteration-count: infinite;
  box-shadow: 1px 1px 30px #fb7070;
}
</style>
