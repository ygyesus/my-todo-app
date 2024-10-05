import React from 'react'
import TodoCard from './TodoCard'
export default function TodoList({todos, handleEdit, handleDelete}) {



    return (
        <ul className='main'>
            {todos.map((todo, todoIndex)=>{
                return (
                    <TodoCard key={todoIndex} todo={todo} index={todoIndex} handleEdit={handleEdit} handleDelete={handleDelete}/>
                )
            })}
        </ul>
    )
}
