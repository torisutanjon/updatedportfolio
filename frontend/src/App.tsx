//dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import LandingPage from './Pages/LandingPage';

//styles
import './App.css';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;





