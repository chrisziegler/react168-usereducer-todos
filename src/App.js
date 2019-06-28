import React, { useReducer, useEffect } from 'react';
import {
  Filter,
  TodoList,
  AddTodo,
  Wrapper,
  Header,
} from './components';
import { filterReducer, todoReducer } from './reducers';
import { TodoContext } from './context/dispatch';
import { useTheme } from './context/ThemeContext';

import './App.css';

const mockTodos = require('./data/mockData.json');
const initialTodos =
  JSON.parse(localStorage.getItem('todos')) || mockTodos;

function App() {
  const themeState = useTheme();
  const [todos, dispatchTodos] = useReducer(
    todoReducer,
    initialTodos,
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL');
  // filteredTodos gets the value of todos from dispatchTodos reducer
  // which has an initial value of initialTodos (localStorage || the mock data)
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

  // dispatchTodos is available to Consumers TodoList & AddTodo
  // via useContext() in those components
  // All components are wrapped with a theme in index.js
  // Wrapper & Header are styled components
  // All other props to children provided via props below
  return (
    <Wrapper>
      <TodoContext.Provider value={dispatchTodos}>
        <Header>
          <nav>
            <span>
              {themeState.dark
                ? 'Switch to Light Theme'
                : 'Switch to Dark Theme'}
            </span>
            <label className="switch">
              <input
                type="checkbox"
                checked={null}
                onChange={() => themeState.toggle()}
              />
              <span className="slider round" />
            </label>
          </nav>
          <Filter dispatch={dispatchFilter} />
          <h1>Todo's</h1>
        </Header>
        <TodoList todos={filteredTodos} />
        <AddTodo />
      </TodoContext.Provider>
    </Wrapper>
  );
}

export default App;
