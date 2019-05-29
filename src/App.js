import React, { useReducer } from 'react';
import { Filter, TodoList, AddTodo } from './components';
import { filterReducer, todoReducer } from './reducers';
import { TodoContext } from './context/dispatch';

import './App.css';

const initialTodos = require('./data/mockData.json');

function App() {
  const [todos, dispatchTodos] = useReducer(
    todoReducer,
    initialTodos,
  );
  const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL');

  // filteredTodos gets the value of todos from dispatchTodos reducer
  // which has an initial value of initialTodos (the mock data)
  // then it looks at the value of filter, which has an initial value of 'ALL'
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
    <TodoContext.Provider value={dispatchTodos}>
      <div className="App">
        <Filter dispatch={dispatchFilter} />
        <TodoList todos={filteredTodos} />
        <AddTodo />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
