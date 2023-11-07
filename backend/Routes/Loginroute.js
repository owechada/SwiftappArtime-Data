import express from "express";
import loginController from "../Controllers/LoginController.js";

var router =express.Router()

router.post('/',loginController)

export default router