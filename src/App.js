import './App.css'
import React from 'react'
import { useState } from 'react'

function App() {

  const [newTodo,setNewTodo] = useState('')
  const [listData,setListData] = useState([])

  const addTodo = () =>
  {
    setListData((listData)=>
    {

    const updatedList = [...listData,newTodo]
    return updatedList
    })
    
    setNewTodo('')

  }

  const deleteTodo = (i) =>
  {
    const afterRemove = listData.filter((element,id)=>{
      return (i!==id)
    })

    setListData(afterRemove)

  }


  return (
    <>
    <div className='app'>
      <h1>To-Do List </h1>
    <div className='div'>
      <input type='text' placeholder='Add a new To-Do' value={newTodo} 
       onChange={(e)=>setNewTodo(e.target.value)} />
      <button className='addButton' onClick={addTodo}>Add</button>
    </div>

    <ul>
    {listData.map((data,i)=>{
    return(
      <>
        <li key={i}>
        <input type="checkbox"/>
        <span>{data}</span>
        <button className='deleteButton' onClick={()=>deleteTodo(i)}>Delete</button>
        </li>
      </>
    )
  })}
  </ul>
      
    </div>
    </>
  )
}

export default App
