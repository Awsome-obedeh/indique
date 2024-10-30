"use client"
import React, { useState } from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";


import Link from 'next/link';
import Search from './Search';
import Image from 'next/image';

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false)
  const [dropDown,setDropDown]=useState(false)

  const handleDropDown=()=>{
    setDropDown(true)
  }

  const handleShowSearch = () => {
    setShowSearch(true)
  }
  return (
    // large screen navbar
    <div className='md:px-16  bg-slate-400 w-full    lg:px-32 '>
      {/* socian icons */}
      <div className='flex justify-end gap-3 text-xs'>
        <IoLogoInstagram />
        <FaFacebook />
        <FaYoutube />
        <FaPinterest />
        <FaTiktok />


      </div>
      {
        showSearch ? <Search state={showSearch} /> : (
          <div className='flex justify-center gap-20 items-center ml-auto'>


            <p className='text-2xl cursor-pointer' onClick={handleShowSearch}>
              <CiSearch />

            </p>

            <div className='flex gap-3 items-center relative'>
              <div className=' effect '>
                <Link onMouseLeave={()=>setDropDown(false)} onMouseEnter={handleDropDown} className="flex items-center gap-[5px] text-sm font-[100]" href="/shop">Shop  <GoChevronDown /></Link>
                {/* drop down */}
                {
                  dropDown &&(
                    <div className=" flex justify-between px-5 py-4 h-[80vh]] w-full bg-white shadow-neutral-400 shadow-lg  absolute mt-2">
                    <div className=" flex flex-col gap-3">
                      <h4 className='text-[10px] uppercase font-semibold'>Custom wigs</h4>
                      <p className='text-[10px] uppercase font-semibold'>Gray Hair</p>
                      <p className='text-[10px] uppercase font-semibold'>Straight Hair</p>
                      <p className='text-[10px] uppercase font-semibold'>Wavy Hair</p>
                      <p className='text-[10px] uppercase font-semibold'>Curly Hair</p>
                      <p className='text-[10px] uppercase font-semibold'>Closures & Frontals</p>
                      <p className='text-[10px] uppercase font-semibold'>Braiding hair</p>
                      <p className='text-[10px] uppercase font-semibold'>Tape extensions</p>
                      <p className='text-[10px] uppercase font-semibold'>Wigs</p>
                      <p className='text-[10px] uppercase font-semibold'>Hair care</p>
                      <p className='text-[10px] uppercase font-semibold'>All</p>
                      <p className='text-[10px] uppercase font-semibold'>Hair Care Guid</p>
  
                    </div>
                    <div className=" flex flex-col gap-3">
                      <h4 className='text-[10px] uppercase font-semibold'>Custom wigs</h4>
                      <p className='text-[10px] uppercase font-semibold'>Gray Hair</p>
                      <p className='text-[10px] uppercase font-semibold'>Straight Hair</p>
                      <p className='text-[10px] uppercase font-semibold'>Wavy Hair</p>
                      <p className='text-[10px] uppercase font-semibold'>Curly Hair</p>
                      <p className='text-[10px] uppercase font-semibold'>Closures & Frontals</p>
                      <p className='text-[10px] uppercase font-semibold'>Braiding hair</p>
                      <p className='text-[10px] uppercase font-semibold'>Tape extensions</p>
                      <p className='text-[10px] uppercase font-semibold'>Wigs</p>
                      <p className='text-[10px] uppercase font-semibold'>Hair care</p>
                      <p className='text-[10px] uppercase font-semibold'>All</p>
                      <p className='text-[10px] uppercase font-semibold'>Hair Care Guid</p>
  
                    </div>
                    <div className=" flex flex-col gap-3">
                      <h4 className='text-[10px] uppercase font-semibold'>Custom wigs</h4>
                      <p className='text-[10px] uppercase font-semibold'>Gray Hair</p>
                      <p className='text-[10px] uppercase font-semibold'>Straight Hair</p>
                      <p className='text-[10px] uppercase font-semibold'>Wavy Hair</p>
                      <p className='text-[10px] uppercase font-semibold'>Curly Hair</p>
                      <p className='text-[10px] uppercase font-semibold'>Closures & Frontals</p>
                      <p className='text-[10px] uppercase font-semibold'>Braiding hair</p>
                      <p className='text-[10px] uppercase font-semibold'>Tape extensions</p>
                      <p className='text-[10px] uppercase font-semibold'>Wigs</p>
                      <p className='text-[10px] uppercase font-semibold'>Hair care</p>
                      <p className='text-[10px] uppercase font-semibold'>All</p>
                      <p className='text-[10px] uppercase font-semibold'>Hair Care Guid</p>
  
                    </div>
                    <div className=" flex flex-col gap-3">
                      <h4 className='text-[10px] uppercase font-semibold'>Custom wigs</h4>
                      <p className='text-[10px] uppercase font-semibold'>Gray Hair</p>
                      <p className='text-[10px] uppercase font-semibold'>Straight Hair</p>
                      <p className='text-[10px] uppercase font-semibold'>Wavy Hair</p>
                      <p className='text-[10px] uppercase font-semibold'>Curly Hair</p>
                      <p className='text-[10px] uppercase font-semibold'>Closures & Frontals</p>
                      <p className='text-[10px] uppercase font-semibold'>Braiding hair</p>
                      <p className='text-[10px] uppercase font-semibold'>Tape extensions</p>
                      <p className='text-[10px] uppercase font-semibold'>Wigs</p>
                      <p className='text-[10px] uppercase font-semibold'>Hair care</p>
                      <p className='text-[10px] uppercase font-semibold'>All</p>
                      <p className='text-[10px] uppercase font-semibold'>Hair Care Guid</p>
  
                    </div>
                  </div>
                  )
                }
               
              </div>
              <div>
                <Link className="flex items-center gap-[5px] text-sm font-[100]" href="/shop">Collections  <GoChevronDown /></Link>
              </div>
              <div>
                <Link className="flex items-center gap-[5px] text-sm font-[100]" href="/shop">Custom Wigs  <GoChevronDown /></Link>
              </div>

              <div>
                <Link className="flex items-center gap-[5px] text-sm font-[100]" href="/shop">Shop  <GoChevronDown /></Link>
              </div>
              <div>
                <Link className="flex items-center gap-[5px] text-sm font-[100]" href="/shop">Shop  <GoChevronDown /></Link>
              </div>

              <div className="w-[100px] h-[100px] relative" >
                <Image fill sizes='25vw' className='object-contain' src="https://www.indiquehair.com/cdn/shop/files/indiquehair-Logo_4.png?v=1725535396&width=150" />
              </div>

              <div>
                <Link className="flex items-center gap-[5px] text-sm font-[100]" href="/shop">Shop  <GoChevronDown /></Link>
              </div>
              <div>
                <Link className="flex items-center gap-[5px] text-sm font-[100]" href="/shop">Collections  <GoChevronDown /></Link>
              </div>
              <div>
                <Link className="flex items-center gap-[5px] text-sm font-[100]" href="/shop">Custom Wigs  <GoChevronDown /></Link>
              </div>

              <div>
                <Link className="flex items-center gap-[5px] text-sm font-[100]" href="/shop">Shop  <GoChevronDown /></Link>
              </div>
              <div>
                <Link className="flex items-center gap-[5px] text-sm font-[100]" href="/shop">Shop  <GoChevronDown /></Link>
              </div>
            </div>

          </div>
        )
      }

      {/* <Search/> */}
    </div>
  )
}
