
import { Router } from 'express'
import Signupcontroller from '../Controllers/SignupController.js'

 var router=Router()


router.post('/',Signupcontroller)

export  default router