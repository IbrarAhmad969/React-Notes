import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  let router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);


  return (
    <div>
      <SignUp />
    </div>
  );
}

export default App;
