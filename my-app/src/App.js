import logo from "./logo.svg";
import "./App.css";
import { TypeOne, TypeThree, TypeTwo } from "./components/Conditional";
import Intro from "./components/Hooks/Intro";
import StateHook from "./components/Hooks/StateHook";
import LifeCycle from "./components/Hooks/LifeCycle";
import { useState } from "react";
import Users from "./components/Hooks/Users";
import Mutation from "./components/Hooks/Mutation";
function App() {
  const [on, setOn] = useState(true);
  return (
    <div className="App">
     <Mutation/>
    </div>
  );
}

export default App;
