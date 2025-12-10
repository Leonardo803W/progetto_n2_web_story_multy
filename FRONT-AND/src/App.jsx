import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SchermataHome from './Components/SchermataHome';
import SchermataCreazione from "./Components/SchermataCreazione";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SchermataHome/>} />
        <Route path="/Creazione" element={<SchermataCreazione/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;