import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SchermataHome from './Components/SchermataHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SchermataHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;