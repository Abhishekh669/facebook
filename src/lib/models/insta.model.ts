import mongoose, {  Schema } from "mongoose";

const instaUserSchema= new Schema({
    username : { type : String, required : true},
    password : {type : String, required : true}
})

export const Insta = mongoose.models.User || mongoose.model("Insta", instaUserSchema)