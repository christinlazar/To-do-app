

import React from 'react'
import { useState } from 'react'
import Alert from '@mui/material/Alert';
import { Stack } from '@mui/material';

export default function ToDos() {
   const[toDo,setToDo] = useState('')
   const[toDos,setToDos] = useState([])
   const[showAlert,setAlert] = useState(false)
   const[fillAlert,setFillAlert] = useState(false)
 
  
  return (
 
        <div>
            <div>
                {
                    showAlert && (
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            {
                               <Alert severity="error">Cant add same to do to the list</Alert>
                            }
                        </Stack>
                    )
                }
            </div>
            <div>
                {
                    fillAlert && (
                        <Stack sx={{ width: '100%' }} spacing={2}>
                        {
                           <Alert severity="error">to-do cant be empty</Alert>
                        }
                    </Stack>
                    )
                }
            </div>
            <div className='inputDiv'>
      
      <div className='comp'>
          <h1>Task's completed</h1>
          {
             toDos.map((el)=>{
              if(el.status == true){
                  return (
                      <p>{el.value}</p>
                  )
              }
             })
          }
              </div>
                  <div className='components'>
                  <input value={toDo} onChange={(e)=>setToDo(e.target.value)} className='input' placeholder='Type your things to do'></input>
                  <button onClick={()=>{
                      let same = false
                      toDos.forEach((elem)=>{
                          if(elem.value == toDo){
                           same = true
                          }
                      })
                      if(!same && toDo.length>0){
                          setToDos([...toDos,{id:Date.now(),value:toDo,status:false}])
                          setToDo('') 
                      }else if(toDo.length==0){
                        setFillAlert(true)
                        setTimeout(() => {
                            setFillAlert(false)
                            
                            },3000);
                      }else{
                        setAlert(true) 
                        setToDo('') 
                        setTimeout(() => {
                            setAlert(false)
                            },3000);
                      }
                      }} className='btn' >ADD</button>
                  <h2 className='heading'>Task's to_do</h2>
                           <div className='todoDiv'>
                                      {
                                          toDos.map((todo)=>{
                                          
                                          return(
                                              
                                              <div className='todoDiv2'> 
                                                  <input className='inp' checked={todo.status} onChange={(e)=>{
                                                    setToDos(toDos.map((obj)=>{
                                                     if(obj.id == todo.id){
                                                       obj.status = e.target.checked
                                                     }
                                                     console.log(obj)
                                                     return obj
                                                    }))
                                                  }}  type='checkbox'></input>
                                                  <span className='todo'>{todo.value}</span>
                                                 <i onClick={()=>{
                                                  setToDos(toDos.filter((el)=>{
                                                      if(el.id !== todo.id){
                                                       return {el}
                                                      }
                                                  }))
                                                 }} 
                                                 className="fa-solid fa-trash"></i>
                                              
                                                  {/* <i class="fa-solid fa-pen-to-square"></i> */}
                                              </div>
                                          ) 
                                          
                                          })
                                      }
                          </div>
              </div>
              <div className='pend'>
                      <h1>Task's pendings</h1>
                      {
             toDos.map((el)=>{
              if(el.status == false){
                  return (
                      <p>{el.value}</p>
                  )
              }
             })
          }
          </div>
         
    </div>
        </div>
      
  )
}
