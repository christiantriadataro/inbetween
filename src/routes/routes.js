import {createBrowserRouter} from "react-router-dom";
// import Login from "../screens/Login";
import Splash from "../screens/Splash";
import Login from "../screens/Login.jsx";
// import Register from "../screens/Register";
// import Home from "../screens/Home";
// import Table from "../screens/Table";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    }
]);

export default routes;

