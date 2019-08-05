import { instance } from './axios';

let STATUS_Ok = 200;
export function get(url){
  return function(params,config){
    return instance.get(url,{
      ...config,
      params
    }).then(res=>{
      const {data,status} = res;
      if(status===STATUS_Ok){
        return data;
      }else{
        return Promise.reject(res);
      }
    }).catch(err=>Promise.reject(err))
  }
}