import React from 'react'

export default function Btn2(props) {
    const {setValue,value} = props
  return (
    <button onClick={()=>{
        setValue(value-1)
      }}>-</button>
  )
}
