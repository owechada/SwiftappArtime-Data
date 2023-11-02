import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({ firstname: String, lastname: String, email: String, phone: String, passwordhash: String }, { timestamps: true })


export default mongoose.model('User', userSchema);