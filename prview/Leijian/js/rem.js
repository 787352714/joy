
function getRem(pWidth,pRem){
  let html = document.getElementsByTagName('html')[0];
  let viewWidth = document.body.clientWidth || document.documentElement.clientWidth;
  let fontSize = viewWidth/pWidth*pRem + 'px';
  html.style.fontSize = fontSize;
}

// setRem
setRem= function(){
  getRem(100,10)
}
window.onload = setRem();
window.onresize = setRem;