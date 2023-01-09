import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ContactView, {
  AddContact,
  SingleContact,
} from "./redux/Features/contact/ContactView";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ContactView />
        <SingleContact />
        <AddContact/>
      </div>
    </BrowserRouter>
  );
}

export default App;
