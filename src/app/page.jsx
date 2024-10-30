import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { LiaGemSolid } from "react-icons/lia";
import { LiaBrushSolid } from "react-icons/lia";
import { GiHeatHaze } from "react-icons/gi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSolidShare } from "react-icons/bi";
export default function Home() {
  return (
    <>
      <h1>oBED PROJRCT</h1>

      <Hero />
      <div className="bg-white w-full h-10 px-4 flex justify-evenly py-3">
        <p className="flex items-center capitalize "><span className="text-2xl"> <LiaGemSolid /></span>      <span>Authentic Virgin Hair</span></p>
        <p className="flex items-center capitalize "><span className="text-2xl"> <LiaBrushSolid /> </span>   <span>Can be colored or lifted</span></p>
        <p className="flex items-center capitalize "><span className="text-2xl"><GiHeatHaze /></span>      <span span>Textures and Styles for Everyone</span></p>

        <p className="flex items-center capitalize "><span className="text-2xl"> <LiaShippingFastSolid />     </span>   <span>Fast Free shipping</span></p>
        <p className="flex items-center capitalize "><span className="text-2xl">     <BiSolidShare /></span>    <span>30 days return and exchange</span></p>
      </div>
    </>


  );
}
