import {Router} from 'express'
import Buydatacontroller from '../Controllers/BuydataController.js'

var router =Router()

router.post('/',Buydatacontroller)


export default router


