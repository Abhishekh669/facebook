import Footer from '@/components/Footer'
import MainPage from '@/components/MainPage'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "Facebook ",
  description: "A clone of Facebook built with Next.js",
  icons: {
    icon: "./icon4.png", // Path to the Facebook favicon
  },
};
function page() {

  return (
    <div className='h-[100vh] '>
    <MainPage />

    <Footer />
  </div>
  )
}

export default page
