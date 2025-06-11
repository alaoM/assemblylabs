import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <section className="w-full">
      {/* Glassmorphism background */}
      <div className="backdrop-blur-md bg-black/30 shadow-md w-full px-[60px]">
        <div className="flex flex-wrap items-center justify-between py-[19px] max-w-full mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0 w-[15%]">
            <Image alt="Logo" src="/logo.png" width={50} height={50} />
          </div>

          {/* Navigation links (hidden on small screens) */}
          <nav className="hidden md:flex items-center justify-between gap-6 w-[70%]">
            <a href="#" className="text-white  hover:text-gray-300 text-[28px] font-medium">
              About
            </a>
            <a href="#" className="text-white  hover:text-gray-300 text-[28px] font-medium">
              Services
            </a>
            <a href="#" className="text-white  hover:text-gray-300 text-[28px] font-medium">
              Project
            </a>
            <a href="#" className="text-white  hover:text-gray-300 text-[28px] font-medium">
              Contact
            </a>
            <a href="#" className="text-white  hover:text-gray-300 text-[28px] font-medium">
              Book Meetings
            </a>
          </nav>

          {/* Menu (visible on small screens) */}
          <div className="flex items-center  justify-end gap-2 cursor-pointer w-[15%]">
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
            <p className="text-white  hover:text-gray-300 text-[28px] font-medium">
              Menu
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
