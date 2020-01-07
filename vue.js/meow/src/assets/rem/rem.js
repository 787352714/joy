function currentClient(){
  let mobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  return mobile ? 'phone' : 'pc';
}

window.onload = function(){
  /*720代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;100代表换算比例，这里写100是
    为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等*/
  if(currentClient() === 'phone') {
    getRem(750,75)      
  }
};
window.onresize = function(){
  if(currentClient() === 'phone') {
    getRem(750,75)
  }
};

function getRem(pWidth,pRem){
  let html = document.getElementsByTagName('html')[0];
  let viewWidth = document.body.clientWidth || document.documentElement.clientWidth;
  let fontSize = viewWidth/pWidth*pRem + 'px';
  html.style.fontSize = fontSize;
}
