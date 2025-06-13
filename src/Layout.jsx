
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
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
