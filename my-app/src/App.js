import { useContext } from "react";
import "./App.css";
import Company from "./components/Hooks/Company";
import UserContext, { ContextValue } from "./Context/UserContext";
function App() {
  const { handleChange } = useContext(ContextValue);
  return (
    <UserContext>
      <div className="App">
        <Company />
        <button onClick={() => handleChange("madurai")}>Click</button>
      </div>
    </UserContext>
  );
}

export default App;
