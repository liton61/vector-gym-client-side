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
import Subscriber from "../Dashboard/Subscriber";
import TrainerDetails from "../pages/Trainer/TrainerDetails";
import TrainerForm from "../pages/Trainer/TrainerForm";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllTrainer from "../Dashboard/AllTrainer";
import AppliedTrainer from "../Dashboard/AppliedTrainer";
import FullBlogs from "../components/Blogs/FullBlogs";
import ClassDetails from "../pages/Classes/ClassDetails";
import Forum from "../pages/Forum/Forum";
import Booked from "../pages/Booked/Booked";
import AllUsers from "../Dashboard/Allusers";
import Balance from "../Dashboard/Balance";
import ManageSlots from "../TrainerDashboard/ManageSlots";
import ManageMember from "../TrainerDashboard/ManageMember";
import AddNewForum from "../TrainerDashboard/AddNewForum";
import AddNewClass from "../TrainerDashboard/AddNewClass";
import ActivityLog from "../MemberDashboard/ActivityLog";
import RecommendedClasses from "../MemberDashboard/RecommendedClasses";
import Profile from "../MemberDashboard/Profile";


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
                path: "/classes/:id",
                element: <ClassDetails></ClassDetails>
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
                path: "/forum",
                element: <Forum></Forum>
            },
            {
                path: "/fullBlogs",
                element: <FullBlogs></FullBlogs>
            },
            {
                path: "/booked",
                element: <PrivateRoute><Booked></Booked></PrivateRoute>
            }

        ],
    },
    // Admin routes
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
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
            },
            {
                path: "allUsers",
                element: <AllUsers></AllUsers>
            }
            , {
                path: "balance",
                element: <Balance></Balance>
            },
            {
                path: "manageSlots",
                element: <ManageSlots></ManageSlots>
            },
            {
                path: "manageMember",
                element: <ManageMember></ManageMember>
            },
            {
                path: "addNewForum",
                element: <AddNewForum></AddNewForum>
            },
            {
                path: "addNewClass",
                element: <AddNewClass></AddNewClass>
            },
            {
                path: "activityLog",
                element: <ActivityLog></ActivityLog>
            },
            {
                path: "recommendedClasses",
                element: <RecommendedClasses></RecommendedClasses>
            },
            {
                path: "profile",
                element: <Profile></Profile>,
            }
        ]
    },
]);

export default router;