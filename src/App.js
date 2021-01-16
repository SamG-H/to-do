import React, { useState } from 'react'
import './App.css'
import Todo from './Todo'
import TodoForm from './TodoForm'
import Counter from './Counter'
import Spell from './Spell'
import Timer from './Timer'

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Make cookies',
      isCompleted: false
    },
    {
      text: 'Eat cookies',
      isCompleted: false
    },
    {
      text: 'Become Cookie Monster',
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    setTodos([...todos, {
      text: text,
      isCompleted: false
    }]);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return(
    <div className='app'>
      <h1 className='title'>To-do List</h1>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo 
            todo={todo}
            index={index}
            key={index}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
      <Counter />
      <Timer />
      <Spell />
    </div>
  )
}

export default App

