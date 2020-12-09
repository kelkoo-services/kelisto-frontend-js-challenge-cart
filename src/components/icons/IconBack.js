import React from 'react';

const IconBack = ({ size = 4 }) => {
  return (
    <svg className={`h-${size} w-${size} text-custom-purple`} id="Arrow_bold_left" xmlns="http://www.w3.org/2000/svg" x="0px"
      y="0px" viewBox="0 0 20 20" enableBackground="new 0 0 20 20">
      <path fill="#FFFFFF" d="M10,2.5V6h7v8h-7v3.5L2.5,10L10,2.5z" />
    </svg>
  );
}

export default IconBack;