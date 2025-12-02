import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SmoothScrolling from './hooks/SmoothScrolling.jsx'
import { BrowserRouter } from 'react-router-dom'
import Loader from './components/Loader.jsx'
import Cursor from './components/Cursor.jsx'
import Chilliman from './components/ChilliMan.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScrolling>
      <BrowserRouter>
      <Loader/>
      <Cursor/>
      <Chilliman/>

      <Header/>
    <App/>
    <Footer/>
      </BrowserRouter>
    </SmoothScrolling>
  
  </StrictMode>,
)
