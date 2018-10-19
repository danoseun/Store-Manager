import express from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';

const { UserController } = controllers;
const { signUp, login } = UserController;
const { UserValidator, VerifyRole } = middlewares;
const { signUpValidator, loginValidator } = UserValidator;
const { isAdmin } = VerifyRole;

const userRouter = express.Router();

userRouter.post('/auth/signUp', signUpValidator, isAdmin, signUp);
userRouter.post('/auth/login', loginValidator, login);

export default userRouter;
