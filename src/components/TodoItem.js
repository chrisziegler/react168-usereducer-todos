import React, { useContext } from 'react';
import { TodoContext } from '../context/dispatch';
import styled from 'styled-components';

const Item = styled('div')`
  width: 75vw;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  background-color: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.borders};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04),
    0 1px 2px rgba(0, 0, 0, 0.02);
  border-radius: 0.4rem;
  margin-top: 0.5rem;
  span {
    color: ${props => props.theme.body};
    font-size: 0.8rem;
    padding-left: 10px;
    margin-right: 1rem;
  }
  label {
    color: ${props => props.theme.body};
  }
  @media (max-width: 768px) {
    width: 97vw;
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
