import React from 'react';

const StrategySections = () => {
  return (
    <div className="relative w-[1920px] h-[1080px] bg-black overflow-hidden">
      {/* Floating semi-transparent boxes */}
      <div className="absolute w-[150px] h-[150px] left-[1570px] top-[166px] opacity-50 bg-white"></div>
      <div className="absolute w-[150px] h-[150px] left-[1169px] top-[682px] opacity-50 bg-white"></div>
      <div className="absolute w-[150px] h-[150px] left-[186px] top-[914px] opacity-50 bg-white"></div>

      {/* Section 1 */}
      <div className="absolute left-[60px] top-[166px] w-[1180px] h-[142px] flex flex-col items-start">
        <div className="relative w-full h-[142px] flex flex-col justify-start items-start pt-[10px] pb-[20px] overflow-hidden">
          <div className="relative w-full h-[112.2px]">
            <div className="absolute top-[-0.1px] left-0 flex flex-col">
              <div className="flex flex-col">
                <div className="text-white text-[90px] font-medium font-inter leading-[1.2]">
                  Go-To-Market Strategy
                </div>
              </div>
            </div>
            <div className="absolute top-[-1px] left-[875.92px] flex items-center gap-[4px]">
              <Bracket color="#F9452D" />
              <NumberIndicator number="01" color="white" />
              <Bracket color="#F9452D" />
            </div>
          </div>
          <div className="absolute top-0 left-0 w-[1180px] h-[142px] border-b border-[#323232]"></div>
        </div>
      </div>

      {/* Section 2 */}
      <Section
        top={318}
        text="Influencer & KOL Marketing"
        indicatorLeft={1001.03}
        number="02"
      />

      {/* Section 3 */}
      <Section
        top={470}
        text="Crypto PR & Media Placement"
        indicatorLeft={1109.97}
        number="03"
      />

      {/* Section 4 */}
      <Section
        top={622}
        text="Community Growth"
        indicatorLeft={723.13}
        number="04"
      />

      {/* Section 5 */}
      <div className="absolute left-[60px] top-[774px] w-[1180px] h-[142px] flex flex-col items-start">
        <div className="relative w-full pt-[10px] pb-[20px] overflow-hidden flex flex-col">
          <div className="w-full flex items-start gap-[24px]">
            <div className="opacity-15 flex flex-col">
              <div className="flex flex-col">
                <div className="text-white text-[90px] font-medium font-inter leading-[1.2]">
                  IRL Activation & Events
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[4px]">
              <Bracket color="rgba(255,255,255,0.20)" size="20px" />
              <NumberIndicator number="05" color="rgba(255,255,255,0.40)" size="20px" />
              <Bracket color="rgba(255,255,255,0.20)" size="20px" />
            </div>
          </div>
          <div className="absolute top-0 left-0 w-[1180px] h-[144.88px] border-b border-[#323232]"></div>
        </div>
      </div>

      {/* Extra element example */}
      <div className="absolute left-[1240px] top-[180px] w-[600px] h-[720px] bg-black rounded-[32px] shadow-[0px_4px_25px_20px_rgba(251,25,150,0.25)] overflow-hidden"></div>
    </div>
  );
};

const Section = ({ top, text, indicatorLeft, number }) => {
  return (
    <div className={`absolute left-[60px] top-[${top}px] w-[1180px] h-[142px] flex flex-col items-start`}>
      <div className="relative w-full pt-[10px] pb-[20px] overflow-hidden flex flex-col">
        <div className="relative w-full h-[112.2px]">
          <div className="absolute top-0 left-0 opacity-15 flex flex-col">
            <div className="flex flex-col">
              <div className="text-white text-[90px] font-medium font-inter leading-[1.2]">
                {text}
              </div>
            </div>
          </div>
          <div className={`absolute top-[-1px] left-[${indicatorLeft}px] flex items-center gap-[4px]`}>
            <Bracket color="rgba(255,255,255,0.20)" />
            <NumberIndicator number={number} color="rgba(255,255,255,0.40)" />
            <Bracket color="rgba(255,255,255,0.20)" />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-[1180px] h-[142.2px] border-b border-[#323232]"></div>
      </div>
    </div>
  );
};

const Bracket = ({ color, size = "16px" }) => (
  <div className="flex flex-col">
    <div className="flex justify-center flex-col">
      <div
        className="font-inter font-bold uppercase leading-[1.2]"
        style={{ color: color, fontSize: size }}
      >
        {'{'}
      </div>
    </div>
  </div>
);

const NumberIndicator = ({ number, color, size = "16px" }) => (
  <div className="flex flex-col">
    <div className="flex justify-center flex-col">
      <div
        className="font-inter font-bold uppercase leading-[1.2]"
        style={{ color: color, fontSize: size }}
      >
        {number}
      </div>
    </div>
  </div>
);

export default StrategySections;
