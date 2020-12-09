import React from 'react';

const Btn = ({ children, action, type }) => {
  return (
    <div
      className={`${type === 'secondary' ? 'btn btn-secondary' : 'btn btn-primary'} flex items-center justify-center`}
      onClick={action}
    >
      { children}
    </div >
  );
}

export default Btn;