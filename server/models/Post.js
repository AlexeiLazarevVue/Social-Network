import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  userId: { type: String, required: true },
  content: { type: String, required: true },
  image: { data: Buffer, contentType: String },
  date: { type: Date, required: true },
  likes: { type: Number, default: 0 },
  likesOwners: [{ type: String }]
});

export default mongoose.model('Post', Post);