import './start.css'
import Continue from "./Continue";
import React from "react";
import Start from "./Start";
import Something from "./Something";
import { Navigate, Routes, Route } from "react-router-dom";
import { Navbar } from './Navbar';


function App() {
  return (
   <>
   <Navbar />
      <Routes>

        <Route path="/home" element={<Navigate to={"/"} />} />
        <Route path="/" element={<Something />} />
        <Route path="/start" element={<Start />} />
        <Route path="/continue" element={<Continue />} />
      </Routes>
   </>
  );
}

export default App;
