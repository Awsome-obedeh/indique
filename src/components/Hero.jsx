import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Fruktur } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const fruktur = Fruktur({
    subsets: ['latin'],
    display: 'swap',
    weight: "400"
})


export default function Hero() {
    return (
        <>
            <div className='w-full bg-black px-2 py-1 '>
                <p className='text-white text-center'>This is a text for swiper js</p>
            </div>
            <div className='hero flex justify-center items-end pb-10  md:items-center md:pb-0'>

                <div className='px-4 text-center'>

                    <h1 className={`text-3xl text-bold md:text-7xl md:text-bolder text-white text-shadow uppercase ${fruktur.className} `}>Indique</h1>
                    <p className='text-[10px] text-white py-3 md:text-[15px]'>Since 2007: The Original Hair Brand</p>
                    <Link href="/" className='border boerder-1 border-white w-max px-4 py-2 text-white text-[12px]  text-bolder md:text-[15px]'>Explore Our Collections</Link>
                </div>
            </div>
        </>
    )
}
