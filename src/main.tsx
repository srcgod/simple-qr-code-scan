import { createRoot } from 'react-dom/client'
import {BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.tsx';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Layout/>
  </BrowserRouter>
)
