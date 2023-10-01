import mongoose from 'mongoose';

const Message = new mongoose.Schema({
  userId: { type: String, required: true },
  content: { type: String, required: true },
  image: { data: Buffer, contentType: String },
  date: { type: Date, required: true },
  toId: { type: String, required: true },
  showTo: [{ type: String, required: true }]
});

export default mongoose.model('Message', Message);