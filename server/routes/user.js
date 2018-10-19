import express from 'express';
import UserController from '../controllers/user';
import middlewares from '../middlewares';

const { signUp, login } = UserController;
const { UserValidator, VerifyRole } = middlewares;
const { signUpValidator, loginValidator } = UserValidator;
const { isAdmin, isAttendant } = VerifyRole;

const userRouter = express.Router();

userRouter.post('/auth/signUp', signUpValidator, isAdmin, signUp);
userRouter.post('/auth/login', loginValidator, login);

export default userRouter;
