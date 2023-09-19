import { Router } from "express";
import MessageController from "../controllers/MessageController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const messageRouter = new Router()

messageRouter.get('/messages', authMiddleware, MessageController.getMessagesFromTo)
messageRouter.post('/messages', authMiddleware, MessageController.createMessage)

export default messageRouter