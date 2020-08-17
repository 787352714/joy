class elementWrapper {
  constructor(type){
    this.root = document.createElement(type)
  }
  setAttribute(key,value){
    this.root.setAttribute(key,value)
  }
  appendChild(component){
    this.root.appendChild(component.root)
  }
}
class textWrapper {
  constructor(type){
    this.root = document.createTextNode(type)
  }
}

export class Component {
  constructor(){
    this.props = Object.create(null);
    this.children = [];
    this._root = null
  }
  setAttribute(key,value){
    this.props[key] = value;
  }
  appendChild(component){
    this.children.push(component)
  }
  get root() {
    if(!this._root){
      this._root = this.render().root;
    }
    console.log('root :>> ', this._root);
    return this._root;
  }
}

export const render = function(component,parentElement){
  parentElement.appendChild(component.root)
}

export const createElement = function (type,attributes,...children) {
  let e;
  if(typeof type === 'string'){
    e = new elementWrapper(type)
  }else{
    e = new type
  }
  if(attributes){
   for (const key in attributes) {
     if (attributes.hasOwnProperty(key)) {
       const element = attributes[key];
       e.setAttribute(key,element)
     }
   }
  }
  const inserChildren = function(children){
    for (const child of children) {
      if(typeof child === 'string'){
        child = new textWrapper(child)
      }
      if(child instanceof Array){
        inserChildren(child)
      }else{
        e.appendChild(child)
      }
    }
  }
  inserChildren(children)

  return e
}