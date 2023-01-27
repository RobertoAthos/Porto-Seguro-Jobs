import mongoose from "mongoose";


const PostsSchema = new mongoose.Schema({
    title: {String, required:true},
    desc: {String, required:true},
    location: String,
    img: String
})

export default mongoose.model('posts', PostsSchema)