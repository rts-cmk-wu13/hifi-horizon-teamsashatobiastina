import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import Layout from './Layout'
import { RouterProvider } from 'react-router'
import './index.css'
import router from './router'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Layout />
    </BrowserRouter>

    <RouterProvider router={router}/>
  </StrictMode>,
)
