<template>
  <div class="navBar">
    <transition name="fade">
      <div class="all" v-show="showMenu">
        <div class="top">
          <i class="el-icon-s-grid"></i>
          <i class="el-icon-search"></i>
        </div>
        <div class="nav">
          <ul>
            <li class="mb-5">Drinks</li>
            <li class="mb-5">Food</li>
            <li class="mb-5">Bakery</li>
          </ul>
        </div>
        <div class="footer">
          <i class="el-icon-s-operation"></i>
        </div>
      </div>
    </transition>
    <img class="menudrawer" @click="showMenu=!showMenu" src="../../../public/images/shot_2.png" alt="" srcset="">
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showMenu:true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navBar{
    height: 100%;
    width: $per-size *130;
    .fade-enter-active {
      animation: animotions .5s ease-out;
    }
    .fade-leave-active {
      animation: animotions .5s ease-in;
    }
    .all{
      height: 100%;
      width: 100%;
      background-color: $baseColor;
      padding: $per-size * 70;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .top{

      };
      .nav{
        li {
          writing-mode: vertical-rl;
          list-style-type: none;
          font-size: 18px;
          font-weight: 100;
        }
      }
    }
    .menudrawer{
      position: fixed;
      top: 32%;
      left: $per-size *130;
      height:  $per-size * 520;
      width: $per-size * 65
    }
    @keyframes animotions {
      0% {
        width: 100%
      }
      25% {
        width: 75%
      }
      50% {
        width: 50%
      }
      75% {
        width: 20%
      }
      100% {
        width: 0
      }
    }
  }
</style>