import React from "react"; // we need this to make JSX compile
import "./color-box.css";
import { Dot } from "./dot";

const ColorBox = ({ color, size, hasDot }) => {
  return <div className={`base ${size} ${color}`}>{hasDot && <Dot />}</div>;
};

export { ColorBox };
