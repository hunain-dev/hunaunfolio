import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Loader from './components/Loader.jsx'
import Cursor from './components/Cursor.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import SmoothScrolling from './hooks/SmoothScrolling.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScrolling>
      <BrowserRouter>
      <Loader/>
      <Cursor/>
      <Header/>
    <App/>
    <Footer/>
      </BrowserRouter>
    </SmoothScrolling>
  
  </StrictMode>,
)
