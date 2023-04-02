import Post from '../models/Post.js';
import fs from 'fs'

class PostController {
  async create(request, response) {
    const { userId, title, content } = request.body;
    console.log(request.file.path);
    const imagePath = request.file.path
    const date = new Date(Date.now()).toUTCString()

    const post = await Post.create({
      userId, title, content, date, image: {
        data: fs.readFileSync(imagePath),
        contentType: 'image/png'
      }
    });
    response.json(post);
  }

  async getAll(request, response) {
    const posts = await Post.find();

    return response.json(posts);
  }

  async getOne(request, response) {
    const { id } = request.params;

    const post = await Post.findById(id);

    return response.json(post);
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
