import React, { useContext } from 'react';
import { TodoContext } from '../context/dispatch';
import Checkbox from './Checkbox';
import Item from './TodoItemStyles';

const TodoItem = ({ todo }) => {
  const dispatch = useContext(TodoContext);
  const handleChange = () =>
    dispatch({
      type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
      id: todo.id,
    });
  const handleDeleteTodo = () =>
    dispatch({
      type: 'REMOVE_TODO',
      id: todo.id,
    });
  return (
    <Item>
      <label>
        <Checkbox checked={todo.complete} onChange={handleChange} />
        {todo.task}
      </label>
      <button aria-label="Close" onClick={handleDeleteTodo}>
        X
      </button>
    </Item>
  );
};

export default TodoItem;
