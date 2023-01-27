import mongoose from "mongoose";


const UsersSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    tel: String,
    location: String,
    password: String
})

export default mongoose.model('users',UsersSchema)