import Router from 'express';
import { check } from 'express-validator';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';
import UserController from '../controllers/UserController.js';

const userRouter = new Router();


userRouter.post(
  '/registration',
  [
    check('username').notEmpty(),
    check('firstname').notEmpty(),
    check('lastname').notEmpty(),
    check('surname').notEmpty(),
    check('age').notEmpty().isInt(),
    check('password').isLength({ min: 8, max: 16 }),
  ],
  UserController.registration
);
userRouter.post('/login', UserController.login);

userRouter.get('/users', [authMiddleware, roleMiddleware(['Admin'])], UserController.getAll);
userRouter.get('/users/:id', authMiddleware, UserController.getOne);

userRouter.put('/users/:id', UserController.update);
userRouter.delete('/users/:id', UserController.delete);

export default userRouter;
