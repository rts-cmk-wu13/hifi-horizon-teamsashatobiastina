import { createBrowserRouter } from "react-router-dom";
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
      {
        index: true,
        element: <Home />
      },
      {
        path: "produkter",
        element: <List />
      },
      {
        path: "produkter/:id",
        element: <Detail />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "facts",
        element: <Faq />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "tak",
        element: <Tak />
      },
      {
        path: "*",
        element: <NotFound />
      },
]
    }

]);
export default router;