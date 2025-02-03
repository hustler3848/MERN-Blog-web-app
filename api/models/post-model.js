import mongoose from "mongoose";
import slugify from "slugify";

const postSchema = mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      // required: true,
    },
    postTitle: {
      type: String,
      required: true,
    },
    postDescription: {
      type: String,
      required: true,
    },
    auther: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    createdAt: { type: Date, default: Date.now },
    views:{
        type: Number,
        default: 0
    },
    Likes:{
        type: Number,
        default: 0
    },
    // publishedDate:{
    //     type: Date,
    //     default: Date.now(),
    //     required: true
    // }
  },
  { Timestamp: true }
);
// Generate slug before saving the post
postSchema.pre("save", function (next) {
  if (this.isModified("postTitle")) {
    this.slug = slugify(this.postTitle, { lower: true, strict: true });
  }
  next();
});

const Posts = mongoose.model('Posts', postSchema)
export default Posts