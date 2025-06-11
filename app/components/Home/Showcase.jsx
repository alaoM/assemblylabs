import { ArrowArcRightIcon, ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import React from 'react'

const Showcase = () => {
    return (
        <section className="relative w-full bg-white text-black font-[family-name:var(--font-inter)] px-4 sm:px-6 md:px-8 py-8 space-y-12">
            <div className='flex flex-col justify-center items-center mt-10'>
                <h1 className='text-[#0C0C0C] font-semibold text-6xl'>Let Us Show You What</h1>
                <h1 className='text-[#0C0C0C] font-semibold text-6xl'>We Have Assembled.</h1>
                <p className='font-[family-name:var(--font-bebas_nue)] pt-10 text-4xl'>2025</p>

            </div>
            <div className='flex flex-col space-y-10'>
            <div className='flex flex-col md:flex-row sm:gap-5 gap-24 justify-evenly'>
 <div className='flex flex-col mt-10'>
                <Image alt='showcase' src='/home/xoxo.png' width={550} height={550} className='shadow-lg' />
                <div className='mt-10'>
                    <h1 className='text-[#0c0c0c] text-[18px] font-semibold'>Meet XOXO - AI Agent of the Ecosystem</h1>
                    <h3 className='text-[#0c0c0c]/50 text-[14px] font-medium'>Bringing AI-Powered Engagement to XOXO</h3>
                    <div className='flex items-center gap-3 mt-8 uppercase'>
                        <p className='rounded-xl px-2 py-1 border text-[12px]'>  Protocols</p>
                        <p className='rounded-xl px-2 py-1 border text-[12px]'>  AI</p>

                    </div>
                </div>

            </div>
            <div className='flex flex-col mt-10'>
                <Image alt='showcase' src='/home/gtic.png' width={450} height={450} className='shadow-lg' />
                <div className='mt-10'>
                  <h1 className='text-[#0c0c0c] text-[18px] font-semibold'>Growing The Internet Computer in the XOXO Region</h1>
                    <h3 className='text-[#0c0c0c]/50 text-[14px] font-medium'>Onboarding developers & Startups onto the Internet Computer Protocol.</h3>
                    <div className='flex items-center gap-3 mt-8 uppercase'>
                        <p className='rounded-xl px-2 py-1 border text-[12px]'>  Protocols</p>

                    </div>
                </div>

            </div>
            </div>
                <div className='flex gap-24 justify-center'>
 <div className='flex flex-col mt-10'>
                <Image alt='showcase' src='/home/lcp.png' width={550} height={550} className='shadow-lg' />
                <div className='mt-10'>
                    <h1 className='text-[#0c0c0c] text-[18px] font-semibold'>Building a New Generation of Launchpad</h1>
                    <h3 className='text-[#0c0c0c]/50 text-[14px] font-medium'>Building The Future of Community-driven Fundraising.</h3>
                    <div className='flex items-center gap-3 mt-8 uppercase '>
                        <p className='rounded-xl px-2 py-1 border text-[12px]'>  Infrastructure</p>

                    </div>
                </div>

            </div>
             
            </div>

            <div className='flex  flex-col md:flex-row sm:gap-5 gap-24 justify-evenly'>
 
            <div className='flex flex-col mt-10'>
                <Image alt='showcase' src='/home/ltf.png' width={550} height={550} className='shadow-lg' />
                <div className='mt-10'>
                  <h1 className='text-[#0c0c0c] text-[18px] font-semibold'>The Launch of Tesseract Finance</h1>
                    <h3 className='text-[#0c0c0c]/50 text-[14px] font-medium'>Yield Farming Protocol</h3>
                    <div className='flex items-center gap-3 mt-8 uppercase'>
                        <p className='rounded-xl px-2 py-1 border text-[12px]'>  DeFi</p>

                    </div>
                </div>

            </div>
            <div className='flex flex-col mt-10'>
                <Image alt='showcase' src='/home/cal.png' width={450} height={450} className='shadow-lg' />
                <div className='mt-10'>
                    <h1 className='text-[#0c0c0c] text-[18px] font-semibold'>Disrupting the Chain-Abstraction Landscape </h1>
                    <h3 className='text-[#0c0c0c]/50 text-[14px] font-medium'>The Launch of Klaster - Chain Abstraction Protocol</h3>
                    <div className='flex items-center gap-3 mt-8 uppercase '>
                        <p className='rounded-xl px-2 py-1 border text-[12px]'>  Defi</p>
                        <p className='rounded-xl px-2 py-1 border text-[12px]'>  Protocols</p>
                        <p className='rounded-xl px-2 py-1 border text-[12px]'>  Infrastructure</p>

                    </div>
                </div>

            </div>
            </div>
            
            </div>
            <div className='flex justify-end items-center text-4xl gap-2 text-[#0B0B0C] font-medium'>
                <ArrowRightIcon size={32}/>
                <p>All Cases</p>
            </div>



        </section>
    )
}

export default Showcase