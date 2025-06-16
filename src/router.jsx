import { createBrowserRouter } from "react-router";
import Layout from "./Layout";

import Home from "./pages/Home.jsx";

// import Header from './components/header.jsx'
// import Home from './pages/Home.jsx'
// import Footer from './components/footer.jsx'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
          { index: true,
            Element: <Home />
          },
        ]
    }

]);
export default router;