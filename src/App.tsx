import "./App.css";
import Home from "./Component/Home";
import Mcq from "./Component/Mcq";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question/:no" element={<Mcq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
