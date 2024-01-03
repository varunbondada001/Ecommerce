import express from 'express'
import {registerController,loginController,testController} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
//ROUTER OBJECT
const router = express.Router()

//ROUTING
//REGISTER || METHOD POST
router.post("/register",registerController)

//LOGIN || POST
router.post('/login',loginController)

//TEST ROUTES
router.get('/test',requireSignIn,isAdmin,testController)

export default router;