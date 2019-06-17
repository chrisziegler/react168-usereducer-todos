import React, { useContext } from 'react';
import { TodoContext } from '../context/dispatch';
import styled from 'styled-components';

const Item = styled('div')`
  width: 60vw;
  margin: 0 auto;
  padding: 1rem;
  background-color: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.body};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2),
    0 15px 40px rgba(0, 0, 0, 0.05);
  border-radius: 0.4rem;
  span {
    color: ${props => props.theme.body};
    font-size: 0.8rem;
    padding-left: 10px;
    margin-right: 1rem;
  }
  label {
    color: ${props => props.theme.body};
  }
`;

const TodoItem = ({ todo }) => {
  const dispatch = useContext(TodoContext);
  const handleChange = () =>
    dispatch({
      type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
      id: todo.id,
    });
  return (
    <Item>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleChange}
        />
        {todo.task}
      </label>
    </Item>
  );
};

export default TodoItem;
