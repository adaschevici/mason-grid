import React from "react"; // we need this to make JSX compile
import "./label.css";

const Label = ({ text, color }) => {
  return <div className={`label-${color}`}>{text}</div>;
};

export { Label };
