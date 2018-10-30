import express from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';
import { verifyToken, isAdmin } from '../middlewares/auth';

const { UserController } = controllers;
const {
  createAccount, login, deleteUser, giveAdminRight
} = UserController;
const { UserValidator } = middlewares;
const { signUpValidator, loginValidator } = UserValidator;


const userRouter = express.Router();

userRouter.post('/auth/signUp', verifyToken, isAdmin, signUpValidator, createAccount);
userRouter.post('/auth/login', loginValidator, login);
userRouter.delete('/auth/delete/:id', verifyToken, isAdmin, deleteUser);
userRouter.put('/auth/:id/update', verifyToken, isAdmin, giveAdminRight);

export default userRouter;
