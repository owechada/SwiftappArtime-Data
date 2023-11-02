 
import { Router } from "express";

 var router=Router()



router.get('/',(req,res, next)=>{

    res.send('homepagjje')
    
})

export default router

