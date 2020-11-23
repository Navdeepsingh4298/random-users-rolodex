import React from 'react';
import './setno.styles.css';

export default function SetNo({ placeholder, handleSetNo }) {
  return (
    <div>
      <input className="set"
        type="number" min="1" max="5"
        placeholder={placeholder}
        onChange={handleSetNo} />
    </div>
  )
}
