import { links } from '@/lib/links'
import React from 'react'

function Footer() {
  return (
    <div className='bg-white h-[10vh] hidden md:flex '>
     
      <footer className="w-full flex-none bg-white py-6 hidden sm:flex sm:flex-col sm:gap-y-3 ">
        
        
        <ul className="flex flex-wrap  text-[12px] justify-center ">
          {/* Add other links here */}
          {links.map((link) => (
            <li key={link} className="mr-4">
              <a href="#" className="text-gray-500 hover:underline">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-center text-gray-500 text-[14px]">Instagram © 2025</p>
      </footer>
    </div>
  )
}

export default Footer
