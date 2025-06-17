import Footer from './components/footer';
import Header from './components/header';

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
