
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className="w-full bg-white p-4 sm:p-6 md:p-8 text-black">
            <div className="bg-[#F5F5F5] px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 pb-4">
                {/* Top section */}
                <div className="flex flex-col lg:flex-row justify-evenly gap-8 lg:gap-24">
                    {/* Brand */}
                    <div className='flex flex-col items-start p-4 sm:p-6 md:p-8'> 
                        <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-[86px] leading-tight">
                            Assembly 
                        </h1>
                        <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-[86px] leading-tight">
                            Labs
                        </h1>
                    </div>

                    {/* Newsletter */}
                    <div className="flex flex-col items-start p-4 sm:p-6 md:p-8">
                        <h3 className="text-xl sm:text-4xl md:text-[38px]">
                            Growth Insights
                        </h3>
                        <p className="text-sm sm:text-base md:text-[16px] mt-2">
                            Join our newsletter and stay up to date on the latest growth
                            insight in the industry
                        </p>
                        <div className="flex items-center justify-between w-full mt-4 border-b-[3px] border-[#DCDCDC]">
                            <input
                                type="email"
                                placeholder="Email"
                                className="text-[#989898] text-md sm:text-xl md:text-[24px] w-full p-2 mt-2 outline-none bg-transparent"
                            />
                            <div className="rounded-full w-8 h-8 flex items-center justify-center bg-red-500 text-white ml-2">
                                <ArrowRightIcon size={18} />
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col sm:flex-row gap-1">
                        <div className="flex flex-col items-start gap-1 w-full p-4 sm:p-6 md:p-8 text-sm sm:text-base md:text-[14px]">
                            <Link href="/#" className="whitespace-nowrap">Home</Link>
                            <Link href="/#" className="whitespace-nowrap">About</Link>
                            <Link href="/#" className="whitespace-nowrap">Services</Link>
                            <Link href="/#" className="whitespace-nowrap">Contact Us</Link>
                            <Link href="/#" className="whitespace-nowrap">Book Meetings</Link>
                            <Link href="/#" className="whitespace-nowrap">Privacy Terms</Link>
                            <Link href="/#" className="whitespace-nowrap">Terms & Conditions</Link>
                        </div>
                        <div className="flex flex-col items-start gap-1 w-full p-4 sm:p-6 md:p-8 text-sm sm:text-base md:text-[14px]">
                            <Link href="/#" className="whitespace-nowrap">Telegram</Link>
                            <Link href="/#" className="whitespace-nowrap">X/Twitter</Link>
                            <Link href="/#" className="whitespace-nowrap">Instagram</Link>
                            <Link href="/#" className="whitespace-nowrap">LinkedIn</Link>
                        </div>
                    </div>
                </div>

                {/* Email Contact */}
                <div className="flex items-start pt-12 sm:pt-12">
                    <Link
                        href="mailto:hello@assemblylabs.xyz"
                        className="text-2xl sm:text-3xl md:text-[32px] text-center"
                    >
                        hello@assemblylabs.xyz
                    </Link>
                </div>

                {/* Footer bottom */}
                <div className="flex items-center justify-center pt-3">
                    <p className="text-xs sm:text-sm md:text-[16px] text-center">
                        2025 ASSEMBLY LABS INC. / ALL RIGHTS RESERVED
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
