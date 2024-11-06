"use server"

import { connectDB } from "../connectDB"
import { User } from "../models/user.model";

interface DataType{
    username : String, 
    password : String
}
connectDB();



export  const  createUser =  async (data : DataType ) => {
    const newUser = new User(data);
    const savedNewUser = await newUser.save()
    if(!savedNewUser){return { error : "failed to create a user "}}
    return {
        messsage : "success",
    }
}