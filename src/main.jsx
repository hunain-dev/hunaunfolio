import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SmoothScrolling from './hooks/SmoothScrolling.jsx'
import { BrowserRouter } from 'react-router-dom'
// import Navbar from './Components/Navbar.jsx'
import Chilli from './Components/Chilli.jsx'
import Mousemove from './Components/Mousemove.jsx'
import Footer from './Components/Footer.jsx'
import Header from './Components/Header.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScrolling>
      <BrowserRouter>
      {/* <Loader/> */}
      <Mousemove/>
      <Chilli/>
      {/* <Navbar/> */}
      <Header/>
    <App/>
    <Footer/>
     </BrowserRouter>
    </SmoothScrolling>
  
  </StrictMode>,
)
