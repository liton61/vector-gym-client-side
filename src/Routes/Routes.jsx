import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Gallery from "../pages/Gallery/Gallery";
import Classes from "../pages/Classes/Classes";
import Trainer from "../pages/Trainer/Trainer";
import Dashboard from "../Dashboard/Dashboard";
import Community from "../pages/Community/Community";
import Subscriber from "../Dashboard/Subscriber";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/gallery",
                element: <Gallery></Gallery>
            },
            {
                path: "/trainer",
                element: <Trainer></Trainer>
            },
            {
                path: "/classes",
                element: <Classes></Classes>
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/community",
                element: <Community></Community>
            }
        ],
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "subscriber",
                element: <Subscriber></Subscriber>
            }
        ]
    },
]);

export default router;