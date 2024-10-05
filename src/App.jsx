import React from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {

  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  useEffect(()=>{
    let localTodos = localStorage.getItem('todos')
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  const handleAddClick = (event) =>{
    event.preventDefault()
    const newTodos = todos.concat(newTodo)
    setTodos(newTodos)
    persistData(newTodos)
    setNewTodo('')
  }

  function handleDelete(index) {
    const newTodos = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodos)
    setTodos(newTodos)
  }

  function handleEdit(index) {
    setNewTodo(todos[index])
    handleDelete(index)
  }

  const handleChange = (event) => {
    setNewTodo(event.target.value)
  }

  const persistData = (todos) => {
    localStorage.setItem('todos', JSON.stringify({ todos }))
  }

  return (
    <>
      <TodoInput newTodo={newTodo} handleAddClick={handleAddClick} handleChange={handleChange}/>
      <TodoList todos={todos} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </>
  )
}

export default App