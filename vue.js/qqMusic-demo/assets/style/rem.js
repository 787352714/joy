function currentType() {
  let mobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
  return mobile?"phone":"pc"
};

function setRem(pWidth,pRem) {
  let html = document.getElementsByTagName('html')[0];
  let clintWidth = document.body.clientWidth||document.documentElement.clientWidth;
  let rem = clintWidth/pWidth*pRem+"px";
  html.style.fontSize = rem;
}

window.onload = function () {
  if(currentType()==="phone"){
    setRem(750,75)
  }
};

window.onresize = function(){
  if(currentType() === 'phone') {
    setRem(750,75)
  }
};