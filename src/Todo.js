import React from 'react'

function Todo ({ todo, index, completeTodo, removeTodo }) {
  return(
  <div className='todo' style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
    {todo.text}
    <div>
    <button onClick={() => completeTodo(index)} className='todo-button'>✓</button>
    <button onClick={() => removeTodo(index)} className='todo-button'>X</button>
    </div>
  </div>
  )
}

export default Todo;