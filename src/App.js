import React, { useReducer } from 'react';
import {
  Filter,
  TodoList,
  AddTodo,
} from './components';
import {
  filterReducer,
  todoReducer,
} from './reducers';

import './App.css';

const initialTodos = require('./data/mockData.json');

function App() {
  const [todos, dispatchTodos] = useReducer(
    todoReducer,
    initialTodos,
  );
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

  return (
    <div className="App">
      <Filter dispatch={dispatchFilter} />
      <TodoList
        dispatch={dispatchTodos}
        todos={filteredTodos}
      />
      <AddTodo dispatch={dispatchTodos} />
    </div>
  );
}

export default App;
