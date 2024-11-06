import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgChevronDown } from "react-icons/cg";

function Email() {
  return (
    <div className=" w-full h-full  sm:bg-[#f0f4f9] sm:flex sm:flex-col sm:justify-center sm:items-center p-4  sm:p-20">
      <div className=" sm:bg-white sm:px-14 sm:py-20 sm:flex sm:justify-evenly sm:rounded-[30px]">
        <div className=" w-[70%]">
          <div className="">
            <Image
              src="/hello.png"
              alt=""
              width={1000}
              height={500}
              className="w-[60px] h-[60px] rounded-full"
            />
          </div>
          <div className="w-full h-full p-2 flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-3">
              <p className="text-[26px] text-black ">Sign in </p>
              <p className="text-[14px] text-black">to continue to Gmail</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col  gap-y-10">
          <div className="flex flex-col gap-y-1">
            <input
              type="text"
              placeholder="Email or phone "
              className="border-[1px] border-black p-[12px] placeholder:text-gray-700 rounded-[5px]"
            />
            <Link href="" className="text-blue-700 ">
              Forgot email?
            </Link>
          </div>
          <div className="text-[13px] text-black">
            Not your computer? Use Guest mode to sign in privately.{" "}
            <span className="text-blue-700">
              Learn more about using Guest mode
            </span>
          </div>

          <div className="flex justify-between">
            <Link href="" className="text-blue-700  text-[14px] font-semibold">
              Create account
            </Link>
            <button className="text-white bg-blue-700 rounded-full px-4 py-2">
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="w-full   justify-between px-6 py-2 mt-6 text-[12px] hidden sm:flex">
        <div className="">
          <button className=" p-2 rounded-[10px] hover:bg-[#b2c5df] flex gap-x-3 items-center"><span>English (United States)</span><CgChevronDown />  </button>
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
