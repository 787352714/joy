<template>
<div class="login">
  <div class="loginStart">
    {{userInfo}}
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
import Cookie from 'js-cookie';
import {mapState} from 'vuex';
  export default {
    data() {
      return {
        form: {
          userCount:'',
          password:''
        }
      }
    },
    mounted(){
      console.log('object :', this.userInfo);
    },
    methods:{
      onSubmit(){
        userLogin(this.form).then(res=>{
          if(res.status===1){
            Cookie.set('access_token',res.data.token);
            let userInfo = {
              id: res.data.id,
              name: res.data.name,
              roles: res.data.roles
            }
            Cookie.set('user_info',userInfo);
            this.$router.push({name:'home'})
          }
        })
      }
    },
    computed:{
      ...mapState({
        userInfo: state=> state.user.userInfo
      })
    }
  }
</script>

<style lang="scss" scoped>
  
</style>