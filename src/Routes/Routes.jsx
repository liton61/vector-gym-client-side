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
import TrainerDetails from "../pages/Trainer/TrainerDetails";
import TrainerForm from "../pages/Trainer/TrainerForm";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllTrainer from "../Dashboard/AllTrainer";
import AppliedTrainer from "../Dashboard/AppliedTrainer";
import FullBlogs from "../components/Blogs/FullBlogs";


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
                path: "/trainer/:id",
                element: <TrainerDetails></TrainerDetails>
            },
            {
                path: "/trainerForm",
                element: <PrivateRoute><TrainerForm></TrainerForm></PrivateRoute>
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
            },
            {
                path:"/fullBlogs",
                element:<FullBlogs></FullBlogs>
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
            },
            {
                path: "allTrainer",
                element: <AllTrainer></AllTrainer>
            },
            {
                path: "appliedTrainer",
                element: <AppliedTrainer></AppliedTrainer>
            }
        ]
    },
]);

export default router;