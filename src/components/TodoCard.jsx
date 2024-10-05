import React from 'react'

export default function TodoCard({todo, handleEdit, handleDelete, index}) {

    return (
        <li className='todoItem'>
            <p>{todo}</p>
            <div className='actionsContainer'>
                <button>
                    <i className="fa-solid fa-pen-to-square" onClick={()=>{
                        handleEdit(index)
                    }}></i>
                </button>

                <button>
                    <i className='fa-regular fa-trash-can' onClick={()=>{handleDelete(index)}}></i>
                </button>
            </div>
        </li>
    )
}
