import { ArrowElbowDownRightIcon } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

const CTA = () => {
    return (
        <section className="relative w-full bg-black text-white font-[family-name:var(--font-inter)] px-[60px] py-18">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pl-[40px]">
                <h1
                    className=" text-white text-[82px] font-bold leading-[107.52px] tracking-[-7.84px]"
                >
                    Let’s Assemble Your Playbook.
                </h1>
                <div className='flex items-center gap-2 text-super'>
                    <div className='border-r-2 border-t-2 border-red-500 h-[10px] w-[10px]' />
                    <span className='text-[10px] font-semibold uppercase'>contact</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col gap-4 w-full pl-[40px] pr-[30px] pt-8 mx-auto">
                {/* Name */}
                <input
                    type="text"
                    placeholder="Name *"
                    className="outline-none border-b border-[#fff]/70 bg-transparent text-white placeholder:text-[#5A5A5A] font-medium text-[16px] sm:text-[18px] md:text-[20px] py-1.5"
                />

                {/* Email */}
                <input
                    type="email"
                    placeholder="E-mail *"
                    className="outline-none border-b border-[#fff]/70 bg-transparent text-white placeholder:text-[#5A5A5A] font-medium text-[16px] sm:text-[18px] md:text-[20px] py-1.5"
                />

                {/* Project Name */}
                <input
                    type="text"
                    placeholder="Project Name *"
                    className="outline-none border-b border-[#fff]/70 bg-transparent text-white placeholder:text-[#5A5A5A] font-medium text-[16px] sm:text-[18px] md:text-[20px] py-1.5"
                />

                {/* Website */}
                <input
                    type="text"
                    placeholder="Website"
                    className="outline-none border-b border-[#fff]/70 bg-transparent text-white placeholder:text-[#5A5A5A] font-medium text-[16px] sm:text-[18px] md:text-[20px] py-1.5"
                />

                {/* Twitter / Telegram */}
                <input
                    type="text"
                    placeholder="Twitter / Telegram"
                    className="outline-none border-b border-[#fff]/70 bg-transparent text-white placeholder:text-[#5A5A5A] font-medium text-[16px] sm:text-[18px] md:text-[20px] py-1.5"
                />

                {/* Message */}
                <textarea
                    rows={3}
                    placeholder="Message (Tell us about your project) *"
                    className="outline-none border-b border-[#fff]/70 bg-transparent text-white placeholder:text-[#5A5A5A] font-medium text-[16px] sm:text-[18px] md:text-[20px] py-1.5 resize-none"
                />

                {/* Submit Button */}
                <button className="inline-flex items-center gap-2 font-medium text-[16px] sm:text-[18px] pt-4 cursor-pointer">
                    <span className="text-red-500">
                        <ArrowElbowDownRightIcon size={16} />
                    </span>
                    Get in touch
                </button>
            </div>
        </section>

    )
}

export default CTA