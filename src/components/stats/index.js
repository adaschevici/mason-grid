import React from "react"; // we need this to make JSX compile
import "./index.css";
import { Tick } from "./tick";
import { Label } from "./label";
import { useSelection } from "../../hooks";

const computeGlobalPercentage = (allTiles, size = "sm") => {
  const smallCount = allTiles.filter((tile) => tile.size === size).length;
  return ((smallCount / allTiles.length) * 100).toFixed(0);
};

const computeSelectionPercentage = (
  selected,
  globalPercentage,
  size = "sm"
) => {
  const selectedCount = selected.filter((tile) => tile.size === size).length;
  const actual =
    selected.length === 0
      ? 0
      : ((selectedCount / selected.length) * 100).toFixed(0);
  const difference =
    selected.length === 0
      ? globalPercentage
      : Math.abs(
          globalPercentage -
            ((selectedCount / selected.length) * 100).toFixed(0)
        );
  return {
    actual: actual,
    difference: difference,
  };
};

const Stats = ({ tiles }) => {
  const { tiles: data } = tiles;
  const [selection, _] = useSelection();
  const globalPercentage = computeGlobalPercentage(data);
  const selectionPercentage = computeSelectionPercentage(
    selection,
    globalPercentage
  );
  return (
    <div className="stats">
      <Label text={`Small target ${globalPercentage}%`} color="black" />
      <Tick percentage={`${globalPercentage}%`} color="black" />
      <div className="ruler"></div>
      <Tick percentage={`${selectionPercentage.actual}%`} color="pink" />
      <Label text={`Actual: ${selectionPercentage.actual}%`} color="pink" />
      <Label
        text={`Difference: ${selectionPercentage.difference}%`}
        color="pink"
      />
    </div>
  );
};

export { Stats };
