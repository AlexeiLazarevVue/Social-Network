import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { data: Buffer, contentType: String },
  date: { type: Date, required: true }
});

export default mongoose.model('Post', Post);