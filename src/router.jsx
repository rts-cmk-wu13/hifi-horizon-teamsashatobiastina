import { createBrowserRouter } from "react-router";
import Layout from "./Layout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, Component: Home },

        ]
    }

]);
export default router;