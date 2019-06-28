import React, { useState, useContext } from 'react';
import uuid from 'uuid/v4';
import { TodoContext } from '../context/dispatch';
import Form from './AddTodoStyles';

const AddTodo = () => {
  // The Provider wrap in App.js makes sure dispatchTodos is available to consume
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
