import React from 'react'
import Image from 'next/image'
import MainPage from './_components/MainPage'
import Footer from './_components/Footer'
import Test from "./_components/Test"

function Page() {
  return (
    <div className='max-h-[100vh] h-full overflow-x-hidden'>
       <MainPage />
       {/* <Test /> */}
       <Footer />
      

    </div>
  )
}

export default Page
