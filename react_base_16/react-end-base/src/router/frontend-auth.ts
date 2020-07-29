import React from 'react';
import { Router,Redirect } from 'react-router-dom';

export class FrontendAuth extends React.Component<any>{
  render(){
    const { location,config } = this.props;
    const { pathName } = location;
    const isLogin = sessionStorage.getItem('userInfo');
    const targetPath = config.find((item:any)=>item.path===pathName);
    if(isLogin){
      if(targetPath.auth){
        // return <Router exact path={pathName} />
      }
    }
  }
}