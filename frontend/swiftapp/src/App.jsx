import { useState } from 'react'
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
import Aitools from './Routes/Aitools'
import User_detail from './Routes/User_detail'
import Loader from './utils/loader'
import Topup from './Routes/Topup'
import Tti from './Routes/TtI'
import Aic from './Routes/Aic'

 

function App() {
 

  var [isloading,setisloading]=useState()
  return (
    <div className='main'>
         <Header_/>
     { isloading && <Loader/>}
     <div className='body'>
<Routes>
<Route  path='/' element={
<Login setld={setisloading} />
// <HomePage/> 
}/>
  <Route path='/dashboard' element={<Dashbaoard setld={setisloading}/>}/>
  <Route path='/signup' element={<Signup setld={setisloading} />} />
  <Route path='/login' element={<Login setld={setisloading} />} />
  <Route path='/data' element={<Buydata setld={setisloading} />} />
  <Route path='/airtime' element={<Buyairtime setld={setisloading} />} />
  <Route path='/aitools' element={<Aitools setld={setisloading} />} />

  <Route path='/deposit' element={<Topup setld={setisloading} />} />
  <Route path='/tti' element={<Tti setld={setisloading} />} />
  <Route path='/Aic' element={<Aic setld={setisloading} />} />
  <Route path='/profile' element={<Dashbaoard setld={setisloading}/>} />
</Routes>
    



     </div>
    </div>
  )
}
//fshhfshff
export default App
