import express from 'express';
import { clerkWebHook, userCredits } from '../controllers/UserControllers.js';
import authUser from '../middleware/auth.js';

const userRouter = express.Router();
userRouter.post('/webhooks', clerkWebHook);
userRouter.get('/credits', authUser, userCredits);

export default userRouter;
