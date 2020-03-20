import React,{ useState, useEffect } from "react";

const MouseEvent:React.FC = () => {
  const [position,setPosition] = useState({x:0,y:0})
  useEffect(()=>{
    console.log('add effect',position.x)
    const mouseClick = (e:MouseEvent)=>{
      console.log('inner',position.x)
      setPosition({x:e.clientX,y:e.clientY})
    }
    document.addEventListener('click', mouseClick);
    return ()=>{
      console.log('render',position.x)
      document.removeEventListener('click',mouseClick)
    }
    //在effect中添加第二个参数（是一个数组）可以将effect变成一种类似于watch的状态，在状态改变时触发effect，当只是一个空数组时，则其不会有二次渲染
    // eslint-disable-next-line 
  },[])
 return (
  <p>X:{position.x},Y:{position.y}</p>
 )
}

export default MouseEvent;