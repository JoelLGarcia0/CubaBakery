import React from 'react'
import { catering } from '@/public/assests'
import Image from 'next/image'
import Link from 'next/link'

const Catering = () => {
  return (
    <section className="w-full max-w-contentContainer bg-blackGrey flex justify-center px-6">
  <div className="max-w-6xl w-full flex flex-col md:flex-row-reverse rounded-lg bg-darkGrey overflow-hidden">
    
    {/* Right: Image (Now Reversed) */}
    <div className="relative w-full h-[400px] md:h-[500px]">
      <Image 
        src={catering} 
        alt="Catering service at Cuba Bakery"
        fill
        style={{ objectFit: "cover", objectPosition: "bottom" }}
      />
    </div>

    {/* Left: Text Content */}
    <div className="w-full flex flex-col justify-center items-center px-6 md:px-12 py-8">
      <h2 className="text-3xl md:text-4xl font-semibold font-headerFont text-center underline decoration-2 underline-offset-4 text-darkYellow">
        HOSTING AN EVENT?
      </h2>
      <h3 className='text-xl md:text-3xl font-bold font-bodyFont italic text-center text-offWhite mb-20'>
        We do Catering!
      </h3>
      <p className="text-sm font-titleFont text-offWhite leading-relaxed text-center">
      We are available for parties and events. Our ready made platters are perfect for any celebration.
      </p>
     

      {/* Button */}
      <div className="mt-20 flex justify-center md:justify-start">
        <Link href="/contact">
        <button className="px-5 py-2 font-bodyFont bg-blackGrey text-white border-2
           border-white font-bold rounded-md hover:bg-hoverColor hover:text-black hover:border-white transition">
          Contact Us
        </button>
        </Link>
      </div>
    </div>

  </div>
</section>
  )
}

export default Catering