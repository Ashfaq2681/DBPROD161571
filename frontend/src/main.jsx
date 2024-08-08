import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './Context/AuthContext.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GoogleOAuthProvider clientId="">
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    </GoogleOAuthProvider>
  </>,
)
