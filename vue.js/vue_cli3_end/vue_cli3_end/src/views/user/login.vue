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
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        ruleForm: {
          userCount: 'admin',
          passWord: '123456'
        },
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
        this.$message.success('123123')
      }
    },
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