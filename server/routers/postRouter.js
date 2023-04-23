import Router from 'express'
import PostController from '../controllers/PostController.js'
import authMiddleware from '../middlewares/authMiddleware.js';

const postRouter = new Router()

postRouter.post('/posts', authMiddleware, PostController.create);
postRouter.get('/posts', PostController.getAll)
postRouter.get('/posts/users/:userId', authMiddleware, PostController.getAllIdsByUser)
postRouter.get('/posts/:id', PostController.getOne)
postRouter.put('/posts/:id', PostController.update);
postRouter.delete('/posts/:id', PostController.delete);

export default postRouter