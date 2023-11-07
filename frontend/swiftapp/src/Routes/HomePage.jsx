import Alert from 'react-bootstrap/Alert';
import { useState } from 'react'
import Button from 'react-bootstrap/Button'

import BuyAirtime from './Butairtime';
import BuyData from './Buydata';
import {Route,Routes ,Link} from 'react-router-dom'




export default function HomePage() {



    return (<div className='login-container'>


      <p>Home HomePage</p>
      <Link to='/login' >Login</Link>

    </div>)
}
