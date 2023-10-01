import mongoose from 'mongoose';

const User = new mongoose.Schema({
  username: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  surname: { type: String, required: true },
  age: { type: Number, required: true },
  roles: [{ type: String, required: true, ref: "Role" }],
  password: { type: String, select: false, required: true },
  likedPosts: [{ type: String }],
});

export default mongoose.model('User', User);
