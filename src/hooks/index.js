import React, { useMemo, useState, createContext, useContext } from "react";

const SelectionContext = createContext({ selection: [] });

function useSelection() {
  const context = useContext(SelectionContext);

  if (!context) {
    throw new Error(`useCount must be used within a SelectionProvider`);
  }

  return context;
}

function SelectionProvider(props) {
  const [selection, setSelection] = useState([]);

  const value = useMemo(() => [selection, setSelection], [selection]);

  return <SelectionContext.Provider value={value} {...props} />;
}

export { SelectionProvider, useSelection };
