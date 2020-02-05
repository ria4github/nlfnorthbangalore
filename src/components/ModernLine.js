import React from "react";

const ModernLine = ({ invert }) => {
  return (
    <span className={`modernLine ${invert ? "invert" : " "}`}>
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </span>
  );
};

export default ModernLine;
