export const state = ()=>{
  userInfo:{}
};
export const mutations = {
  add(state,value){
    if(Object.prototype.toString.call(value)==='[object Object]')
    state.userInfo = value;
  }
}