import express from 'express'
import AuthController from '../controllers/AuthController.ts'
import { ValidateLogin, ValidateRegister } from '../middlewares/authMiddleware.ts';

const route = express.Router();

route.post('/register', ValidateRegister, AuthController.register)
route.post('/login', ValidateLogin, AuthController.login)

export default route;