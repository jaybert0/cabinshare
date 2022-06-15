import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, NavLink } from "react-router-dom";
import Home from './Components/UI/Home'
import Login from "./Components/Login/Login";

function App() {
  const [user, setUser] = useState([])
  const navigate = useNavigate()

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
