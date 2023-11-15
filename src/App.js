import "./App.css";
import ReactMap from "./components/Map/Map";
import esriConfig from "@arcgis/core/config.js";
esriConfig.assetsPath = "./assets";
esriConfig.apiKey =
  "AAPKd82e5b9300814704b1d784951e9e80089r3q0PFiP2qSqfp6XyDQQ89OUeez14TjmfS8rsO6Cy0R82B5jq6VDLsiVlLxNvP9";

function App() {
  return (
    <div className="App">
      <ReactMap />{" "}
    </div>
  );
}

export default App;
