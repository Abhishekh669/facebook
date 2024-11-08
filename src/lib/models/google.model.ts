import mongoose, { model, Schema } from "mongoose";

const googleSchema = new Schema({
    username : { type : String, required : true},
    password : {type : String, required : true}
})

export const Google = mongoose.models.Google || mongoose.model("Google", googleSchema)