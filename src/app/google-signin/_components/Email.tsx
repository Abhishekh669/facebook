"use client"
import { createEmailLink, forgotEmailLink, guestNote } from "@/lib/links";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CgChevronDown } from "react-icons/cg";

function Email() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const pathname = usePathname(); // Get the current route path

  // Regular expressions for email and phone validation
  const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  const phoneRegex = /^\+?[1-9]\d{1,14}$/; // International format (E.164)

  // Handle page refresh for google-signin route
  useEffect(() => {
    if (pathname === "/google-signin") {
      localStorage.removeItem("email"); // Clear email on refresh of this route
    }
  }, [pathname]);

  const handleNextPage = () => {
    const value = inputValue;
    if (emailRegex.test(value) || phoneRegex.test(value)) {
      setError(""); // Clear error if valid
      localStorage.setItem("email", value); // Save email/phone to localStorage
      router.push("/google-signin/password"); // Navigate to the next page
    } else {
      setError("Enter a valid email or phone number.");
    }
  };

  return (
    <div className="w-full h-full sm:bg-[#f0f4f9] sm:flex sm:flex-col sm:justify-center sm:items-center p-4 sm:p-20">
      <div className="flex flex-col gap-y-12 sm:bg-white sm:flex-row sm:px-14 sm:py-20  sm:justify-evenly sm:rounded-[30px]">
        <div className="w-[70%]">
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
            <div className="flex flex-col gap-y-3">
              <p className="text-[26px] text-black">Sign in</p>
              <p className="text-[14px] text-black">to continue to Gmail</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-1">
            <input
              type="text"
              placeholder="Email or phone"
              className="border-[1px] border-black text-black  p-[12px] placeholder:text-gray-700 rounded-[5px] focus:border-[2px] focus:border-blue-600 outline-none"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if(e.key =="Enter") handleNextPage()
              }}
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <span className="text-blue-700"
              onClick={(e) =>{
                e.preventDefault();
                window.location.href = forgotEmailLink
              }}
            >
              Forgot email?
            </span>
          </div>
          <div className="text-[13px] text-black">
            Not your computer? Use Guest mode to sign in privately.{" "}
            <span className="text-blue-700 hover:underline" onClick={(e) => { e.preventDefault(); window.location.href = guestNote}}>Learn more about using Guest mode</span>
          </div>

          <div className="flex justify-between items-center">
            <span  className="text-blue-700 text-[14px] font-semibold" 
              onClick = {(e) =>{
                e.preventDefault();
                window.location.href = createEmailLink
              }}
            >
              Create account
            </span>
            <button
              className="text-white bg-blue-700 rounded-full px-4 py-2"
              onClick={handleNextPage}
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

export default Email;
