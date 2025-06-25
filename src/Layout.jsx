import Footer from './components/Footer';
import Header from './components/Header';

import './index.css'
import { Outlet } from 'react-router';  



function Layout() {


  return (
    <>
<Header />
<main className="bg-BgSlightGrey  pb-20">
  <Outlet />
</main>

<div className="hidden md:block">
  <Footer />
</div>

    </>
  )
}

export default Layout
