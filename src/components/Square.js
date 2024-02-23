import React from "react";

const Square = ({ id, value, handleClicked,disabled }) => {
  return (
    <button className={`square ${value==="X"?"xColor":"oColor"}`} onClick={() => handleClicked(id)} disabled={value || disabled} >
      {value}
    </button>
  );
};

export default Square;
