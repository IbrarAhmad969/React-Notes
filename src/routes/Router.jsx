import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <SignUp/>
    },
    {
        path: "/dashboard",
        element: <Dashboard/>
    }
])

export default function AppRouter(){
    return <RouterProvider router={router}/>
}