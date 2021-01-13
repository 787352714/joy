<template>
 <div>
    <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <input type="text" @change="changeMsg">
  <p>Edit <code>components/{{msg}}.vue</code> to test hot module replacement.</p>
 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    changeMsg(val,newval){
      console.log(newval)
      this.$emit("update:msg",val.type)
    }
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
