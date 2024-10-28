// pages/login.js
import { links } from "@/lib/links";
import Image from "next/image";
import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen h-[100vh]">
      <div className=" h-[100vh] md:h-[90vh] bg-green-600 md:flex md:flex-row ">
        <div className="w-full bg-red-600 ">
          <Image
            height={500}
            width={500}
            alt=""
            src="/new.jpeg"
            className="rounded-full h-20 w-20 md:hidden "
          />
          <h1 className="text-5xl hidden md:flex  text-center text-[rgb(24,119,242)]  font-semibold mb-4">
            Facebook
          </h1>
        </div>
        <div className="md:flex   md:flex-grow md:justify-center md:items-center md:p-20 ">
          <div className="flex-1 flex flex-col justify-center items-start"></div>
          <div className="">
            <form action="#" className=" rounded-lg shadow-lg w-full ">
              <input
                type="text"
                placeholder=""
                className="w-full h-12 border border-gray-300 rounded-md mb-4 p-2"
              />
              <input
                type="password"
                placeholder=""
                className="w-full h-12 border border-gray-300 rounded-md mb-4 p-2"
              />
              <button
                type="submit"
                className="w-full h-12 bg-[#1877f2] text-white font-bold rounded-md mb-2"
              >
                Login
              </button>
              <p className="text-center ">
                <a href="#" className="text-[#1877f2] hover:underline">
                  forget password?
                </a>
              </p>
              <button
                type="button"
                className="w-full h-12 bg-[#42b72a] text-white font-bold rounded-md"
              >
                Create New Account
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer className="w-full flex-none bg-white py-6 hidden md:flex">
        <ul className="flex flex-wrap justify-center mb-4">
          {[
            "ภาษาไทย",
            "English (UK)",
            "日本語",
            "中文(简体)",
            "Tiếng Việt",
            "Français (France)",
            "Deutsch",
            "Русский",
            "Español",
            "Português (Brasil)",
            "Italiano",
          ].map((lang) => (
            <li key={lang} className="mr-4">
              <a href="#" className="text-gray-500 hover:underline">
                {lang}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="text-gray-500 hover:underline border border-gray-300 rounded-full px-2"
            >
              +
            </a>
          </li>
        </ul>
        <hr className="my-4" />
        <ul className="flex flex-wrap justify-center mb-4">
          {/* Add other links here */}
          {links.map((link) => (
            <li key={link} className="mr-4">
              <a href="#" className="text-gray-500 hover:underline">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-center text-gray-500">Facebook © 2025</p>
      </footer>
    </div>
  );
};

export default LoginPage;
