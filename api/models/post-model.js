import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        user_id: {
            type: String,
            required: true
        },
        thumbnail:{
            type: String,
            required: true
        },
        postTitle:{
            type: String,
            required: true
        },
        postDescription:{
            type: String,
            required: true
        },
        auther:{
            type: String,
            required: true
        },
        tags: {
            type: Array,
            required: true
        },
        slug: {
            type: String,
            required: true,
            unique: true
        }
        // views:{
        //     type: String
        // },
        // comments:{
        //     type: Number
        // },
        // Likes:{
        //     type: String
        // },
        // publishedDate:{
        //     type: Date,
        //     default: Date.now(),
        //     required: true
        // }
        
    }, {Timestamp: true}
)


const Posts = mongoose.model('Posts', postSchema)
export default Posts