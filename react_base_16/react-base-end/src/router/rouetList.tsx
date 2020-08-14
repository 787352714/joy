//通用
export const routerList = {
  Login:()=>import(/* webpackChunkName: "login" */ '../views/Login/index'),
  NoMatch:()=>import(/* webpackChunkName: "NoMatch" */ '../views/noMatch/noMatch'),
  Home:()=>import(/* webpackChunkName: "Home" */ '../views/home/index'),
  Table:()=>import(/* webpackChunkName: "Table" */ '../views/table/index'),
}