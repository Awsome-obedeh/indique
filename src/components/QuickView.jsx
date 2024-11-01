import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function QuickView() {
    return (
        <div className='h-[90vh] w-full px-16 lg:px-32 flex flex-col justify-around mt-16'>
            <div className='text-center flex items-center justify-center mb-10'>
                <Link href="/" className=' text-center px-5 py-2 w-max text-2xl border-1 border-gray-200 hover: border-2 hover:border-black'>View All</Link>
            </div>

            <div className='h-full w-full bg-black flex flex-col gap-4 md:flex-row'>
                <div className='bg-zinc-600 w-full h-full relative '>
                    <Image
                        className='absolute object-cover z-10 hover:opacity-0 transition-opacity ease-out transition-duration-500'
                        alt=""
                        sizes="25vw"
                        fill
                        src="https://images.unsplash.com/photo-1704288899561-7d173949f76a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />


                    <div className='relative h-full w-full'>

                        <Image
                            className='object-cover'
                            alt=""
                            sizes="25vw"
                            fill
                            src="https://plus.unsplash.com/premium_photo-1673781991836-3a655398b6f0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

                        <div className="flex justify-center absolute bottom-0 w-full transition-opacity ease">

                            <button className='mx-auto block rounded-sm w-[90%] bg-black text-white text-center px-3 py-[5px]  bottom-2 text-sm'>Quick View</button>
                        </div>
                    </div>
                </div>
                <div className='bg-zinc-600 w-full h-full relative'>
                    <Image
                        className='object-cover z-10 hover:opacity-0 transition-opacity ease-in transition-duration-500 '
                        alt=""
                        sizes="25vw"
                        fill
                        src="https://plus.unsplash.com/premium_photo-1673781991750-2a3a427f65f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <div className='relative h-full w-full'>

                        <Image
                            className='object-cover'
                            alt=""
                            sizes="25vw"
                            fill
                            src="https://images.unsplash.com/photo-1676385901160-a86dc9ccdfe1?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

                        <div className="flex justify-center absolute bottom-0 w-full transition-opacity ease">

                            <button className='mx-auto block rounded-sm w-[90%] bg-black text-white text-center px-3 py-[5px]  bottom-2 text-sm'>Quick View</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
