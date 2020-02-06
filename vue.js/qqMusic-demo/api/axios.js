import axios from "axios";
//开发模式
//console.log('process.env.NODE_ENV :', process.env.NODE_ENV);
//console.log('Vue.prototype.$route :', Vue.prototype.$route);
//console.log('context :', context);
let baseUrl = process.env.NODE_ENV==='development'?'/url':'/';

export const apiInstance = axios.create({
  baseURL:baseUrl,
  timeout: 20000,
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  },
});
export default ({app,store,redirect})=>{
  apiInstance.interceptors.request.use(config=>{
    const token = localStorage.getItem('access_token')||null;
    if(token!==null){
      apiInstance.defaults.headers.common['Authorization'] = token;
    }else{
      redirect('/user/signIn')
      //console.log(app)
    }
    return config
  },
  error=>{
    console.error(error);
    return Promise.reject(error)
  }
  );
  
  apiInstance.interceptors.response.use(response=>response, error=>{
    if(error.response) {
      switch (error.response.status) {
        case 401:
          localStorage.remove('access_token');
          localStorage.remove('userInfo');
          redirect('/user/signIn');
          console.log('身份过期，请重新登录')
          break;
          case 404:
            console.log('请求无效');
            break;
          case 504:
            console.log('请求超时');
            break;
        default:
          console.log('请求失败');
          break;
      }
    }
    return Promise.reject(error);
  })
}
