import logo from "./logo.svg";
import "./App.css";
import { Footer } from "./components/Header";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
function App() {
  return (
    <div className="App">
      <Footer />
      <Header />
      <Welcome />
    </div>
  );
}

export default App;
