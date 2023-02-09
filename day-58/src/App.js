import logo from "./logo.svg";
import "./App.css";
import { useContext } from "react";
import List from "./component/List";
import { ImageContext } from "./context/ImageContext";
import Stopwatch from "./component/Stopwatch";

function App() {
  const [isLarge, setIsLarge, imageSize] = useContext(ImageContext);

  return (
    <div className="App">
      <Stopwatch />
      {/* <label>
        Use Large Images
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        ></input>
      </label> */}
      <hr />

      {/* <List /> */}
    </div>
  );
}

export default App;
