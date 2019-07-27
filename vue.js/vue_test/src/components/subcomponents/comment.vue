<template>
  <div class="containner">
    <div class="name">
      <span>name:</span>
      <input type="text" v-model="name">
    </div>
    <hr>
    <div class="contant">
      <span>contant:</span>
      <textarea cols="30" rows="5" v-model="contant"></textarea>
    </div>
    <button @click="add">提交</button>
  </div>
</template>

<script>
export default {
    props:{
        addcomments:{
            type:Function,
            required:true
        }
    },
    data() {
        return {
            name:'',
            contant:'',
        }
    },
    methods: {
        add(){
           const name = this.name
           const contant = this.contant
           if (!name||!contant) {
             alert('输入错误');
             return  ;
           }
           let comment={
                name,
                contant
           }
           this.addcomments(comment)

           this.name = ""
           this.contant = ""

        }
    },
};
</script>

<style scoped>
.containner{
    width: 48%;
    border: 1px solid #000000;
    padding: 5px 2px;
}
.contant{
    display: flex;
    align-items: baseline;
    justify-content: center;
}
</style>
