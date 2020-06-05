<template>
  <div class="login">
    <div class="form">
      <el-form :model="ruleForm" ref="form" :rules="rules" label-position="left" label-width="0px" class="demo-ruleForm login-container" status-icon>
        <span class="title">系统登录</span>
        <el-form-item prop="userCount">
          <el-input v-model="ruleForm.userCount" placeholder='用户名'></el-input>
        </el-form-item>
        <el-form-item prop="passWord">
          <el-input v-model="ruleForm.passWord" placeholder='密码'></el-input>
        </el-form-item>
        <el-form-item style="width:100%;text-align: center;">
          <el-button style="width:70%;" type="primary" @click="onSubmit">登陆</el-button>
        </el-form-item>
      </el-form>
      <upload :on-change="handleChange" list-type="picture-card">
      </upload>
      <father>
        <son :user="user"></son>
      </father>
    </div>
  </div>
</template>
<script>
import upload from "@components/upload/upload.vue";
import son from '@components/upload/son.vue';
import father from '@components/upload/father.vue';
  export default {
    data(){
      return {
        ruleForm: {
          userCount: 'admin',
          passWord: '123456'
        },
        user:'123',
        rules: {
          userCount: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          passWord: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        },
      }
    },
    methods: {
      onSubmit(){
        this.$previewImage('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584015088583&di=2a998f83f5039c10f258b640d6ed9dcf&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F68%2F61%2F300000839764127060614318218_950.jpg')
        this.$message.success('123123')
      },
      handleChange(file, fileList) {
        console.log('fileList :', fileList);
      }
    },
    components:{
      upload:upload,
      father:father,
      son:son,
    }
  }
</script>

<style lang="scss" scoped>
  .login{
    height: 100%;
    display: flex;
    justify-items: center;
    .form{
      margin: auto;
      width: 25%;
      height: 70%;
      background-color: #ffffff;
      padding: 10px 20px;
      //box-shadow: 
        .title{
        text-align: center;
        display: inline-block;
        width: 100%;
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
</style>