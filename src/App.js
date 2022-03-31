import "./App.css";
import Homepage from "./components/pages/Homepage";
import { DataStore } from "./DataStore";

function App() {
  return (
    <div className="App">
      <DataStore.Provider>
        <Homepage />
      </DataStore.Provider>
    </div>
  );
}

export default App;
