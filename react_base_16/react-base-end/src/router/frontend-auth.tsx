import React from 'react';
import { Route,Redirect,useHistory } from 'react-router-dom';
import LayoutPage from '../components/layout/index';
import { routerList } from '../router/rouetList';
import lazyLoad from '../router/lazyLoad'
interface propsModel {
  config:any[],
}
export class FrontendAuth extends React.Component<any&propsModel>{
  render(){
    console.log('object :>> ', this.props);
    const { location,config } = this.props;
    const { pathname } = location;
    const isLogin = !!sessionStorage.getItem('userInfo');
    const targetPath = config.find((item:any)=>item.path===pathname);
    //路径合理且不需要鉴权
    if(targetPath&&!targetPath.auth){
      const { authName,layout } = targetPath;
      return <Route exact={true} path={pathname} component={layout?()=>{
        const history = useHistory()
        return LayoutPage(lazyLoad(routerList[authName]),history)
      }:lazyLoad(routerList[authName])} />
    //登录状态
    }
    if(isLogin){
      if(pathname==='/login'){
        return <Redirect to='/' />
      }else{
        if(targetPath){
          const { authName,layout } = targetPath;
          return <Route exact path={pathname} component={layout?()=>
            {const history = useHistory()
            return LayoutPage(lazyLoad(routerList[authName]),history)}
            :lazyLoad(routerList[authName])} />
        }else{
          return <Redirect to='/404' />
        }
      }
    }else{
      // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
      if(targetPath && targetPath.auth){
        return <Redirect to='/login' />
      }else{
        // 非登陆状态下，路由不合法时，重定向至 404
        return <Redirect to='/404' />
      }
    }
  }
}