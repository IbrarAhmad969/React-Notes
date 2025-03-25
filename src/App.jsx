import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import NotesProvider from "./context/NotesProvider.jsx";
import { User, LogOut } from "lucide-react";
import { useState } from "react";

function App() {
  const navigate = useNavigate();

 
  return (
      <NotesProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </NotesProvider>
  );
}

export default App;
