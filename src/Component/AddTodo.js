import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/TodoSlice/TodoSlice';

function AddTodo() {
  const dispatch =useDispatch();
  const [task, settask] = useState({
    id:Math.random(),
    title:"",
    descrption:"",
    isDone:false,
  });
  return (
    <div className='add-task'>
      <input type='text' placeholder='enter task title' onChange={(e)=> {settask({...task,title:e.target.value})}}/>
      <input type='text' placeholder='enter task description' onChange={(e)=> {settask({...task,description:e.target.value})}}/>
      <button onClick={()=> dispatch(addTask(task))}>Add new task</button>
    </div>
  )
}

export default AddTodo