import Image from 'next/image'
import React from 'react'

const Patners = () => {
  return (
    <div className='flex gap-0'>
        <div className='just'>
            <Image src={"/patners/1.png"} alt="Patner 1" width={150} height={150} className='object-contain' />
        </div>
    </div>
  )
}

export default Patners