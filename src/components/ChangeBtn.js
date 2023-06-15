import React from 'react';
import '../App.js';
 
const ChangeBtn = (props) => {
  const { onClick, children, buttonColor } = props;
  return (
    <button
      style={{ backgroundColor: buttonColor }}
      onClick={onClick}
      className='Button'
    >
      {children}
    </button>
  );
};
 
export default ChangeBtn ;
