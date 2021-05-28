import express from 'express';
import { see, edit, remove, logout } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get('/edit', edit);
userRouter.get('/remove', remove);
userRouter.get('/logout', logout);
userRouter.get(':id', see);

export default userRouter;
