import React, { useState, useContext } from 'react';
import uuid from 'uuid/v4';
import { TodoContext } from '../context/dispatch';
import styled from 'styled-components';
// import '../App.css';

const Form = styled('div')`
  width: 75vw;
  max-width: 880px;
  margin: 1rem auto;

  vertical-align: bottom;
  .input-text {
    display: inline-block;
    margin: 0 auto;
    padding: 0.2rem 0 0.2rem 1rem;
    width: calc(100% - 84px);
    vertical-align: bottom;
    font-family: inherit;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.4;
    background-color: ${props => props.theme.input}
    border: 1px solid black;
    border-radius: 0.3rem 0 0 0.3rem;
  }
  .input-text:focus {
    outline: none;
    box-shadow: 1px 2px 2px rgb(0, 0, 0, 0.2);
  }
  .add-button {
    font-size: 12px;
    text-decoration: none;
    color: white;
    width: 84px;
    display: inline-block;
    height: 35px;
    vertical-align: bottom;
    padding: 0.6em 1em;
    border: 0.1em solid #ff6126;
    border-left: none;
    border-radius: 0 0.37em 0.37em 0;
    background: #ff6126;
  }
  .add-button:hover {
    background-color: #FF9D78;
  }
  .add-button:active {
    background-color: #DC3E03;
  }
  @media (max-width: 768px) {
    width: 97vw;
  }
`;

const AddTodo = () => {
  // The Provider wrap in App.js makes sure dispatchTodos is available
  // here we just need to use it, dispatchTodos is the method to use todoReducer
  const dispatch = useContext(TodoContext);
  const [task, setTask] = useState('');

  const handleSubmit = event => {
    if (task) {
      dispatch({
        type: 'ADD_TODO',
        task,
        id: uuid(),
        complete: false,
      });
    }
    setTask('');
    event.preventDefault();
  };

  const handleChange = event => {
    setTask(event.target.value);
  };

  return (
    <Form>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          placeholder="Type Todo Reminder Here"
          onFocus={e => (e.target.placeholder = '')}
          onBlur={e =>
            (e.target.placeholder = 'Type Todo Reminder Here')
          }
          onChange={handleChange}
          className="input-text"
        />
        <button type="submit" className="add-button">
          Add Todo
        </button>
      </form>
    </Form>
  );
};

export default AddTodo;
