import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Preloader from './components/Preloader/Preloader'
import './index.css'
import './invis.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Preloader/>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)
