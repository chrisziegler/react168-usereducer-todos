import React, { useContext } from 'react';
import { TodoContext } from '../context/dispatch';
import Checkbox from './Checkbox';
import styled from 'styled-components';

const Item = styled('div')`
  display: flex;
  justify-content: space-between;
  flex-wrap: no-wrap;
  width: 75vw;
  max-width: 880px;
  margin: 0 auto;
  padding: 1rem;
  background-color: ${props => props.theme.background};
  /* border: 1px solid ${props => props.theme.borders}; */
  box-shadow: ${props => props.theme.shadow}; 
  /* border-radius: 0.4rem; */
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
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
  label > input {
    margin-right: 8px;
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
      <div
        style={{
          height: '16px',
          width: '16px',
          border: '1px solid red',
          backgroundColor: 'white',
        }}
      >
        <span
          style={{
            display: 'block',
            fontWeight: 'bold',
            marginLeft: -7,
            marginTop: -2,
            color: 'red',
            cursor: 'pointer',
          }}
          onClick={handleDeleteTodo}
        >
          X
        </span>
      </div>
    </Item>
  );
};

export default TodoItem;
