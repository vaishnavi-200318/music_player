import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import App1 from "./App1.js";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";
import {auth} from "./firebase";
import More from "./components/More/More";

function App() {
  const [userName,setUserName]= useState("");
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        setUserName(user.displayName)
      }else setUserName("");
    });
  },[]);

  return <div className="App">
    <Router>
      <Routes>
       <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
<Route path="/" element={<Signup name={userName}/>} />
        <Route path="/app1" element={<App1/>} />
        <Route path="/more" element={<More/>}/>
      </Routes>
    </Router>
  </div>
}

export default App;