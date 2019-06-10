import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components';
import { Filter, TodoList, AddTodo } from './components';
import { filterReducer, todoReducer } from './reducers';
import { TodoContext } from './context/dispatch';
import { useTheme } from './context/ThemeContext';

import './App.css';

const mockTodos = require('./data/mockData.json');
const initialTodos =
  JSON.parse(localStorage.getItem('todos')) || mockTodos;

const Wrapper = styled('div')`
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  padding-top: 3rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen';
  h1,
  h2,
  h3,
  h4 {
    color: ${props => props.theme.body};
    font-size: 1.4rem;
    font-weight: 400;
    text-align: center;
  }
`;

const Container = styled('div')`
  width: 60vw;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid ${props => props.theme.body};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2),
    0 15px 40px rgba(0, 0, 0, 0.05);
  span {
    color: ${props => props.theme.body};
    padding-left: 10px;
    margin-right: 1rem;
  }
  label {
    color: ${props => props.theme.body};
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  form {
    margin-top: 1rem;
  }
`;

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
    <Wrapper>
      <TodoContext.Provider value={dispatchTodos}>
        <Container>
          <span>
            {themeState.dark
              ? 'Switch to Light Mode'
              : 'Switch to Dark Mode'}
          </span>
          <label className="switch">
            <input
              type="checkbox"
              checked={null}
              onChange={() => themeState.toggle()}
            />
            <span class="slider round" />
          </label>
          <Filter dispatch={dispatchFilter} />
          <TodoList todos={filteredTodos} />
          <AddTodo />
        </Container>
      </TodoContext.Provider>
    </Wrapper>
  );
}

export default App;
