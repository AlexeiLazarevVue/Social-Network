import Post from '../models/Post.js';

class PostController {
  async create(request, response) {
    const { author, title, content, image } = request.body;

    const post = await Post.create({ author, title, content, image });
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
