import React, { useState, useEffect } from 'react';

const useMouseMove = ()=>{
  const [position,setPostion] = useState({x:0,y:0});
  useEffect(()=>{
    const positionMouse = (e:MouseEvent)=>{
      setPostion({x:e.clientX,y:e.clientY})
    }
    document.addEventListener('mousemove',positionMouse);
    return ()=>{
      document.removeEventListener('mousemove',positionMouse)
    }
  },[])
  return position
}
export default useMouseMove;