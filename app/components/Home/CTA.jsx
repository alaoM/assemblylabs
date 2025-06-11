import { ArrowElbowDownRightIcon } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

const CTA = () => {
  return (
    <section className="relative w-full bg-black text-white font-[family-name:var(--font-inter)] px-4 sm:px-6 md:px-8 py-8 space-y-12">
  {/* Header */}
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
      Let’s Assemble Your Playbook.
    </h1>
    <div className="flex items-center gap-2">
      <div className="border-r-2 border-t-2 border-red-500 h-[10px] w-[10px]" />
      <span className="text-[13px] font-semibold uppercase">Contact</span>
    </div>
  </div>

  {/* Main Content */}
  <div className="flex flex-col gap-4 w-full max-w-6xl mx-auto">
    {/* Name */}
    <input
      type="text"
      placeholder="Name *"
      className="outline-none border-b border-[#323232] bg-transparent text-white placeholder:text-[#5A5A5A] font-medium text-[16px] sm:text-[18px] md:text-[20px] py-2"
    />

    {/* Email */}
    <input
      type="email"
      placeholder="E-mail *"
      className="outline-none border-b border-[#323232] bg-transparent text-white placeholder:text-[#5A5A5A] font-medium text-[16px] sm:text-[18px] md:text-[20px] py-2"
    />

    {/* Project Name */}
    <input
      type="text"
      placeholder="Project Name *"
      className="outline-none border-b border-[#323232] bg-transparent text-white placeholder:text-[#5A5A5A] font-medium text-[16px] sm:text-[18px] md:text-[20px] py-2"
    />

    {/* Website */}
    <input
      type="text"
      placeholder="Website"
      className="outline-none border-b border-[#323232] bg-transparent text-white placeholder:text-[#5A5A5A] font-medium text-[16px] sm:text-[18px] md:text-[20px] py-2"
    />

    {/* Twitter / Telegram */}
    <input
      type="text"
      placeholder="Twitter / Telegram"
      className="outline-none border-b border-[#323232] bg-transparent text-white placeholder:text-[#5A5A5A] font-medium text-[16px] sm:text-[18px] md:text-[20px] py-2"
    />

    {/* Message */}
    <textarea
      rows={4}
      placeholder="Message (Tell us about your project) *"
      className="outline-none border-b border-[#323232] bg-transparent text-white placeholder:text-[#5A5A5A] font-medium text-[16px] sm:text-[18px] md:text-[20px] py-2 resize-none"
    />

    {/* Submit Button */}
    <button className="inline-flex items-center gap-2 font-medium text-[16px] sm:text-[18px] pt-4">
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