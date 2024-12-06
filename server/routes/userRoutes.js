import express from 'express'
import { clerkWebHook } from '../controllers/UserControllers.js'

const userRouter = express.Router()
userRouter.post('/webhooks', clerkWebHook);

export default userRouter;