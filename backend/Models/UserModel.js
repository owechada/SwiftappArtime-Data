import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({ firstname: String, lastname: String, email: String, phone: String, passwordhash: String , balance:String, transacttions:Array}, { timestamps: true })




export default model('User',userSchema); 