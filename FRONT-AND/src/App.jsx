import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SchermataHome from './Components/schermate/SchermataHome';
import SchermataBattaglie from "./Components/schermate/SchermataBattaglie";
import SchermataEpoche from "./Components/schermate/SchermataEpoche";
import SchermataInvenzioni from "./Components/schermate/SchermataInvenzioni";
import SchermataContinenti from "./Components/schermate/SchermataContinenti";
import SchermataDivulgatori from "./Components/schermate/SchermataDivulgatori";
import CardBattaglia from "./Components/mainBattaglie/CardBattaglia";
//import SchermataCreazione from "./Components/schermate/SchermataCreazione";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SchermataHome/>} />
        <Route path="/Battaglie" element={<SchermataBattaglie/>} />
        <Route path="/Epoche" element={<SchermataEpoche/>} />
        <Route path="/Invenzioni" element={<SchermataInvenzioni/>} />
        <Route path="/Continenti" element={<SchermataContinenti/>} />
        <Route path="/Divulgatori" element={<SchermataDivulgatori/>} />
        <Route path="/battaglie/:id" element={<CardBattaglia />} />
        {/*<Route path="/Creazione" element={<SchermataCreazione/>} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;