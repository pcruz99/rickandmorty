import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { View } from "./Components/View";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <h1>The Rick and Moty API</h1>
      </div>
      <div>
        <View/>
      </div>
    </div>
  );
}

export default App;
