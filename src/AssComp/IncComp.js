
import React, { useState } from 'react'
import './IncComp.css'
import IncValue from './IncValue'
import Btn1 from './Btn1'
import Btn2 from './Btn2'
export default function IncComp() {
  const[value,setValue] = useState(0)
  return (
    <div>

      <IncValue value={value}/>

    <div className='num'>
    <Btn1 setValue={setValue} value={value}/>
    <Btn2 setValue={setValue} value={value}/>
    </div>
    </div>
   
    
  )
}
