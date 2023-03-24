import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import postRouter from './routers/postRouter.js';
import userRouter from './routers/userRouter.js'

const PORT = 5000;

// {
//     "author": "Lunnaya_Pchola",
//     "title": "Don’t miss your last chance to capitalize on what the holidays are all about: free gear.",
//     "content": "Take out The Gooch, destroy all 25 Snowmen, and annihilate your target atop Weazel Plaza to receive a variety of rewards"
// }

const DB_URL = 'mongodb+srv://Lunnaya_Pchola:Alexei2008@cluster0.fexz4.mongodb.net/?retryWrites=true&w=majority';

const app = express();

app.use(express.json())
app.use(cors())
app.use('/api', postRouter)
app.use('/api', userRouter);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
    app.listen(PORT, () => console.log(`SERVER IS WORKING ON PORT: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

startApp();
