"use client";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { TbUserSquareRounded } from "react-icons/tb";

function Password(): any {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const email = localStorage.getItem("email");

  if (!email) return redirect("/google-signin");
  else
    return (
      <div className=" h-full w-full py-8  bg-red-600 ">
        <div className="bg-green-600 sm:flex sm:justify-center sm:items-center  ">
          <div className="bg-yellow-600 w-[65%]">
            <div className="">
              <Image
                src="/hello.png"
                alt=""
                width={1000}
                height={500}
                className="w-[60px] h-[60px] rounded-full"
              />
            </div>
            <div className="p-4 flex flex-col gap-y-12 sm:flex-row sm:justify-between ">
              <div>
                <div className="flex gap-x-3 items-center ">
                  <div className="text-[30px] ">Hi,</div>
                  <div>
                    <button className="border-[1px] text-[12px] font-semibold border-black rounded-[20px] py-1 px-1">
                      {email}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col py-4">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="border-[1px] border-black text-black  p-[12px] placeholder:text-gray-700 rounded-[5px] focus:border-2 focus:border-blue-600 outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className=" my-2  flex flex-col gap-y-10">
                  <div
                    className="flex gap-x-4  cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <input
                      type="checkbox"
                      checked={showPassword}
                      onChange={() => setShowPassword(!showPassword)}
                    />
                    <span>Show Password</span>
                  </div>
                  <div className="flex justify-between items-center ">
                    <div className="text-blue-600">Forgot password?</div>
                    <div>
                      <button className="text-white bg-blue-700 rounded-full px-4 py-2">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Password;
