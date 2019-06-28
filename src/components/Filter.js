import React, { useState } from 'react';
import '../App.css';

const Filter = ({ dispatch }) => {
  const [filter, setFilter] = useState('show-all');
  // const [ariaPressed, setAriaPressed] = useState([
  //   { 'show-all': true },
  //   { 'show-complete': false},
  //   { 'show-incomplete': false},
  // ]);
  const handleShowAll = () => {
    setFilter('show-all');
    dispatch({ type: 'SHOW_ALL' });
  };

  const handleShowComplete = () => {
    setFilter('show-complete');
    dispatch({ type: 'SHOW_COMPLETE' });
  };

  const handleShowIncomplete = () => {
    setFilter('show-incomplete');
    dispatch({ type: 'SHOW_INCOMPLETE' });
  };

  return (
    <nav
      className="controls"
      aria-label="display all or complete or incomplete todos"
    >
      <button
        type="button"
        aria-pressed={filter === 'show-all'}
        onClick={handleShowAll}
        className={filter === 'show-all' ? 'filter-on' : 'filter-off'}
      >
        Show All
      </button>
      <button
        type="button"
        aria-pressed={filter === 'show-complete'}
        onClick={handleShowComplete}
        className={
          filter === 'show-complete' ? 'filter-on' : 'filter-off'
        }
      >
        Show Complete
      </button>
      <button
        type="button"
        aria-pressed={filter === 'show-incomplete'}
        onClick={handleShowIncomplete}
        className={
          filter === 'show-incomplete' ? 'filter-on' : 'filter-off'
        }
      >
        Show Incomplete
      </button>
    </nav>
  );
};

export default Filter;
