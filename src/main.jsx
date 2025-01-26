import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import LoginProvider from "./context/LoginProvider.jsx";
import {BrowserRouter} from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <StrictMode>
<LoginProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
</LoginProvider>

  </StrictMode>,
)
