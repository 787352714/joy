import React, { useState } from 'react';
import classNames from 'classnames'

export enum AlertType {
  Primary = 'primary',
  Default = 'defualt',
  Danger = 'danger',
  Warning = 'warning'
}

export interface AlertProps {
  className?:string;
  title: string;
  description?: string;
  type?: AlertType;
  onClose?:()=>void;
  closeable?:boolean
}

const Alert:React.FC<AlertProps> = (props)=>{
  const {title,description,type,onClose,closeable,className} = props;
  const classes = classNames('alert',className,{
    [`alert-${type}`]:type
  })
  const [flag,setFlag] = useState(true);
  const closeAlert = (callBack:AlertProps["onClose"])=>{
    setFlag(!flag);
    if(callBack){
      callBack()
    }
  }
  return (
      flag?
        <div className={classes}>
          <div>
            <span className={description?'bold-title':''}>{title}</span>
            {closeable?<span className="alert-close" onClick={()=>closeAlert(onClose)}>关闭</span>:<></>}
          </div>
          <div className="alert-description">{description}</div>
        </div>:
        <></>
  )
}

Alert.defaultProps={
  closeable:true,
  type:AlertType.Default,
}

export default Alert;