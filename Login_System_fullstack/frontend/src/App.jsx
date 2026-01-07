import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Verify from "./pages/VerifyOtp";
import Home from "./pages/Home";
import Protected from "./components/ProtectedRoute";

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/verify" element={<Verify/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Protected><Home/></Protected>}/>
      </Routes>
    </BrowserRouter>
  );
}
