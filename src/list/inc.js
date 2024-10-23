
import React, { useState } from "react"
import './inc.css'
import useForInc from '../hooks/Myhooks'
function ToIncrement(){

    // const [value,changeValue] = useState(0)
    // const [color,changeColor] = useState('white')
    const {value,color,increment,decrement,colorChange} = useForInc();

    return (
       <div>
          <div style={{background:color}} className="incClass">
            <p className="inc">{value}</p>
            <div onClick={increment} className="btn"> <button>Inc</button></div>
            <div onClick={decrement} className="btn"> <button>dec</button></div>
        </div>
        <button onClick={colorChange} className="incClass2">changeColor</button>
       </div>
      
      
     
    )
}
export default ToIncrement