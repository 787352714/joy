import Vue from 'vue';

Vue.directive('my-click',{
  bind(el,binding){
    // eslint-disable-next-line no-console
    el.innerText = binding.value
    el.onclick=()=>{
      // eslint-disable-next-line no-console
      console.log('1 :', 1);
    }
  }
})

Vue.directive('position',{
  bind(el,binding){
    // eslint-disable-next-line no-console
    el.style.position = 'fixed';
    let s = binding.arg
    el.style[s] = binding.value + 'px'
  }
})