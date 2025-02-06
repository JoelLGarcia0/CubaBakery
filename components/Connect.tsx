import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Connect = () => {
  return (
    <div className="px-4 md:px-10 items-center">
  {/* Headings */}
  <h1 className="text-lg md:text-2xl lg:text-3xl font-titleFont text-left mr-20 text-black font-extrabold uppercase">
    CONNECT WITH US 
  </h1>
  <h2 className="text-md md:text-xl lg:text-2xl font-titleFont text-right ml-20 text-textBrown font-bold uppercase mt-2">
    FOR SPECIAL OFFERS AND UPDATES 
  </h2>

  {/* Social Icons */}
  <div className="flex justify-center gap-6 mt-6">
    {/* Facebook */}
    <a href="https://www.facebook.com/CubaBakery/" target="_blank">
      <span className="inline-flex text-4xl text-textBrown transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
        <FaFacebook />
      </span>
    </a>

    {/* Instagram */}
    <a href="https://www.instagram.com/cubabakery/?hl=en" target="_blank">
      <span className="inline-flex text-4xl text-textBrown transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
        <FaInstagram />
      </span>
    </a>
  </div>
</div>
   
  )
}

export default Connect