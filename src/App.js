import React, { useState, useReducer } from 'react';
import './App.css';
import uuid from 'uuid/v4';

const initialTodos = [
  {
    id: uuid(),
    task: 'Learn React hooks',
    complete: true,
  },
  {
    id: uuid(),
    task: 'Learn postgreSQL',
    complete: false,
  },
  {
    id: uuid(),
    task: 'Learn GraphQL/Apollo Client',
    complete: false,
  },
];

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

  const handleShowAll = () => {
    dispatchFilter({ type: 'SHOW_ALL' });
  };

  const handleShowComplete = () => {
    dispatchFilter({ type: 'SHOW_COMPLETE' });
  };

  const handleShowIncomplete = () => {
    dispatchFilter({ type: 'SHOW_INCOMPLETE' });
  };

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
      <h1>Todos</h1>
      <div className="controls">
        <button type="button" onClick={handleShowAll}>
          Show All
        </button>
        <button
          type="button"
          onClick={handleShowComplete}
        >
          Show Complete
        </button>
        <button
          type="button"
          onClick={handleShowIncomplete}
        >
          Show Incomplete
        </button>
      </div>
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
