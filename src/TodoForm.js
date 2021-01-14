import React from 'react'

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }

  return(
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        type='text'
        value={value}
        className='input'
        placeholder='Add to-do item...'
        onChange={e => setValue(e.target.value)} 
      />
    </form>
  )
}

export default TodoForm