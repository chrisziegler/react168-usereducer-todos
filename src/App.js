import React, { useState } from 'react';
import './App.css';

const initialTodos = [
  {
    id: 'a',
    task: 'Learn React hooks',
    complete: true
  },
  {
    id: 'b',
    task: 'Learn postgreSQL',
    complete: false
  },
  {
    id: 'c',
    task: 'Learn GraphQL/Apollo Client',
    complete: false
  }
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [task, setTask] = useState('');

  const handleChangeInput = event => {
    setTask(event.target.value);
  };

  const handleSubmit = event => {
    if (task) {
      // add new todo item
    }
    setTask('');

    event.preventDefault();
  };

  return (
    <div className="App">
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <label>{todo.task}</label>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChangeInput} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default App;
