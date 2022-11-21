import logo from "./logo.svg";
import "./App.css";
import { TypeOne, TypeThree, TypeTwo } from "./components/Conditional";
import Intro from "./components/Hooks/Intro";
function App() {
  return (
    <div className="App">
      <Intro name="manfree" age={30} course="web dev" />
    </div>
  );
}

export default App;
