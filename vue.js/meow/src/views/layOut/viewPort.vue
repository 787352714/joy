<template>
  <div class="viewPort">
    <NavBar />
    <div class="contain">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import NavBar from './navBar';
  export default {
    components:{
      NavBar
    },
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  .viewPort{
    height: 100%;
    width: 100%;
  }
</style>