import React,{ useState } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

interface LoginInfo {
  userName:string;
  passWord:string;
}

const Login:React.FC = ({ navigation })=>{
  const [userName,setUserName] = useState("");
  const [passWord,setpassWord] = useState("");
  const login = ()=>{
    const LoginInfo:LoginInfo = {
      userName:userName,
      passWord:passWord
    }
    navigation.navigate('Home')
  };
  
  return (
    <View style={loginStyle.loginContainer}>
      <Text style={loginStyle.loginTitle}>All For You</Text>
      <TextInput style={loginStyle.loginInput} placeholder="请输入用户名" clearButtonMode= 'while-editing' onChangeText={text => setUserName(text)} placeholderTextColor="rgba(27, 31, 35, 0.05);"></TextInput>
      <TextInput style={loginStyle.loginInput} placeholder="请输入密码" clearButtonMode= 'while-editing' onChangeText={text => setpassWord(text)} placeholderTextColor="rgba(27, 31, 35, 0.05);"></TextInput>
      <Text style={loginStyle.loginButton} onPress={()=>{login()}}>登 陆</Text>
    </View>
  ) 
}

const loginStyle = StyleSheet.create({
  loginContainer:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTitle:{
    fontSize:18,
    fontWeight:"400",
    textAlign:"center",
    marginBottom:20
  },
  loginInput:{
    borderStyle:'solid',
    borderColor:'#e8e5e5',
    borderRadius:5,
    borderWidth:1,
    height:30,
    width:200,
    marginBottom:10
  },
  loginButton:{
    borderWidth:1,
    borderRadius:5,
    marginTop:20,
    borderStyle:'solid',
    borderColor:'#666666',
    height:30,
    width:200,
    textAlign:"center",
    lineHeight:30,
    fontSize:16
  }
})

export default Login;