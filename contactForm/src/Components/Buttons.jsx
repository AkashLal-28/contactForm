import React from "react";
import { MdMessage } from "react-icons/md";

function Buttons({ isOutline, icon, text, ...rest}) {
    //destructuring
    
  return (
    <>
      <button 
      {...rest}
      className={`primary-btn ${isOutline ? 'outline-btn' : 'primary-btn'}`}
      >
        {icon}
        {text}
      </button>
    </>
  );
}

export default Buttons;
