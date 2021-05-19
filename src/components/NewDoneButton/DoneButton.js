import './DoneButton.css';
import React from 'react';

function DoneButton({onClick}) {
    return (
      <button className='ButtonDone' onClick={onClick}>
        Сделано
      </button>
    );
  }
  export default DoneButton;