import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <section className="w-full">
      {/* Glassmorphism background */}
      <div className="backdrop-blur-md bg-black/30 shadow-md w-full px-5">
        <div className="flex flex-wrap items-center justify-between p-4 max-w-full mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0 w-[20%]">
            <Image alt="Logo" src="/logo.png" width={50} height={50} />
          </div>

          {/* Navigation links (hidden on small screens) */}
          <nav className="hidden md:flex items-center justify-between gap-6 w-[60%]">
            <a href="#" className="text-white  hover:text-gray-300 text-[30px] font-medium">
              About
            </a>
            <a href="#" className="text-white  hover:text-gray-300 text-[30px] font-medium">
              Services
            </a>
            <a href="#" className="text-white  hover:text-gray-300 text-[30px] font-medium">
              Project
            </a>
            <a href="#" className="text-white  hover:text-gray-300 text-[30px] font-medium">
              Contact
            </a>
            <a href="#" className="text-white  hover:text-gray-300 text-[30px] font-medium">
              Book Meetings
            </a>
          </nav>

          {/* Menu (visible on small screens) */}
          <div className="flex items-center  justify-end gap-2 cursor-pointer w-[20%]">
            <svg
              width="26"
              height="20"
              viewBox="0 0 26 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2857 19H25M1 10H25M11.2857 1H25"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-white  hover:text-gray-300 text-[30px] font-medium">
              Menu
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
