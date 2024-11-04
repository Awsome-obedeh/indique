import { Fruktur } from 'next/font/google'
import React from 'react'
// If loading a variable font, you don't need to specify the font weight
const fruktur = Fruktur({
    subsets: ['latin'],
    display: 'swap',
    weight: "400"
})
export default function VideoAd() {
  return (
    <div className="mt-16 relative ">

    <video className='absolute' width="100%" height="80vh" muted playsInline autoPlay loop preload="none">
      <source src="/indique2.mp4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
    <div className="bg-white shadow-md absolute  top-[35px] left-[100px] p-5 px-10 flex flex-col gap-5">
      <h2 className="font-bolder">Our Hair</h2>
      <h1 className="uppercase">Pure collection</h1>

      <p className={fruktur.className}>Pure is our flagship collection of<br></br> genuine 
        virgin remy hair from the <br></br>temples of India—completely natural <br/>
        and untouched. This model is wearing <br></br> 
        Pure Wavy.

      </p>

      <button className='w-max px-4 py-2 text-white uppercase bg-black'>Shop Pure</button>
    </div>
  </div>
  )
}
