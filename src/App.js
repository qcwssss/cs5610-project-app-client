import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Travello from "./travello/index";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/*" element={<Travello />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
