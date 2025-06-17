import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";


import Home from "./pages/Home.jsx";
import List from "./pages/List.jsx";
import Detail from "./pages/Detail.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Faq from "./pages/Faq.jsx";
import Contact from "./pages/Contact.jsx";
import Tak from "./pages/Tak.jsx";
import NotFound from "./pages/NotFound.jsx";

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