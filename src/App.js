import "./App.css";
import data from "./data/tiles.json";
import { Grid } from "./components/grid";
import { Stats } from "./components/stats";
import { SelectionProvider } from "./hooks";

function App() {
  return (
    <div className="App">
      <SelectionProvider>
        <Stats tiles={data} />
        <Grid tiles={data} />
      </SelectionProvider>
    </div>
  );
}

export default App;
