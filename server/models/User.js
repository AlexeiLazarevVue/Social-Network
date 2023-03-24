import mongoose from 'mongoose';

const User = new mongoose.Schema({
  username: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  surname: { type: String, required: true },
  age: { type: Number, required: true },
  roles: [{ type: String, required: true, ref: "Role"}],
  password: { type: String, required: true },
});

export default mongoose.model('User', User);
