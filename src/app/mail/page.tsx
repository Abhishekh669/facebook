import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="w-[100vw] h-[100vh] bg-white">
      <div className="div1">
        <div>
          <Image
            height={500}
            width={500}
            alt=""
            src="/new.jpeg"
            className="rounded-full h-20 w-20 sm:hidden "
          />
        </div>
        <span>Sign in</span>
      </div>
    </div>
  );
}

export default page;
