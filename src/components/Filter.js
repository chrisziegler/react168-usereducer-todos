import React, { useState } from 'react';
import '../App.css';

const Filter = ({ dispatch }) => {
  const [filter, setFilter] = useState('show-all');
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
    <div className="controls">
      <button
        type="button"
        onClick={handleShowAll}
        className={filter === 'show-all' ? 'filter-on' : 'filter-off'}
      >
        Show All
      </button>
      <button
        type="button"
        onClick={handleShowComplete}
        className={
          filter === 'show-complete' ? 'filter-on' : 'filter-off'
        }
      >
        Show Complete
      </button>
      <button
        type="button"
        onClick={handleShowIncomplete}
        className={
          filter === 'show-incomplete' ? 'filter-on' : 'filter-off'
        }
      >
        Show Incomplete
      </button>
    </div>
  );
};

export default Filter;
