import { links } from '@/lib/links'
import React from 'react'

function Footer() {
  return (
    <div className='bg-white h-[20vh] hidden md:flex '>
     
      <footer className="w-full flex-none bg-white py-6 hidden md:flex md:flex-col">
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
        <ul className="flex flex-wrap justify-center ">
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
  )
}

export default Footer
