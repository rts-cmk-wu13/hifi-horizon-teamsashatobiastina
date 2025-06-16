import Footer from './components/footer';
import Header from './components/header';
import Button from './components/button';
import './index.css'
// import Header from './components/Header.jsx'
// import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router';  


function Layout() {


  return (
    <>
<Header />
<main>
  <Outlet />
</main>
<Button text="test" bgColor='BtnOrange'/>
<Footer />

    </>
  )
}

export default Layout
