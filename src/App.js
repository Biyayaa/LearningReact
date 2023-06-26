import './start.css'
import Continue from "./Continue";
import React from "react";
import Start from "./Start";
import Something from "./Something";
import { Navigate, Routes, Route } from "react-router-dom";
import { Navbar } from './Navbar';
import NotFound from './NotFound';
import Users from './Users';


function App() {
  return (
   <>
   <Navbar />
      <Routes>
        <Route path="/home" element={<Navigate to={"/"} />} />
        <Route path="/" element={<Something />} />
        <Route path="/start" element={<Start />} />
        <Route path="/continue" element={<Continue />} />
        <Route path="/userInfo" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
   </>
  );
}

export default App;
