import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootswatch/dist/lux/bootstrap.min.css";
import "bootswatch/dist/lux/bootstrap.min.css";
import { CarritoProvider } from './context/CarritoContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>

    <CarritoProvider>

    <App />
    </CarritoProvider>
    </AuthProvider>
  </StrictMode>,
)











