
export default function TodoInput({newTodo, handleAddClick, handleChange}) {
    return (
        <header>
            <input onChange={handleChange} value={newTodo} placeholder="Enter todo..."/>
            <button onClick={handleAddClick}>Add</button>
        </header>
    )
}