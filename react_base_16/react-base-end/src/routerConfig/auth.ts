import Login from '../views/Login/index';
import NoMatch from '../views/noMatch/noMatch';
import Home from '../views/home/index';



interface routerAuthConfigModel {
  path:string,
  authName?:any,
  auth:boolean,
  layout:boolean
}

interface testAuthListModel {

}
//导出routerAuthConfig，用于路由鉴权
export const routerAuthConfig:routerAuthConfigModel[] = [
  {
    path: '/',
    authName:Home,
    auth:true,
    layout:true
  },
  {
    path: '/login',
    authName:Login,
    auth:false,
    layout:false
  },
  {
    path: '/404',
    authName:NoMatch,
    auth:false,
    layout:false
  },
  {
    path:'/home',
    authName:Home,
    auth:true,
    layout:true
  },
  {
    path:'/table',
    authName:'Table',
    auth:true,
    layout:true
  }
]