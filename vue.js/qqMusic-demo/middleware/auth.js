export default function({store,error}){
  let loginType = !!Object.keys(store.state.userInfo).length;
  if(!loginType){
    return
  }else{
    console.log('object :', store.state.userInfo.userInfo.roles);
    if(store.state.userInfo.userInfo.roles[0]!=='admin'){
      error({statusCode:500,message:'没有权限'})
    }
  }
}