import Image from 'next/image'
import React from 'react'

export default function Card(props) {
  return (
    <div className='w-[100%] h-96 overflow-hidden '>

      <div className='w-full h-full relative transition-all ease-out duration-1000 hover:scale-125'>
        <Image className='object-contain transition-all ease-out duration-500 hover:scale-125' alt="images" fill sizes='25vw' src={props.imageUrl}></Image>
        <div className='absolute w-full h-full flex justify-center items-center'>
          <p className='text-white text-[15px] font-bolder shadow-md uppercase '>{props.text}</p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-slate-600 opacity-0 hover:opacity-40 transition-opacity ease-in duration-500" ></div>
      </div>
    </div>
  )
}
