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
      border: 'border-[#FB1996] shadow-[0_0_10px_10px_rgba(251,25,150,0.5)]',
    },
    {
      id: '02',
      title: 'Influencer & KOL Marketing',
      image: '/KOL.svg',
      bullets: [
        'Access to top Korean YouTubers, Twitter voices, and Telegram operators',
        'Transparent pricing, performance-based tracking',
      ],
      border: 'border-[#19FB5D] shadow-[0_0_10px_10px_rgba(25,251,93,0.5)]',
    },
    {
      id: '03',
      title: 'Crypto PR & Media Placement',
      image: '/PR.svg',
      bullets: [
        'Get featured in Korea’s top crypto publications:',
        'Sponsored articles, interviews, and banner ads',
        'Full Korean translation and editorial support',
      ],
      border: 'border-[#362FFF] shadow-[0_0_10px_10px_rgba(54,47,255,0.5)]',
    },
    {
      id: '04',
      title: 'Community Growth',
      image: '/CG.svg',
      bullets: [
        'Bilingual community managers and content creators',
        'Local Telegram group setup and moderation',
        'Discord integration and Korean community segmentation',
      ],
      border: 'border-[#CE4901] shadow-[0_0_10px_10px_rgba(206,73,1,0.5)]',
    },
    {
      id: '05',
      title: 'IRL Activation & Events',
      image: '/AE.svg',
      bullets: [
        'Seoul meetups, influencer dinners, and conference booths',
        'Coverage across Korean social media and news',
        'AMA events with live interpretation and media syndication',
      ],
      border: 'border-[#7300FF] shadow-[0_0_10px_10px_rgba(115,0,255,0.5)]',
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Background shapes */}
      <div className="hidden md:block w-36 h-36 absolute left-[80%] top-[10%] opacity-50 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full blur-3xl"></div>
      <div className="hidden md:block w-36 h-36 absolute left-[60%] top-[50%] opacity-50 bg-gradient-to-br from-green-500 to-green-700 rounded-full blur-3xl"></div>
      <div className="hidden md:block w-36 h-36 absolute left-[10%] top-[80%] opacity-50 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="flex flex-col items-center gap-6 px-4 py-8 md:px-12 lg:px-24">
       {data.map((item, index) => (
  <div
    key={item.id}
    className={`w-full max-w-6xl border-b border-[#323232] py-4 transition-opacity duration-300 ${
      index === activeIndex ? 'opacity-100' : 'opacity-40'
    }`}
    onClick={() => setActiveIndex(index)}
  >
    <div className="flex flex-col md:flex-row items-start justify-between gap-4">
      {/* Title and ID */}
      <div className="flex-1">
        <h2 className="text-white text-3xl md:text-5xl font-medium font-inter">
          {item.title}
        </h2>
      </div>
      <div className="flex items-center gap-1">
        <span
          className={`text-sm md:text-base font-bold uppercase ${
            index === activeIndex ? 'text-[#F9452D]' : 'text-white/20'
          }`}
        >
          {'{'}
        </span>
        <span
          className={`text-sm md:text-base font-bold uppercase ${
            index === activeIndex ? 'text-white' : 'text-white/40'
          }`}
        >
          {item.id}
        </span>
        <span
          className={`text-sm md:text-base font-bold uppercase ${
            index === activeIndex ? 'text-[#F9452D]' : 'text-white/20'
          }`}
        >
          {'}'}
        </span>
      </div>
    </div>

    {/* Image and Bullets */}
    {index === activeIndex && (
      <div className="mt-4 flex flex-col md:flex-row items-start gap-4">
        <div className="w-full md:w-1/3 relative aspect-[4/3] bg-[#1c1c1c] rounded-lg overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>
        <ul className="flex-1 list-disc pl-6 space-y-2 text-white text-base md:text-lg">
          {item.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
))}

      </div>
    </div>
  );
};

export default Goto;
