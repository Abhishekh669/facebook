import Image from "next/image";
import React from "react";
import { SiMeta } from "react-icons/si";

function MainPage() {
  return (
    <div className=" h-[100vh] w-[100vw] sm:h-[80vh] bg-[#f2f4f7] sm:flex sm:flex-row ">
      <div className=" h-[40%] p-4 sm:h-full sm:flex-1 sm:flex  sm:justify-end">
        <div className="flex flex-col  items-center  p-4 gap-y-32 sm:gap-y-0 sm:justify-center  h-full ">
          <div className="language text-[19px] w-full ">
            <span className="sm:hidden  text-black">English(US)</span>
            <p className="hidden sm:flex  sm:text-[60px] sm:font-semibold sm:text-[#125cef] sm:items-start">
              facebook
            </p>
          </div>
          <div>
            <Image
              height={500}
              width={500}
              alt=""
              src="/new.jpeg"
              className="rounded-full h-20 w-20 sm:hidden "
            />
            <p className="hidden sm:flex sm:flex-col sm:text-[23px] text-black">
              <span>Connect with friends and the world </span>
              <span>world around you on Facebook.</span>
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full h-[60%]   sm:h-full sm:flex-1 pt-4  px-4  flex flex-col justify-around sm:flex-row sm:items-center sm:justify-center sm:p-0 lg:p-[20px] ">
        <div className="  w-full h-full sm:flex sm:items-center sm:justify-start lg:px-10" >
          <form action="" className="w-full flex flex-col   gap-y-4 sm:gap-y-5 sm:w-[250px] md:w-[450px] sm:px-8 sm:pt-6 sm:pb-14 sm:border-2 sm:bg-white sm:rounded-2xl">
            <input
              placeholder="Mobile number or email "
              className="  border-[0.4px] p-[16px] text-black sm:p-[20px] border-gray-400 placeholder:text-gray-500 placeholder:text-[17px] sm:placeholder:text-[20px] rounded-xl focus:outline-[1px] focus:outline-blue-500 "
            />
            <input
              placeholder="Password"
              className="border-[1px] text-black p-[16px] sm:p-[20px] border-gray-400 placeholder:text-gray-500 placeholder:text-[17px]  sm:placeholder:text-[20px] rounded-xl"
            />
            <button className="bg-[#0866ff]  border-gray-600 rounded-3xl sm:rounded-xl p-[10px] sm:p-[15px] border-0 border-none ouline-none text-[19px]">
              Log in
            </button>
         <div className="hidden sm:block">
         <p className="text-[#0866ff]  text-center m-1 text-[18px]">Forgot password?</p>
         {/* <div className=" w-full bg-gray-600"></div> */}
         <hr className="mt-4 "/>
        <div className="w-full mt-4 flex justify-center pt-4">
        <button className="bg-[#42b72a] font-semibold py-[21px] px-[80px] text-white rounded-xl text-[19px] font-sans">
            Create new account
          </button>
        </div>
         </div>
          </form>
          <p className="text-gray-800 sm:hidden text-center m-4">Forgot password?</p>
        </div>
        <div className="text-black w-full flex flex-col pt-4 sm:hidden">
          <div className="mt-4">
            <button className="text-[#0647c8] border-[0.5px] border-[#0647c8] w-full  rounded-3xl p-[10px]  text-[19px]">
              Create new account
            </button>
            <p className="flex gap-x-2  mt-3 justify-center w-full ">
              <span className=" flex  gap-x-2 left-">
                <SiMeta className="text-black text-[25px]" />
                <span className="text-[20px]">Meta</span>
              </span>
            </p>
            <div className="flex justify-center gap-x-3 mt-2 mb-1 text-[12px] ">
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
