import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import LoginProvider from "./context/LoginProvider.jsx";
import LoginContext from "./context/LoginContext.js";
createRoot(document.getElementById('root')).render(
  <StrictMode>
<LoginProvider>
    <App />
</LoginProvider>

  </StrictMode>,
)
