import { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Login from './Screens/Login'
import MainDashboard from './Screens/MainDashboard';
import SignUp from './Screens/SignUp';
import StudentForm from './Screens/Student/StudentForm';
import StudentList from './Screens/Student/StudentList';




function App() {


  return (
    <>
   
      <Routes>
        <Route path="/" element={<SignUp />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<MainDashboard/>}/>
        <Route path='/dashboard/student-add' element={<StudentForm/>}/>
        <Route path='/dashboard/students-list' element={<StudentList/>}/>


       
      </Routes>

    </>
  )
}

export default App;
