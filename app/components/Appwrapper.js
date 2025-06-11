import React from 'react'
import TokenPrices from './TokenPrices'
import Navbar from './Navbar'
import Footer from './Footer'

const Appwrapper = ({ children }) => {
    return (
        <div className="w-full  mx-auto flex flex-col min-h-screen">
            {/* Fixed header container */}
            <div className="fixed top-0 left-0 w-full z-50">
                <TokenPrices />
                <Navbar />
            </div>

            {/* Main content with padding to offset the fixed header */}


            <main className='flex flex-col'>
               
               {children}
            </main>

            <Footer />
        </div>
    )
}

export default Appwrapper
