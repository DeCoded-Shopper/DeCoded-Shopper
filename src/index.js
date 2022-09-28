import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles.css"
import {BrowserRouter as Router} from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <AuthProvider>
    <Router>
      <App />
    </Router>
    </AuthProvider>
    
  </React.StrictMode>
)