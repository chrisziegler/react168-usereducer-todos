import React, { useReducer, useEffect } from 'react';
import { Filter, TodoList, AddTodo } from './components';
import { filterReducer, todoReducer } from './reducers';
import { TodoContext } from './context/dispatch';

import './App.css';

const mockTodos = require('./data/mockData.json');
const initialTodos =
  JSON.parse(localStorage.getItem('todos')) || mockTodos;

function App() {
  const [todos, dispatchTodos] = useReducer(
    todoReducer,
    initialTodos,
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
