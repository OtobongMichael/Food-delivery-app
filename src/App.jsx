

import React from 'react'
import SignUp from './Component/SignUp'
import Login from "./Component/Login"
import Sidebar from "./Component/Sidebar"




export default function App() {
  return (
    <div>
      <SignUp />
      <Login />
      <div>
        <Sidebar/>
      </div>
     
    </div>
  )
}



