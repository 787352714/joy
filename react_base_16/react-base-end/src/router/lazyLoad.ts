import LoadingComponent from '../components/loadingComponents'
import Loadable from 'react-loadable';

//懒加载等待过程显示

export default (loader:any,loading=LoadingComponent) =>{
  return Loadable({
    loader,
    loading
  })
}