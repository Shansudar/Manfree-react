import logo from "./logo.svg";
import "./App.css";
import { TypeOne, TypeThree, TypeTwo } from "./components/Conditional";
import Intro from "./components/Hooks/Intro";
import StateHook from "./components/Hooks/StateHook";
import LifeCycle from "./components/Hooks/LifeCycle";
import { useState } from "react";
import Users from "./components/Hooks/Users";
function App() {
  const [on, setOn] = useState(true);
  return (
    <div className="App">
     <Users/>
    </div>
  );
}

export default App;
