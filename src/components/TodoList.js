import React from 'react';
import TodoItem from './TodoItem';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import './TodoListStyles.css';

const TodoList = ({ todos }) => {
  return (
    <TransitionGroup>
      {todos.map(todo => (
        <CSSTransition key={todo.id} timeout={400} classNames="item">
          <TodoItem key={todo.id} todo={todo} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default TodoList;
