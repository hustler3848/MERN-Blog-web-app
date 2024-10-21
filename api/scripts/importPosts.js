import dotenv from 'dotenv'
import mongoose from 'mongoose';
import PostData from './Posts.json' assert{type: 'json'};
import Posts from '../models/post-model.js';
dotenv.config({ path: '../../.env' });

const mongoURI = process.env.MONGO_URI
console.log(mongoURI);
if (!mongoURI) {
    console.error("MONGO_URI is undefined");
    process.exit(1);
}
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log("Connected to MongoDB");
  
  try {
    await Posts.insertMany(PostData);
    console.log("Posts imported successfully");
  } catch (error) {
    console.error("Error importing data:", error);
  } finally {
    mongoose.disconnect();
  }
});
