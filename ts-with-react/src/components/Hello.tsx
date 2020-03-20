import React, { Fragment } from 'react';

interface IhelloWorld {
  message:string
}
const Hello:React.FC<IhelloWorld> = props=>{
  return (<Fragment>
    <h2>{props.message}</h2>
  </Fragment>)
}
Hello.defaultProps={
  message:"hello world"
}

export default Hello;