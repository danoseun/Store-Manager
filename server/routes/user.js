import express from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';
import { isAdmin } from '../middlewares/auth';

const { UserController } = controllers;
const { createAccount, login } = UserController;
const { UserValidator } = middlewares;
const { signUpValidator, loginValidator } = UserValidator;


const userRouter = express.Router();

userRouter.post('/auth/signUp', signUpValidator, isAdmin, createAccount);
userRouter.post('/auth/login', loginValidator, login);

export default userRouter;
