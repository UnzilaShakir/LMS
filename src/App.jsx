import { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Login from './Screens/Login'
import MainDashboard from './Screens/MainDashboard';




function App() {


  return (
    <>
   
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<MainDashboard/>}/>
      </Routes>

    </>
  )
}

export default App;
