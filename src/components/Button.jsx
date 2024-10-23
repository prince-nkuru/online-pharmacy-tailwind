import React from "react";

function Button({ children, onClick, type = "button" }) { // Default type to "button"
  return (
    <div>
      <button
        type={type} // Set the button type
        className="btn bg-slate-900 text-white font-bold mb-4 py-2 px-4 rounded hover:bg-teal-400"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
