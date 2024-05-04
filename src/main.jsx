
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Splash from "./screens/Splash.jsx";
import Login from "./screens/Login.jsx";
import Home from "./screens/Home.jsx";
import Table from "./screens/Table.jsx";
import Register from "./screens/Register.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Splash/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/table",
        element: <Table/>
    },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={routes} />
)
