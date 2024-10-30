import React from 'react'
import { VscClose } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";

export default function Search(props) {

    return (
        <div className=''>



            <div action="" className='py-5  px-5 mt-10  flex  items-center justify-center mb-5 border-3 border-gray-400 bg-zinc-400 rounded-md'>
                <input type="" name="" id="" className='w-full bg-transparent  focus:outline-none bg-trasparent px-10 py-5' />
                <button className=' text-2xl flex justify-between gap-10'>
                    <CiSearch />
                    <VscClose />
                </button>
            </div>
        </div>

    )
}
