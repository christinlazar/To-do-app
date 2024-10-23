import React from 'react'
import './App.css';
import { useState } from 'react';
import ToDos from './ToDoComponent/ToDos';
import IncComp from './AssComp/IncComp';
function App() {

  const[toDos,setToDos] = useState([])
  const[toDo,setToDo]   = useState('')
  const currentDate = new Date();
  const dayOfWeek = currentDate.toLocaleString('en-US', { weekday: 'long' });
  return (
    <div className='mainHead'>
      <ToDos/>
    </div>
  );
}
export default App;
