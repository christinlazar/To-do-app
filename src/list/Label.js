import React from 'react';
import { useContext } from 'react';
import { Context1 } from './List';
// class Label extends React.Component{


//     render(){
    function Label(props){
        // const props = this.props;
        
        const val = useContext(Context1)

        const style = props.isActive ? {background:'green'} : {background:'orange'}

        if(val==false){
            return null;
        }
        return (<div> <span onClick={()=>{
            props.OnAction(props.isActive ? 'active' : 'non-active')
        }} 
         style = {style}>

            {props.isActive ? 'Active' : 'Non-Active'}

            </span>

     
        </div>)
    }
    
        
//     }
// }

export default Label;