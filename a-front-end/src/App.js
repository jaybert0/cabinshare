import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, NavLink } from "react-router-dom";
import Home from './Components/UI/Home'
import Login from "./Components/Login/Login";

function App() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogOutClick(){
    fetch("/logout",{
        method: "DELETE"
    }).then((r) => {
        if(r.ok){
            setUser(null);
        }
    });
    // Navigate to home page after logout and clear history
    navigate("/login");
}
// NICE!!! Thanks for setting this up 
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login onLogin={setUser}/>}/>
        <Route path="/" element={<Home handleLogOutClick={handleLogOutClick} user={user}/>}/>
      </Routes>
    </div>
  );
}

export default App;
