<template>
 <div>
   {{msg}}
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld class="123" v-model="msg" />
 </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted(){
    console.log(this)
  },
  data(){
    return{
      msg:'213123'
    }
  }
}
</script>
