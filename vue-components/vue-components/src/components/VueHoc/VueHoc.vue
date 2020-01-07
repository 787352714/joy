<template>
  <div class="VueHoc">
    <childComponents />
  </div>
</template>
<script>
  import hoc from './hoc';
  const childComponents = hoc(childComponents)
  export default {
    components:{
      childComponents
    }
  }
</script>