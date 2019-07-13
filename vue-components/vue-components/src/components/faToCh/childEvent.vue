<template>
  <div>
    可以被改变的数据：{{selectValue}}
  <div>你一共切换了{{count}}</div>
  </div>
</template>
<script>
export default {
    name:'childTem',
    props:{
       selectValue:''
    },
    data(){
      return{
        count:0
        
      }
    },
    methods:{
      showValues(){
        this.count++
      }
    },
}
</script>

