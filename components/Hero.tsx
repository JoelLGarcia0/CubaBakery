import React from 'react'
import { hero } from '@/public/assests'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative w-full h-[60vh] py-10 flex items-center justify-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
      <Image 
        src={hero} // Update with your actual image path
        alt="Freshly Baked Cuban Bread"
        fill
        style={{ objectFit: "cover", objectPosition: "bottom" }}
        quality={100}
        priority
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      </div>

      {/* Content */}
      <div className="relative px-10 max-w-3xl">
        <motion.h1 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl md:text-5xl font-titleFont font-extrabold uppercase">
          Freshly Baked Cuban Bread Every Day!
        </motion.h1>
        <p className="text-xlg md:text-3xl  font-accentFont font-bold italic mt-4">
          Homemade recipes, authentic flavors, and warm smiles.
        </p>

       {/* Centered Button */}
    <div className="mt-6 flex justify-center pt-3">
      <button className="px-5 py-2 font-bodyFont bg-white text-textLight border-2
       border-textBrown font-bold rounded-md hover:bg-textLight hover:text-white hover:border-white transition">
        Order Now
      </button>
    </div>
  </div> 
    </section>
  )
}

export default Hero