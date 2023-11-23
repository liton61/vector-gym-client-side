import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";


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
        ],
    },
]);

export default router;