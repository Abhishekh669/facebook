import React from 'react'
import Password from '../_components/Password'
import Head from 'next/head'
import { Metadata } from 'next';



function Page() {
  return (
    
    <>
      <Head><title>Google Sign-in</title></Head>
    <div className='w-[100vw] h-[100vh] bg-[#feffff] text-black'>
        <Password />
      
    </div>
    </>
  )
}

export default Page