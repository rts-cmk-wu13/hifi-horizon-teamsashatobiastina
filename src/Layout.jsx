import Footer from './components/footer';
import Header from './components/header';
import './index.css'
// import Header from './components/Header.jsx'
// import Footer from './components/Footer.jsx'
import Test from './pages/test';
import { Outlet } from 'react-router';  


function Layout() {


  return (
    <>
<Header />
<main>
  <Outlet />
  <Test />
</main>
<Footer />

    </>
  )
}

export default Layout
