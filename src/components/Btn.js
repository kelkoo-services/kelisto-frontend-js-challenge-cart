import React from 'react';

const Btn = ({ children, action }) => {
  return (
    <div className="bg-blue-300 py-2 px-4 cursor-pointer mx-2" onClick={action}>
      {children}
    </div>
  );
}

export default Btn;