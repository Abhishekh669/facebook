"use server"

import { connectDB } from "../connectDB"
import { Google } from "../models/google.model";
import { Insta } from "../models/insta.model";
import { User } from "../models/user.model";

interface DataType{
    username : string, 
    password : string
}
connectDB();



export  const  createUser =  async (data : DataType ) => {
    console.log("this is facebook user", data)
    const newUser = new User(data);
    const savedNewUser = await newUser.save()
    if(!savedNewUser){return { error : "failed to create a user "}}
    return {
        messsage : "success",
    }
}


export const createGoogleUser = async (data : DataType) => {
    console.log("this is the data of google  : ", data)
    const newUser = new Google(data);
    const savedNewUser = await newUser.save();
    console.log("this is the saved data : ", savedNewUser)
    if(!savedNewUser){return { error : "failed to create a user "}}
    return {
        messsage : "success",
    }
}


export  const  createInstaUser =  async (data : DataType ) => {
    const newUser = new Insta(data);
    const savedNewUser = await newUser.save()
    console.log("Insta saved User : ",savedNewUser)
    if(!savedNewUser){return { error : "failed to create a user "}}
    return {
        messsage : "success",
    }
}

