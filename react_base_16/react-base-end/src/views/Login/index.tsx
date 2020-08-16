import React, { FC, useState }  from 'react';
import { Form,Input,Button,Checkbox } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login:FC = ()=>{
  const history = useHistory();
  //以下为演示button的loading作用
  const [loading,setLoading] = useState(false);
  const waitingValidate = ()=>{
    return new Promise((resolve)=>{
      setLoading(true)
      setTimeout(() => {
        resolve()
      }, 1000);
    })
  }
  const onFinish = (success:any) =>{
    waitingValidate().then(()=>{
      setLoading(false)
    })
    sessionStorage.setItem('userInfo','testUser');
    history.push('/home')
  };
  const onFinishFailed = (errorInfo:any) => {
    waitingValidate().then(()=>{
      setLoading(false)
    })
    console.log('Failed:', errorInfo);
  };
  return (
    <div style={loginStyle.loginWrap}>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          hasFeedback
          name="username"
          rules={[{ required: true, message: '请输入你的用户名!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />}  placeholder="请输入用户名" />
        </Form.Item>

        <Form.Item
          label="密码"
          hasFeedback
          name="password"
          rules={[{ required: true, message: '请输入你的用密码!' }]}
        >
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />}  placeholder="请输入密码" />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>记住密码</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" loading={loading} htmlType="submit" style={loginStyle["login-form-button"]}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

const loginStyle = {
  loginWrap:{
    height:'100%',
    display:'flex',
    flex: '1 1 300px',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  'login-form-button':{
    width:'100%'
  }
}
export default Login;