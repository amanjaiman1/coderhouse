import { createBrowserRouter } from "react-router-dom";
import {
    Home, Login, SignUp, AboutUs, Courses,
    Contact, Notes, ONCAMPUS
} from "../pages";
// import PrivateResource from "./PrivateResources";


const routes = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/about_us",
        element: <AboutUs />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/courses",
        element: <Courses />,
    },
    {
        path:"/notes",
        element: <Notes />
    },{
        path: "/onCampus",
        element: <ONCAMPUS />
    }
]);

export default routes;