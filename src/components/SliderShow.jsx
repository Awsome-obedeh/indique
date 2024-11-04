"use client"
import { Tienne } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
const tieman = Tienne({
    subsets: ['latin'],
    display: 'swap',
    weight: "400"
})

const slider = [
    {
        id: 1,
        url: "https://img.freepik.com/premium-photo/beautiful-brunette-woman-portrait_325164-211.jpg?w=996"
    },
    {
        id: 2,
        url: "https://img.freepik.com/free-photo/close-up-glad-charming-tender-feminine-african-american-woman-silver-elegant-evening-dress-press-palms-chest-tilting-head-flirty-blushing-receive-compliment-thankful-standing-blue-background_1258-82218.jpg?ga=GA1.1.654265270.1718289621&semt=ais_siglip"
    },
    {
        id: 3,
        url: "https://img.freepik.com/free-photo/charming-dreamy-black-young-birthday-girl-elegant-silver-glittering-dress-earrings-smiling-deligh_1258-133288.jpg?ga=GA1.1.654265270.1718289621&semt=ais_siglip"
    }
]
export default function SliderShow() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev === slider.length - 1 ? 0 : prev + 1))

        }, 2500)

        // whenusing interval in useEfcts you cleanup teh interval with clearInterval
        return () => clearInterval(interval)
    }, [])

    return (

        <>
            {/* <div className=' h-screen overflow-hidden '>
                <div className='w-max h-full flex  transition-all ease-in-out duration-1000' style={{ transform: `translateX(-${current * 100}vw)` }}>

                    {
                        slider.map(slide => (
                            <div className='relative w-screen h-screen overflow-hidden'>
                                <Image className="object-cover" src={slide.url} fill ></Image>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className=' mt-8 text-center flex items-center justify-center flex-col'> 
                <h2 className={`${tieman.className} text-5xl font-extrabold uppercase`}>The New Lotus Collection</h2>
                <p className='text-center text-2xl font-base py-3'>Rare, luxurious virgin hair from the rural villages
                    of Cambodia offering unmatched density, fullness, and durability.  <br/>
                   Experience the pinnacle of luxury hair with Indique's Lotus Collection—an investment in beauty, quality, and heritage that<br>
                </br> promises to elevate your hair game to extraordinary new heights.</p>
                <Link href="/" className='border bg-black border-1 bg-dark border-white w-max px-10 py-3 text-white text-[12px]  text-bolder md:text-[15px] rounded-sm'>Discover The Collections</Link>
            </div> */}

<video width="100%" height="100%" muted playsInline autoPlay loop  preload="none">
      <source src="/indique1.mp4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
        </>


    )
}
