import logo from "./logo.svg";
import "./App.css";
import { TypeOne, TypeThree, TypeTwo } from "./components/Conditional";
import Intro from "./components/Hooks/Intro";
import StateHook from "./components/Hooks/StateHook";
import LifeCycle from "./components/Hooks/LifeCycle";
import { useState } from "react";
function App() {
  const [on, setOn] = useState(true);
  return (
    <div className="App">
      <div>{on && <LifeCycle />}</div>
      <button onClick={() => setOn(!on)}>Cclick</button>
    </div>
  );
}

export default App;
