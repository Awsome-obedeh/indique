import Image from 'next/image'
import React from 'react'

export default function Card() {
  return (
    <div className='w-[25%] h-96 relative'>
      <Image alt="images" fill sizes='25vw' src="https://www.indiquehair.com/cdn/shop/files/Indique_SEA_Bali_Straight.jpg?v=1691698135&width=540"></Image>
      <div className='absolute w-full h-full flex justify-center items-center'>
        <p className='text-white text-3xl font-bolder shadow-md uppercase '>Straight hair </p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-slate-600 opacity-0 hover:opacity-40 transition-opacity ease-in duration-500" ></div>
    </div>
  )
}
