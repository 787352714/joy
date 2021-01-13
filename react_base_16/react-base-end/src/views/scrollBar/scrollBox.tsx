import Item from 'antd/lib/list/Item';
import React,{ FC } from 'react';
import VirtualModel from './scrollMoudles';
let  model;
let getData = fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(json => {
    console.log(json)
    model = new VirtualModel({
      data:json,
      itemSize: 10,
      viewHeight: 200,
    })
  })
const ScrollBox:FC = ()=>{
 return <ul className="scrollBox">
   {
     model?model.data.map(item=>{
       return <li className="scrroll-item" key={item.id} style={{'height':10}}>
         {item.url}
       </li>
     }):'loading'
   }
 </ul>
} 
export default ScrollBox;