<template>
  <div class="directive" v-my-click="'hhhhhh'" v-position:[direction]='200'>
    12312321
  </div>
</template>
<script>
export default {
  data(){
    return {
      direction: 'top'
    }
  }
}
</script>