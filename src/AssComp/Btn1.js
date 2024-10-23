import React from "react"


export default function Btn1(props) {
   const {setValue,value} = props
  return (  
<button onClick={()=>{
      setValue(value+1)
    }}>+</button>
  )
}
