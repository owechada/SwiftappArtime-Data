import { Router } from "express";
import findusercontroller from "../Controllers/Findusercontroller.js";

var router= Router()
router.post('/', findusercontroller)


export default router  