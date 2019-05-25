import React, { useState } from 'react';
import './App.css';
import uuid from 'uuid/v4';

const initialTodos = [
  {
    id: uuid(),
    task: 'Learn React hooks',
    complete: true
  },
  {
    id: uuid(),
    task: 'Learn postgreSQL',
    complete: false
  },
  {
    id: uuid(),
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
      setTodos(todos.concat({ id: uuid(), task, complete: false }));
    }
    setTask('');
    event.preventDefault();
  };
  const handleChangeCheckbox = event => {
    // stuff
  };

  return (
    <div className="App">
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.complete} onChange={handleChangeCheckbox} />
              {todo.task}
            </label>
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
