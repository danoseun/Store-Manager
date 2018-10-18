import express from 'express';
import UserController from '../controllers/user';
import UserValidator from '../middlewares/user';

const { signUp } = UserController;
const { signUpValidator } = UserValidator;

const userRouter = express.Router();

userRouter.post('/auth/signUp', signUpValidator, signUp);

export default userRouter;
