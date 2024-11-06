import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
    username : { type : String, required : true},
    password : {type : String, required : true}
})

export const User = mongoose.models.User || mongoose.model("User", userSchema)