import React from 'react'
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,

} from "react-router-dom";
import Login from '../Component/Login';
import SignUp from '../Component/SignUp';
import DashboardLayout from '../layout/DashboardLayout';
import Dashboard from '../pages/Dashboard';
import Inventory from '../pages/Inventory';
import MyLists from '../pages/MyLists';
import OrderReports from '../pages/OrderReports';
import Reservations from '../pages/Reservations';

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path:"/signUp",
    element: <SignUp/>,
  },
  {
    path:"/",
    element: <DashboardLayout/>,
    children:[
        {
            path:"/",
            element:<Dashboard/>
        },
        {
            path:"/inventory",
            element:<Inventory/>
        },
        {
            path:"/myLists",
            element:<MyLists/>
        },
        {
            path:"/orderReports",
            element:<OrderReports/>
        },
        {
            path:"/reservations",
            element:<Reservations/>
        },
    ]
  }
]);



