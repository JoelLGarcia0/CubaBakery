import React from 'react'
import { catering } from '@/public/assests'
import Image from 'next/image'
import Link from 'next/link'

const Catering = () => {
  return (
    <section className="w-full max-w-containerSmall bg-white flex justify-center px-6">
  <div className="max-w-6xl w-full flex flex-col md:flex-row-reverse rounded-lg bg-lightColor overflow-hidden">
    
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
      <h2 className="text-xl md:text-2xl font-semibold font-titleFont text-center underline decoration-2 underline-offset-4 text-textBrown">
        HOSTING AN EVENT?
      </h2>
      <h3 className='text-xl md:text-2xl font-bold font-accentFont text-center text-black mb-20'>
        We do Catering!
      </h3>
      <p className="text-sm font-bodyFont text-textBrown leading-relaxed text-center">
      We are available for parties and events. Our ready made platters are perfect for any celebration.
      </p>
     

      {/* Button */}
      <div className="mt-20 flex justify-center md:justify-start">
        <Link href="/contact">
        <button className="px-6 py-2 font-bodyFont bg-white text-textLight border-2 border-textBrown font-bold rounded-md 
         hover:bg-textLight hover:text-white hover:border-white transition">
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