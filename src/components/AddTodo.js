import React, { useState, useContext } from 'react';
import uuid from 'uuid/v4';
import { TodoContext } from '../context/dispatch';
import '../App.css';

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={handleChange}
        className="Input-text"
      />
      <button type="submit" className="add-button">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
