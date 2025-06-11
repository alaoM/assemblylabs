import React from 'react';

const StrategySections = () => {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden px-4 py-8">
      {/* Floating semi-transparent boxes */}
      <div className="absolute w-[10vw] max-w-[150px] h-[10vw] max-h-[150px] left-[80%] top-[15%] opacity-50 bg-white"></div>
      <div className="absolute w-[10vw] max-w-[150px] h-[10vw] max-h-[150px] left-[60%] top-[60%] opacity-50 bg-white"></div>
      <div className="absolute w-[10vw] max-w-[150px] h-[10vw] max-h-[150px] left-[10%] top-[80%] opacity-50 bg-white"></div>

      {/* Sections */}
      <div className="space-y-12 max-w-7xl mx-auto">
        {/* Section 1 */}
        <SectionHeader
          text="Go-To-Market Strategy"
          number="01"
          color="#F9452D"
        />

        {/* Section 2 */}
        <Section
          text="Influencer & KOL Marketing"
          number="02"
          color="rgba(255,255,255,0.40)"
        />

        {/* Section 3 */}
        <Section
          text="Crypto PR & Media Placement"
          number="03"
          color="rgba(255,255,255,0.40)"
        />

        {/* Section 4 */}
        <Section
          text="Community Growth"
          number="04"
          color="rgba(255,255,255,0.40)"
        />

        {/* Section 5 */}
        <Section
          text="IRL Activation & Events"
          number="05"
          color="rgba(255,255,255,0.40)"
          faded
        />
      </div>

      {/* Extra Element */}
      <div className="absolute left-[65%] top-[20%] w-[40vw] max-w-[600px] h-[50vh] max-h-[720px] bg-black rounded-3xl shadow-[0px_4px_25px_20px_rgba(251,25,150,0.25)] overflow-hidden"></div>
    </div>
  );
};

const SectionHeader = ({ text, number, color }) => (
  <div className="border-b border-[#323232] pb-5">
    <div className="flex justify-between items-center flex-wrap">
      <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-medium font-inter leading-tight">
        {text}
      </h2>
      <div className="flex items-center gap-1 mt-2 md:mt-0">
        <Bracket color={color} />
        <NumberIndicator number={number} color="white" />
        <Bracket color={color} />
      </div>
    </div>
  </div>
);

const Section = ({ text, number, color, faded = false }) => (
  <div className="border-b border-[#323232] pb-5">
    <div className="flex justify-between items-center flex-wrap">
      <h2
        className={`${
          faded ? 'opacity-20' : 'opacity-100'
        } text-white text-3xl md:text-5xl lg:text-6xl font-medium font-inter leading-tight`}
      >
        {text}
      </h2>
      <div className="flex items-center gap-1 mt-2 md:mt-0">
        <Bracket color="rgba(255,255,255,0.20)" />
        <NumberIndicator number={number} color={color} />
        <Bracket color="rgba(255,255,255,0.20)" />
      </div>
    </div>
  </div>
);

const Bracket = ({ color, size = '1.25rem' }) => (
  <span
    className="font-inter font-bold uppercase leading-none"
    style={{ color, fontSize: size }}
  >
    {'{'}
  </span>
);

const NumberIndicator = ({ number, color, size = '1.25rem' }) => (
  <span
    className="font-inter font-bold uppercase leading-none"
    style={{ color, fontSize: size }}
  >
    {number}
  </span>
);

export default StrategySections;
