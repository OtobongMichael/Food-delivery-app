import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index.jsx'
import { CustomContextProvider } from './hooks/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomContextProvider>
    <RouterProvider router={router} />
    </CustomContextProvider>
  </React.StrictMode>,
)
