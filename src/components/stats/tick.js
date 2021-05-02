import React from "react"; // we need this to make JSX compile
import "./tick.css";

const Tick = ({ percentage, color }) => {
  return (
    <div
      className={`tick-${color}`}
      style={{ marginLeft: `${percentage}` }}
    ></div>
  );
};

export { Tick };
