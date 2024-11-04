import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { LiaGemSolid } from "react-icons/lia";
import { LiaBrushSolid } from "react-icons/lia";
import { GiHeatHaze } from "react-icons/gi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSolidShare } from "react-icons/bi";
import SliderShow from "@/components/SliderShow";
import QuickView from "@/components/QuickView";
import Line from "@/components/Line";
import CardList from "@/components/Texture";
export default function Home() {
  return (
    <>
      <h1>oBED PROJRCT</h1>

      <Hero />
      <div className="bg-white w-full h-10 px-4 flex justify-evenly py-3">
        <p className="flex justify-between gap-3 text-black items-center capitalize "><span className="text-2xl"> <LiaGemSolid /></span>      <span>Authentic Virgin Hair</span></p>
        <p className="flex items-center gap-3 text-black capitalize "><span className="text-2xl"> <LiaBrushSolid /> </span>   <span>Can be colored or lifted</span></p>
        <p className="flex items-center gap-3 text-black capitalize "><span className="text-2xl"><GiHeatHaze /></span>      <span span>Textures and Styles for Everyone</span></p>

        <p className="flex items-center gap-3 text-black capitalize "><span className="text-2xl"> <LiaShippingFastSolid />     </span>   <span>Fast Free shipping</span></p>
        <p className="flex items-center gap-3 text-black capitalize "><span className="text-2xl">     <BiSolidShare /></span>    <span>30 days return and exchange</span></p>
      </div>
      <SliderShow/>
      <Line/>
      <QuickView/>

      <CardList/>
    </>


  );
}
