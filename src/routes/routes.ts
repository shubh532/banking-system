import { createBrowserRouter } from "react-router";
import Login from "../pages/auth/Login";
import Registration from "../pages/auth/Registration";

const router = createBrowserRouter([
    { path: "/login", Component: Login },
    { path: "/registration", Component: Registration },
]);

export default router;
