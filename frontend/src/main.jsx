import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContextjs from './context/UserContextjs.jsx'
import CaptainContext from './context/CapatainContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaptainContext>
    <UserContextjs>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </UserContextjs>
    </CaptainContext>
  </StrictMode>,
)
