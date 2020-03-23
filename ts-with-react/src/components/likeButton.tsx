import React,{ useState, useEffect, useRef } from "react";
import useMouseMove from "../hooks/useMouseMove";
const LikeButton: React.FC = ()=>{
  const [like,setLike] = useState(0);
  const [trigle,setTrigle] = useState(true);
  const likeCount = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null)
  const positions = useMouseMove()
  useEffect(()=>{
    document.title = `你点击了${like}次`
  },[like]);
  useEffect(()=>{
    setTimeout(() => {
      console.log('likeCount :', likeCount.current);
    }, 3000);
  },[like]);
  useEffect(()=>{
    if(inputRef&&inputRef.current&&like>5){
      inputRef.current.focus();
    }
  })
  return (
    <>
      <input type="text" ref={inputRef} />
      <h2>x:{positions.x},y:{positions.y}</h2>
      <button onClick={()=>{setLike(like+1);likeCount.current++}}>
        {like}👍
      </button>
      <button onClick={()=>setTrigle(!trigle)}>
        {trigle?"开":"关"}io
      </button>
    </>
  )
}

export default LikeButton;