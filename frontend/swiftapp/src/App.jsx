import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Routes/HomePage'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header_ from './Routes/Header'
function App() {
 
  return (
    <div>
         <Header_/>
     <div className='body'>
   
 <HomePage /> 


     </div>
    </div>
  )
}

export default App
