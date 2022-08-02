import "./App.css";
import LandingPage from "./Components/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
