'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const Goto = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      id: '01',
      title: 'Go-To-Market Strategy',
      image: '/gtm.png',
      bullets: [
        'Localization of value proposition, roadmap, and messaging',
        'Ecosystem entry strategy: what to say, where to say it, who to partner with',
      ],
      border: 'border-[#FB1996] shadow-[0_0_10px_10px_rgba(251,25,150,0.5)]'
    },
    {
      id: '02',
      title: 'Influencer & KOL Marketing',
      image: '/KOL.svg',
      bullets: [
        'Access to top Korean YouTubers, Twitter voices, and Telegram operators',
        'Transparent pricing, performance-based tracking'
      ],
      border: 'border-[#19FB5D] shadow-[0_0_10px_10px_rgba(25,251,93,0.5)]'
    },
    {
      id: '03',
      title: 'Crypto PR & Media Placement',
      image: '/PR.svg',
      bullets: [
        'Get featured in Korea’s top crypto publications:',
        'Sponsored articles, interviews, and banner ads',
        'Full Korean translation and editorial support'
      ],
      border: 'border-[#362FFF] shadow-[0_0_10px_10px_rgba(54,47,255,0.5)]'
    },
    {
      id: '04',
      title: 'Community Growth',
      image: '/CG.svg',
      bullets: [
        'Bilingual community managers and content creators',
        'Local Telegram group setup and moderation',
        'Discord integration and Korean community segmentation'
      ],
      border: 'border-[#CE4901] shadow-[0_0_10px_10px_rgba(206,73,1,0.5)]'
    },
    {
      id: '05',
      title: 'IRL Activation & Events',
      image: '/AE.svg',
      bullets: [
        'Seoul meetups, influencer dinners, and conference booths',
        'Coverage across Korean social media and news',
        'AMA events with live interpretation and media syndication'
      ],
      border: 'border-[#7300FF] shadow-[0_0_10px_10px_rgba(115,0,255,0.5)]'
    }
  ];

  return (
    <section className=" relative w-full bg-black p-4 md:p-8 text-white font-[family-name:var(--font-inter)] space-y-20">
      {/* Header */}
      <div className='flex justify-end text-white '>
        <div className='flex items-center gap-2'>
          <div className='border-r-3 border-t-3 border-red-500 h-[10px] w-[10px]' />
          <span className='text-[13px] font-semibold uppercase'>Where we Excel</span>
        </div>
      </div>

      {/* Main Content */}
     <div className="flex flex-col md:flex-row gap-4 mt-4 items-stretch">
  {/* LEFT COLUMN */}
  <div className="w-full md:w-[70%] flex flex-col gap-0">
    {data.map((item, index) => (
      <div
         key={item.id}
  className={`border-b border-[#323232] cursor-pointer items-center py-2 ${activeIndex === index ? 'text-[#FFFFFF]' : 'text-[#5A5A5A]'}`}
 
        onClick={() => setActiveIndex(index)}
        // onMouseEnter={() => setActiveIndex(index)}
      >
        <h3 className="text-[44px] sm:text-[32px] md:text-[42px] lg:text-[52px] leading-none py-3 sm:py-5">
          {item.title}


           <span
          className="font-[family-name:var(--font-inter)] font-semibold text-[13px] ml-4 align-super whitespace-nowrap "
          style={{ flexShrink: 0 }}
        >
          <span
            className={`${
              activeIndex === index ? 'text-[#F9452D]' : 'text-[#5A5A5A]'
            }`}
          >{`{ `}</span>
          <span
            className={`${
              activeIndex === index ? 'text-[#fff]' : 'text-[#5A5A5A]'
            }`}
          >
            {item.id}
          </span>
          <span
            className={`${
              activeIndex === index ? 'text-[#F9452D]' : 'text-[#5A5A5A]'
            }`}
          >{` }`}</span>
        </span>
        </h3>
        
      </div>
    ))}
  </div>

  {/* RIGHT COLUMN */}
  <div
    
  className={`w-full md:w-[30%] rounded-2xl border-2 flex flex-col justify-center items-center p-5 space-y-5 ${data[activeIndex].border}`}>


    <div>
      <Image
        alt={data[activeIndex].title}
        src={data[activeIndex].image}
        width={150}
        height={150}
        className="object-contain"
      />
    </div>
    <h3 className="font-[family-name:var(--font-babak)] text-[28px] md:text-[32px] lg:text-[36px] text-center">
      {data[activeIndex].title}
    </h3>
    <div>
      <ul className="list-disc pl-4 md:pl-6 text-[12px] md:text-[14px] lg:text-[16px] space-y-2 md:space-y-3">
        {data[activeIndex].bullets.map((bullet, idx) => (
          <li key={idx}>{bullet}</li>
        ))}
      </ul>
    </div>
  </div>
</div>

    </section>
  );
};

export default Goto;
