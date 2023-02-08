import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import List from "./component/List";

function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  function check(e) {
    setIsLarge({
      ...isLarge,
      id: e.target.check,
    });
  }

  return (
    <div className="App">
      <label>
        Use Large Images
        <input type="checkbox" onChange={check}></input>
      </label>

      <List imageSize={imageSize} />
    </div>
  );
}

export default App;
