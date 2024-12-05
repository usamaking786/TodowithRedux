import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {addTodo,editToggle,updateTodo} from "../features/todo/todoSlice"

function Addtodo() {
  const [input,setInput] =useState("")
  const dispatch = useDispatch();
  const todos = useSelector(state=> state.todos)

  
  const addHandler = (e)=>{
    e.preventDefault();
    // Find that which todo edit is true for being editable
    const todoEdited = todos.find((todo)=>todo.edit);
    console.log(todoEdited)
    if(todoEdited){
      // Update Todo
      dispatch(updateTodo({id:todoEdited.id, text:input}))
      // Change the Edit button to add
      dispatch(editToggle(todoEdited.id))
    }else
    {
      dispatch(addTodo(input))
    }
   
    setInput("");
  }
  
  useEffect(()=>{
    const todoEdited = todos.find((todo)=>todo.edit);
    if(todoEdited){
      setInput(todoEdited.text);
    }
  },[todos])

  return (
    
    <div className='w-full mt-14'>
      <form onSubmit={addHandler} className="flex">
      <input type="text"
      className='w-full border border-gray-300 p-3 rounded-l-lg'
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      />
      <button
      type='submit'
      className='bg-blue-500 text-white p-3 rounded-r-lg'
      >
         {todos.some((todo) => todo.edit) ? "Update" : "Add"}
      </button>
      </form>
    </div>
    
  )
}

export default Addtodo