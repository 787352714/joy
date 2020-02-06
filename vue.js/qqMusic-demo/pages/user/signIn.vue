<template>
  <div class="singIn">
    <div class="container">
      <el-form :model="form" ref="form" label-width="0px">
        <el-form-item>
          <el-input v-model="form.userCount" placeholder="请填写账号名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="请填写密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登陆</el-button>
          <el-button type="primary" @click="toSignUp">注册</el-button>
          <el-checkbox v-model="rememberPassword" label="7天内免登录"></el-checkbox>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { userLogin } from "@/api/users";
  export default {
    data(){
      return {
        form:{
          userCount: '',
          password: ""
        },
        rememberPassword: false
      }
    },
    methods:{
      onSubmit(){
        userLogin(this.form).then((result) => {
          let saveTime = this.rememberPassword?7:1;
          if(result.status===1){
            const { token,...userInfo } = result.data;
            const storageInfo = JSON.stringify(userInfo)
            this.$setTimeLocalStorage('access_token',token,'d',saveTime);
            this.$setTimeLocalStorage('userInfo',storageInfo,'d',saveTime);
            this.$store.commit('userInfo/add',userInfo);
          }
          this.$router.push({
            path:'/home'
          })
        }).catch((err) => {
          console.log('err :', err);
        });
      },
      toSignUp(){
        this.$router.push({
          path:'/user/signUp'
        })
      }
    }
  }
</script>

<style>

</style>