import printMe from './print.js';
function component() {
  let element = document.createElement('div');
  return import(/*webpackChunkName:"lodash" */ 'lodash').then(({default: _} )=>{
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    let btn = document.createElement('button');
    btn.innerHTML = '点击这里，然后查看 console！';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
  }).catch(error=>{
    console.log('error :>> ', error);
  })
}
console.log('process.env.NODE_ENV :>> ', process.env.NODE_ENV);
component().then(component=>{ 
  document.body.appendChild(component);
}).catch(error=>{
  console.log('error1 :>> ', error);
})