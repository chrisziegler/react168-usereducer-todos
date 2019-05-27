import React, { useState, useReducer } from 'react';
import Filter from './components/Filter';
import initialTodos from './data/mockData';

import './App.css';
import uuid from 'uuid/v4';

const filterReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_ALL':
      return 'ALL';
    case 'SHOW_COMPLETE':
      return 'COMPLETE';
    case 'SHOW_INCOMPLETE':
      return 'INCOMPLETE';
    default:
      throw new Error();
  }
};

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState(initialTodos);
  const [filter, dispatchFilter] = useReducer(
    filterReducer,
    'ALL',
  );

  const filteredTodos = todos.filter(todo => {
    if (filter === 'ALL') {
      return true;
    }
    if (filter === 'COMPLETE' && todo.complete) {
      return true;
    }

    if (filter === 'INCOMPLETE' && !todo.complete) {
      return true;
    }
    return false;
  });

  const handleChangeInput = e => {
    setTask(e.target.value);
  };

  const handleSubmit = e => {
    if (task) {
      setTodos(
        todos.concat({
          id: uuid(),
          task,
          complete: false,
        }),
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
      }),
    );
  };
  return (
    <div className="App">
      <Filter dispatch={dispatchFilter} />
      <h1>Todos</h1>
      <ul>
        {filteredTodos.map(todo => (
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
