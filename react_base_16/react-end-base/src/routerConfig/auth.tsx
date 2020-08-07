interface routerAuthConfigModel {
  path:string,
  authName?:string,
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
    authName:'login',
    auth:false
  },
  {
    path:'/home',
    authName:'home',
    auth:true
  },
  {
    path:'/table',
    authName:'table',
    auth:true
  }
]