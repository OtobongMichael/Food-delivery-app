import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index.jsx'
import { CustomContextProvider } from './hooks/Context.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <CustomContextProvider>
    <RouterProvider router={router} />
    </CustomContextProvider>
  </React.StrictMode>,
)
