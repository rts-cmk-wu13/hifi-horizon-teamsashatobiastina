import './index.css'
// import Header from './components/Header.jsx'
// import Footer from './components/Footer.jsx'
import Test from './pages/test';
import { Outlet } from 'react-router';  


function Layout() {


  return (
    <>

<main>
  <Outlet />
  <Test />
</main>

    </>
  )
}

export default Layout
