import Login from '../views/Login/index';
import NoMatch from '../views/noMatch/noMatch';


interface routerAuthConfigModel {
  path:string,
  authName?:any,
  auth:boolean
}

interface testAuthListModel {

}
//导出routerAuthConfig，用于路由鉴权
export const routerAuthConfig:routerAuthConfigModel[] = [
  {
    path: '/',
    auth:true
  },
  {
    path: '/login',
    authName:Login,
    auth:false
  },
  {
    path: '/404',
    authName:NoMatch,
    auth:false
  },
  {
    path:'/home',
    authName:'Home',
    auth:true
  },
  {
    path:'/table',
    authName:'Table',
    auth:true
  }
]