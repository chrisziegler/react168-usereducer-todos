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
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState(initialTodos);

  const handleChangeInput = e => {
    setTask(e.target.value);
  };

  const handleSubmit = e => {
    if (task) {
      setTodos(
        todos.concat({
          id: uuid(),
          task,
          complete: false
        })
      );
    }
    setTask('');
    e.preventDefault();
  };

  const handleChangeCheckbox = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <div className="App">
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() =>
                handleChangeCheckbox(todo.id)
              }
            />
            <label>{todo.task}</label>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={handleChangeInput}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default App;
