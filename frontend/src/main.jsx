import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './Context/AuthContext.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="326245047964-6qlavjq4uaa7g9qs28ntln8rkoddh7m4.apps.googleusercontent.com">
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
