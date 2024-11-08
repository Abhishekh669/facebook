// "use client";
// import Image from "next/image";
// import { redirect, useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { TbUserSquareRounded } from "react-icons/tb";

// function Password(): any {
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const router = useRouter();
//   const email = localStorage.getItem("email");

//   if (!email) return redirect("/google-signin");
//   else
//     return (
//       <div className=" h-full w-full py-8  bg-red-600 ">
//         <div className="bg-green-600 sm:flex sm:justify-center sm:items-center  ">
//           <div className="bg-yellow-600 w-[65%]">
//             <div className="">
//               <Image
//                 src="/hello.png"
//                 alt=""
//                 width={1000}
//                 height={500}
//                 className="w-[60px] h-[60px] rounded-full"
//               />
//             </div>
//             <div className="p-4 flex flex-col gap-y-12 sm:flex-row sm:justify-between ">
//               <div>
//                 <div className="flex gap-x-3 items-center ">
//                   <div className="text-[30px] ">Hi,</div>
//                   <div>
//                     <button className="border-[1px] text-[12px] font-semibold border-black rounded-[20px] py-1 px-1">
//                       {email}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col py-4">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter your password"
//                   className="border-[1px] border-black text-black  p-[12px] placeholder:text-gray-700 rounded-[5px] focus:border-2 focus:border-blue-600 outline-none"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <div className=" my-2  flex flex-col gap-y-10">
//                   <div
//                     className="flex gap-x-4  cursor-pointer"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     <input
//                       type="checkbox"
//                       checked={showPassword}
//                       onChange={() => setShowPassword(!showPassword)}
//                     />
//                     <span>Show Password</span>
//                   </div>
//                   <div className="flex justify-between items-center ">
//                     <div className="text-blue-600">Forgot password?</div>
//                     <div>
//                       <button className="text-white bg-blue-700 rounded-full px-4 py-2">
//                         Next
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// }

// export default Password;



// <div className="w-full h-full sm:bg-[#f0f4f9] sm:flex sm:flex-col sm:justify-center sm:items-center p-4 sm:p-20">
// <div className="flex flex-col gap-y-12 sm:bg-white sm:flex-row sm:px-8 sm:py-20  sm:justify-between sm:rounded-[30px] ">
//   <div className="w-[70%]">
//     <div>
//       <Image
//         src="/hello.png"
//         alt="Profile Image"
//         width={1000}
//         height={500}
//         className="w-[60px] h-[60px] rounded-full"
//       />
//     </div>
//     <div className="w-full h-full  p-4 gap-y-8">
//       <div className="flex items-center gap-x-3 ">
//         <span className="text-[40px] text-black">Hi,</span>
//         <span className="text-[12px] border-[1px] rounded-[20px] p-1  font-semibold border-black">
//           {email}
//         </span>
//       </div>
//     </div>
//   </div>
//   <div className="flex flex-col gap-y-10 ">
//     <div className="flex flex-col gap-y-1">
//       <input
//         type={showPassword ? "text" : "password"}
//         placeholder="Enter your password"
//         className="border-[1px] border-black text-black  p-[12px] placeholder:text-gray-700 rounded-[5px] focus:border-[2px] focus:border-blue-600 outline-none"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       {error && <p className="text-red-600 text-sm">{error}</p>}
//       <div
//         className="flex gap-x-4 mt-2 cursor-pointer"
//         onClick={() => setShowPassword(!showPassword)}
//       >
//         <input
//           type="checkbox"
//           checked={showPassword}
//           onChange={() => setShowPassword(!showPassword)}
//         />
//         <span>Show Password</span>
//       </div>
//     </div>
    

//     <div className="flex justify-between items-center">
//       <Link href="" className="text-blue-700 text-[14px] ">
//         Forget password?
//       </Link>
//       <button className="text-white bg-blue-800 rounded-full px-4 py-2">
//         Next
//       </button>
//     </div>
//   </div>
// </div>
// <div className="w-full bg-greeen-600 justify-between px-6 py-2 mt-6 text-[12px] text-black hidden sm:flex">
//   <div>
//     <button className="p-2 rounded-[10px] hover:bg-[#b2c5df] flex gap-x-3 items-center">
//       <span>English (United States)</span>
//       <CgChevronDown />
//     </button>
//   </div>
//   <div>
//     <ul className="flex gap-x-4 cursor-pointer">
//       <li className="hover:bg-[#b7c8e0] p-2 rounded-[10px]">Help</li>
//       <li className="hover:bg-[#b2c5df] p-2 rounded-[10px]">Privacy</li>
//       <li className="hover:bg-[#b2c5df] p-2 rounded-[10px]">Terms</li>
//     </ul>
//   </div>
// </div>
// </div>