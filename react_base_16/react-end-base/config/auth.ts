interface routerAuthConfigModel {
  path:string,
  authName?:string,
  auth:boolean
}

interface testAuthListModel {

}
// 虚拟权限表
const testAuthList = {
  'home':true,
  'table':true
}
//导出routerAuthConfig，用于路由鉴权
export const routerAuthConfig:routerAuthConfigModel[] = [
  {
    path: '/',
    auth:true
  },
  {
    path: '/login',
    auth:true
  },
  {
    path:'/home',
    auth:testAuthList['home']
  },
  {
    path:'/table',
    auth:testAuthList['table']
  }
]