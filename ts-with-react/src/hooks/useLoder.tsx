import axios from 'axios';
import { useState, useEffect } from "react";

const useLoder = (url:string,deps:[]=[])=>{
  const [loading,setLoading] = useState(false);
  const [result,setResult] = useState<any>(null);
  useEffect(()=>{
    setLoading(true);
    axios.get(url).then(res=>{
      setLoading(false);
      setResult(res.data);
    })
  },deps)
  return [result,loading]
}
export default useLoder;