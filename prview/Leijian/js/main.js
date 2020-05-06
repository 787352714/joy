// 请求数据,封装成promise便于后续处理


const getGoodsList = function (page) {
  return new Promise((resolve,reject)=>{
    const xhrReq = new XMLHttpRequest();
    xhrReq.open('POST','http://47.95.148.78/neckpets/getBlindBoxSeriesLitByTabType.json',true);
    xhrReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    xhrReq.send(`requestData={userToken:1,pageNumber:${page}}`);
    xhrReq.onreadystatechange=()=>{
      if(xhrReq.readyState===4){
        if(xhrReq.status===200) {
          try {
              var response = JSON.parse(xhrReq.responseText);
              resolve(response);
          } catch (e) {
              reject(e);
          }
        } else {
          reject(new Error(xhrReq.statusText));
        }
      }
    }
  })
}


// 自定义webComponents,便于后续调用

class GoodsList extends HTMLDivElement {
  constructor(){
    super();
    //图片
    this.img = document.createElement('img');
    this.img.classList.add('img');
    //名称
    this.titleDom = document.createElement('p');
    this.titleDom.classList.add('title');
    //总数
    this.countDom = document.createElement('span');
    this.countDom.classList.add('count');
    //价格
    this.priceDom = document.createElement('span');
    this.priceDom.classList.add('price');

    //拼装
    this.append( this.img,  this.titleDom,  this.countDom,  this.priceDom);
  }
  connectedCallback(){
    this.img.src = this.getAttribute('imgUrl');
    this.titleDom.innerText = this.getAttribute('title');
    this.countDom.innerText = this.getAttribute('count');
    this.priceDom.innerText = `￥${this.getAttribute('price')}`;
  }
}

window.customElements.define('goods-list', GoodsList, {extends: 'div'});
// 封装生成dom函数
let app = document.getElementById('app');
const creatGoodsList = function (imgUrl="#",title,count,price) {
  let goodsList = document.createElement('div', {is: 'goods-list'});
  goodsList.setAttribute('imgUrl',imgUrl);
  goodsList.setAttribute('title',title);
  goodsList.setAttribute('count',count);
  goodsList.setAttribute('price',price);
  app.appendChild(goodsList);
}

//批量生成goodsList
let page = 0;
const setGoodsView = function(page){
  getGoodsList(page).then(res=>{
    if(res.success){
      if(res.data===null){alert("没有更多了")}else{
        res.data.forEach(item=>{
          creatGoodsList(item.image,item.name,item.description,item.price);
        })
      }
    }
  })
}
window.onload = setGoodsView(page)

//滚动加载
function getScrollTop(){
   let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
　　if(document.body){
　　　　bodyScrollTop = document.body.scrollTop;
　　}
　　if(document.documentElement){
　　　　documentScrollTop = document.documentElement.scrollTop;
　　}
　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
　　return scrollTop;
}
  //文档的总高度
  function getScrollHeight(){
    let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    　　if(document.body){
    　　　　bodyScrollHeight = document.body.scrollHeight;
    　　}
    　　if(document.documentElement){
    　　　　documentScrollHeight = document.documentElement.scrollHeight;
    　　}
    　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    　　return scrollHeight;
  }
  function getWindowHeight(){
    let windowHeight = 0;
    　　if(document.compatMode == "CSS1Compat"){
    　　　　windowHeight = document.documentElement.clientHeight;
    　　}else{
    　　　　windowHeight = document.body.clientHeight;
    　　}
    　　return windowHeight;
    }
  window.onscroll = function(){
  　　if(getScrollTop() + getWindowHeight() == getScrollHeight()){
  　　　 page++;
        setGoodsView(page)
  　　}
  };