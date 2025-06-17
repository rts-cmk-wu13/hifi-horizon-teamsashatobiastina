import Footer from './components/Footer';
import Header from './components/Header';

import './index.css'
import { Outlet } from 'react-router';  



function Layout() {


  return (
    <>
<Header />
<main>
  <Outlet />
</main>

<Footer />

    </>
  )
}

export default Layout
