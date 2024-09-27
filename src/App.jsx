import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login'
import Profile from './pages/Profile/Profile'
import Chat from './pages/Chat/Chat'
import { useAuthContext } from './context/AuthContext'
import Counsellors from './pages/counsellors/Counsellors'
import Articles from './pages/Articles/Articles'

function App() {
  const {authUser}  = useAuthContext()

  return (
    <>
      <Routes>
      <Route path='/' element={authUser ? <Home/> : <Navigate to={"/login"}/>}/>
      <Route path='/login' element={<Login/>}/>
        <Route path='/login' element={authUser ? <Home/> : <Navigate to={"/login"}/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/chat' element={authUser ? <Chat/> : <Navigate to={"/login"}/>}/>
        <Route path='/' element={authUser ? <Chat/> : <Navigate to={"/login"}/>}/>
        <Route path='/counsellors' element={authUser ? <Counsellors/> : <Navigate to={"/login"}/>}/>

        <Route path='/articles' element={authUser ? <Articles/> : <Navigate to={"/login"}/>}/>
      </Routes>
    </>
  )
}

export default App
