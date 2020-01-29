import React from 'react';

export default function Task({id1, state, onArchiveTask, onPinTask }) {
  return (
    <div>
      {id1},{state}
    </div>
  );
}
