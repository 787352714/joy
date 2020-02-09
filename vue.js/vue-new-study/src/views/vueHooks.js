// eslint disable useState,useEffect
import { withHooks,useState,useEffect} from "vue-hooks";
import Vue from 'vue';
//构建组件

// const vueHooks = Vue.component('vueHooks',{
//   render: function (createElement) {
//     return createElement('h1', 'this.blogTitle')
//   },
//   withHooks(){
//     const [  ]
//   }
// })
const hooks = withHooks(h=>{
  const [ count,setCount ] = useState(0);
  useEffect(()=>{
    console.log('count :', count);
  })
  console.log('h :', h);
  return (
    <div>
      <div>{count}</div>
      <button onClick={()=>setCount(count+1)}>+1</button>
    </div>
  )
})

const vueHooks = Vue.component('vueHooks',{
  // render: h=> {
  //   return h('h1', [h(hooks)])
  // }
  render:h=>h(hooks)
})

export default vueHooks