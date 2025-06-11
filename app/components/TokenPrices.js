import React from 'react'

const TokenPrices = () => {
    const tokens = [
        { name: 'Ethereum', price: '$2000', change: '-0.01%' },
        { name: 'Bitcoin', price: '$65,000', change: '+1.25%' },
        { name: 'Solana', price: '$150', change: '+0.45%' },
        { name: 'Cardano', price: '$0.45', change: '-0.10%' },
        { name: 'Avalanche', price: '$35', change: '+2.00%' },
    ]

    return (
        <div className="bg-white w-full overflow-hidden ">
            <div className="animate-marquee flex whitespace-nowrap">
                {tokens.map((token, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-end gap-1 px-4 "
                    >
                        <div className='flex items-center gap-2'>
                            <span className="font-semibold">{token.name}</span>
                            <span>{token.price}</span>
                        </div>
                        <span
                            className={`${token.change.startsWith('-') ? 'text-red-500' : 'text-green-500'
                                } text-sm`}
                        >
                            {token.change}
                        </span>
                    </div>
                ))}
                {/* Duplicate tokens for seamless scrolling */}
                {tokens.map((token, index) => (
                    <div
                        key={`duplicate-${index}`}
                         className="flex flex-col items-end gap-1 px-4 "
                    >
                         <div className='flex items-center gap-2'>
                        <span className="font-semibold">{token.name}</span>
                        <span>{token.price}</span>
                        </div>
                        <span
                            className={`${token.change.startsWith('-') ? 'text-red-500' : 'text-green-500'
                                } text-sm`}
                        >
                            {token.change}
                        </span>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default TokenPrices
