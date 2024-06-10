import React from 'react'
import Header from './Header/Header'
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import Home from './Home/Home'
import Overview from './Overview/Overview'
import Visit from './Visit/Visit'
import Halls from './Halls/Halls'
import Programs from './Programs/Programs'
import Virtual from './VirtualTour/Virtual'
import Login from './SignUp/Login.jsx'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import ScrollToTop from './Components/ScrollToTop.jsx'
import Profile from './Profile/Profile.jsx'
import Update from './Profile/Update.jsx'
import PrivateRoute from './Components/PrivateRoute .jsx'
import {AnimatePresence} from 'framer-motion'


function App() {
  const user = localStorage.getItem('username')
  // console.log(user);
  // const location = useLocation()
  return (
    <>
        <Router>
        <Header/>
        <AnimatePresence mode='wait'>
        <ScrollToTop/>
          <Routes>

              <Route index path='/' element={<Home/>}  />
              <Route path='/home' element={<Home/>}  />
              <Route path='/overview' element={<Overview />} />
              <Route path='/visit' element={<Visit />} />
              <Route path='/halls' element={<Halls />} />
              <Route path='/programs_and_events' element={<Programs />} />
              <Route path='/virtual_tour_guide' element={
              <PrivateRoute>
                <Virtual />
              </PrivateRoute>
            }/>  
              <Route path='/register' element={< Login />} />
              <Route path='/login' element={<Login />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/update' element={<Update />} />
            </Routes>
        </AnimatePresence>

          
        </Router>
    </>
  )
}

export default App