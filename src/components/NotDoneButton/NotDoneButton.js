import './NotDoneButton.css';
import React from 'react';

function NotDoneButton({onClick}) {
    return (
      <button className='NotButtonDone' onClick={onClick}>
         Не Сделано!
      </button>
    );
  }
  export default NotDoneButton;