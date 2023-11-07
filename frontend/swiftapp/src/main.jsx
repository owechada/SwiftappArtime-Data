import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
 import {Route,Routes} from 'react-router-dom'
import './index.css'

import {BrowserRouter} from 'react-router-dom'
const root =ReactDOM.createRoot(document.getElementById('root'))
root.render(
<React.StrictMode>
    <BrowserRouter>
<App/>
</BrowserRouter>
</React.StrictMode>
)