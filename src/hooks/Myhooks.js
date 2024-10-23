import { useState } from "react";
function useForInc(){

    const [value,changeValue] = useState(0)
    const [color,changeColor] = useState('white')

   const increment = ()=>{
    changeValue(value+1)
   }

   const colorChange = ()=>{
    changeColor('blue')
   }
   const decrement = ()=>{
    changeValue(value-1)
   }

   return {value,color,increment,decrement,colorChange}
}

export default useForInc