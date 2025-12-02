import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SmoothScrolling from './hooks/SmoothScrolling.jsx'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Loader from './components/Loader.jsx'
import Chilli from './Components/Chilli.jsx'
import Mousemove from './Components/Mousemove.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScrolling>
      <BrowserRouter>
      <Loader/>
      <Mousemove/>
      <Chilli/>

      <Header/>
    <App/>
    <Footer/>
      </BrowserRouter>
    </SmoothScrolling>
  
  </StrictMode>,
)
