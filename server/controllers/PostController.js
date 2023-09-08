import Post from '../models/Post.js';
import fs from 'fs';

class PostController {
  async create(request, response) {
    try {
      const { userId, content } = request.body;
      const imagePath = request.file.path;
      const date = new Date(Date.now()).toUTCString();

      const post = await Post.create({
        userId,
        content,
        date,
        image: {
          data: fs.readFileSync(imagePath).toString('base64'),
          contentType: 'image/png',
        },
      });
      response.json(post);
    } catch (error) {
      console.log(error);
    }

  }

  async getAll(request, response) {
    const posts = await Post.find();

    return response.json(posts);
  }

  async getAllIdsByUser(request, response) {
    try {
      const { userId } = request.params;

      const postsId = await Post.find({ userId }).select('_id');

      return response.json(postsId);
    } catch (error) {
      response.status(500).json(error);
    }
  }

  async getOne(request, response) {
    try {
      const { id } = request.params;

      const post = await Post.findById(id);

      return response.json(post);
    } catch (error) { }
  }

  async update(request, response) {
    const { id } = request.params;
    const post = request.body;

    const updatedPost = await Post.findByIdAndUpdate(id, post);

    return response.json(updatedPost);
  }

  async delete(request, response) {
    try {
      const { id } = request.params;

      const deletedPost = await Post.findByIdAndDelete(id);

      return response.json(deletedPost);
    } catch (e) {
      response.status(500).json();
    }
  }
}
export default new PostController();
