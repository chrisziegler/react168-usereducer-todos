import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ dispatch, todos }) => {
  return (
    <div className="TodoList">
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            dispatch={dispatch}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
