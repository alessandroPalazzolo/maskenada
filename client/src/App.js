import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import RedirectQR from "./shared/domain/RedirectQR"
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/admin" element={ <Admin /> } />
        <Route path="/redirect" element={ <RedirectQR /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
