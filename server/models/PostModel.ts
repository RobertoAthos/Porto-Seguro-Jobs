import mongoose from "mongoose";


const PostsSchema = new mongoose.Schema({
    title: String,
    desc: String,
    location: String,
    img: String,
    userPic: String
})

export default mongoose.model('posts', PostsSchema)