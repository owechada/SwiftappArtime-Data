import 'dotenv/config'
import mongoose from 'mongoose'
import express, { Router, application } from 'express'
import cors from 'cors'

import  HomePageRoute from './Routes/HomePageRoute.js'
  import SignupRoute from './Routes/SignupRoute.js'
import UserModel from './Models/UserModel.js'
import Loginroute from './Routes/Loginroute.js'
import Buydataroute from './Routes/BuydataRoute.js'

import UserRoute from './Routes/FinduserRoute.js'

var app= express()

mongoose.connect(process.env.MONGO_CONNECTION_STRING).then(async (res)=>{

  console.log("Connected to the database")



}).catch(console.error)


app.use(cors())
app.use(express.json());


app.use('/',HomePageRoute)
 app.use('/signup',SignupRoute)
 app.use('/login', Loginroute)
app.use('/buydata',Buydataroute)
app.use('/user',UserRoute)


app.use((req,res,next)=>{

res.send("The page you are looking for does not exists")

})


app.listen(process.env.PORT)
