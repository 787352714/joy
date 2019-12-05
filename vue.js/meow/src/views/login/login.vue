<template>
<div class="login">
  <div class="loginStart">
    
  </div>
  <el-form :model="form" ref="form" label-width="0">
    <el-form-item >
      <el-input v-model="form.userCount"></el-input>
    </el-form-item>
    <el-form-item >
      <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import { userLogin } from "@api/users";
  export default {
    data() {
      return {
        form: {
          userCount:'',
          password:''
        }
      }
    },
    methods:{
      onSubmit(){
        userLogin(this.form).then(res=>{
          console.log('res :', res);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>