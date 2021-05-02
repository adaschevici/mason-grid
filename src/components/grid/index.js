import React from "react"; // we need this to make JSX compile
import "./index.css";
import { Tile } from "../tile";

const Grid = ({ tiles }) => {
  const { tiles: data } = tiles;
  return (
    <div className="grid">
      {data.map((tile, idx) => (
        <Tile key={idx} id={idx} {...tile} />
      ))}
    </div>
  );
};

export { Grid };
