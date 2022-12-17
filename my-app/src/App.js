import { useState } from "react";
import "./App.css";
import Company from "./components/Hooks/Company";
function App() {
  const [name, setName] = useState("manfree");
  return (
    <div className="App">
      <Company name={name} />
      <button onClick={() => setName("madurai")}>Click</button>
    </div>
  );
}

export default App;
