import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Routes/HomePage'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header_ from './Routes/Header'
import { Routes,Route,Link } from 'react-router-dom'
import Dashbaoard from './Routes/Dashboard'
import Signup from './Routes/SignupRoute'
import Login from './Routes/LoginRoute'
import Buydata from './Routes/Buydata'
import Buyairtime from './Routes/Butairtime'

 

function App() {
 
  return (
    <div className='main'>
         <Header_/>
     <div className='body'>
<Routes>
<Route path='/' element={<HomePage/>}/>
  <Route path='/dashboard' element={<Dashbaoard/>}/>
  <Route path='/signup' element={<Signup/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='/data' element={<Buydata/>} />
  <Route path='/airtime' element={<Buyairtime/>} />
</Routes>
    
  


     </div>
    </div>
  )
}

export default App
