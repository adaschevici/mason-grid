import React, { useState, useCallback } from "react"; // we need this to make JSX compile
import "./index.css";
import cx from "classnames";
import { ColorBox } from "./color-box";
import { useSelection } from "../../hooks";

const Tile = (props) => {
  const [selected, setSelected] = useState(false);
  const [selection, setSelection] = useSelection();
  const handleSelect = useCallback(() => {
    setSelected(!selected);
    if (!selected) {
      setSelection([...selection, props]);
    } else {
      const removedSelection = selection.filter(
        (selected) => selected.id !== props.id
      );
      setSelection(removedSelection);
    }
  }, [props, selected, selection, setSelection]);
  return (
    <div
      className={cx("card card-1", {
        selected: selected === true,
      })}
      onClick={handleSelect}
    >
      <ColorBox {...props} />
    </div>
  );
};

export { Tile };
