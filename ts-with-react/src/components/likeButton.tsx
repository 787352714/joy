import React,{ useState, useEffect } from "react";

const LikeButton: React.FC = ()=>{
  const [like,setLike] = useState(0);
  const [trigle,setTrigle] = useState(true);
  useEffect(()=>{
    document.title = `你点击了${like}次`
  })
  return (
    <>
      <button onClick={()=>{setLike(like+1)}}>
        {like}👍
      </button>
      <button onClick={()=>setTrigle(!trigle)}>
        {trigle?"开":"关"}io
      </button>
    </>
  )
}

export default LikeButton;