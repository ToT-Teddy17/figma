import logo from "./logo.svg";
import "./App.css";
import { useContext } from "react";
import List from "./component/List";
import { ImageContext } from "./context/ImageContext";
import Stopwatch from "./component/Stopwatch";
import InputFocus from "./component/InputFocus";
import VideoPlayer from "./component/VideoPlayer";

function App() {
  const [isLarge, setIsLarge, imageSize] = useContext(ImageContext);

  return (
    <div className="App">
      {/* <Stopwatch /> */}
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
      <InputFocus />
      <VideoPlayer />

      {/* <List /> */}
    </div>
  );
}

export default App;
