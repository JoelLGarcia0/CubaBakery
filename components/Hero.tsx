import React from 'react'
import {hero2, line } from '@/public/assests'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] py-10 flex items-center justify-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
      <Image 
        src={hero2} // Update with your actual image path
        alt="Cuban Food"
        fill
        style={{ 
          objectFit: "cover",
          objectPosition: "center" }}
        quality={100}
        priority
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative px-10 max-w-3xl">
        <motion.h1 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl md:text-5xl font-titleFont text-center font-extrabold uppercase">
          Pastelitos and Cuban Bread Baked Fresh Every Day!
        </motion.h1>
        <Image
        src={line}
        alt="line seperator" 
        width = {400}
        className='mx-auto -mb-8 -mt-4 items-center'
        />
        <p className="text-xlg md:text-2xl font-bodyFont text-center italic">
          Homemade recipes, authentic flavors, and warm smiles.
        </p>

       {/* Centered Button */}
    <div className="mt-6 flex justify-center pt-3">
      <Link 
      href="https://www.ubereats.com/store/cuba-bakery/K1WPcvalXteGRBlsozJ1jA?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkVkaWZpY2lvJTIwVG9ycmUlMjBsb3MlMjBQYXJyYSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUpaN0lXSUlHQ1JvNFIxd1BSMXA5TXhZVSUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0E2LjIwMDA5ODQ5OTk5OTk5OCUyQyUyMmxvbmdpdHVkZSUyMiUzQS03NS41NjIxODE1JTdE" target="_blank">
      <button className="px-5 py-2 font-bodyFont bg-blackGrey text-darkYellow border-2
       border-white font-semibold rounded-md hover:bg-hoverColor hover:text-blackGrey hover:border-white transition">
        Order Now
      </button>
      </Link>
    </div>
  </div> 
    </section>
  )
}

export default Hero