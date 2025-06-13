import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import Layout from './Layout.jsx'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Layout />
    </BrowserRouter>
  </StrictMode>,
)
