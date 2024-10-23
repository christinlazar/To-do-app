import React, { useEffect, useReducer, useState } from "react";
// it accepts two arguments,previous  state and action from dispatch 
import FirstReducer from "../Reducers/FirstReducer";
// function valueReducer(prevState,action){
//     if(action === 'increment'){
//         return prevState+1
//     }
//     if(action === 'decrement'){
//         return prevState-1
//     }
// }

function Usage(){
    // const [value,setValue] = useState(0)
    // const [value,dispatch] = useReducer(valueReducer,0)
    // const [color,setColor] = useState('white')
    const[state,dispatch] = useReducer(FirstReducer,{value:0,color:''})
    const [boom,setBoom] = useState(false)

    // useEffect(()=>{
    //     setBoom(false)
    //     const id = setTimeout(() => {
    //         setBoom(true)
    //     }, value*1000); 
    //     return ()=>{
    //         clearTimeout(id);
    //     }
    // },[value])

    return(
        <div style={{background:state.color}}>
        <button onClick={()=>{
            dispatch('increment')
        }} >increment</button>
        <p>{state.value}</p>
        <button onClick={()=>{
            dispatch('decrement')
        }} >decrement</button>
         <div>
            <button onClick={()=>{dispatch('green')}}>btn1</button>
            <button onClick={()=>{dispatch('blue')}}>btn2</button>
            <button onClick={()=>{dispatch('white')}}>btn3</button>
            </div>
            {/* <div>
                {
                boom  && value ? <p>boo000000m</p> : null
                }
              
            </div> */}
        
        </div>  
    )
}

export default Usage;