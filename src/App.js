import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './home'
import Detail from './detail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
