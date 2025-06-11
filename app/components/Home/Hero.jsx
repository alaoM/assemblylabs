import React from 'react'

const Hero = () => {
  return (
  <section className="relative h-screen w-full bg-black p-4 md:p-8 text-white space-y-20">
  {/* Background image */}
  <div 
    className="absolute inset-0 bg-center bg-cover z-0"
    style={{
      backgroundImage: `url('/home/bg.png')`
    }}
  />

  {/* Gradient overlay */}
  <div 
    className="absolute inset-0 z-0"
    style={{
      background: 'linear-gradient(165.96deg, rgba(50, 235, 41, 0.3) 0%, rgba(179, 24, 151, 0.3) 33.65%, rgba(224, 66, 129, 0.3) 62.98%, rgba(46, 197, 239, 0.3) 100%)'
    }}
  />

  {/* Content */}
  <div className="relative z-10 flex items-center justify-center h-full w-full">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-center">ASSEMBLY:LABS</h1>
  </div>
</section>

  )
}

export default Hero
