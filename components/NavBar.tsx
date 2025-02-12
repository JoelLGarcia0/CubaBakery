
import React, { useState } from 'react'
import { logo } from '@/public/assests'
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blackGrey shadow-md font-bodyFont fixed top-0 left-0 w-full z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20 relative">
      {/* Desktop Navigation */}
      <div className="hidden md:flex w-full items-center justify-center space-x-10 pl-11">

        {/* Left Links */}
        <div className="flex items-center space-x-10">
          <Link 
          href="/" 
          className="relative text-white font-semibold after:block after:h-[2px] after:w-0
           after:bg-darkYellow after:transition-all after:duration-300 after:content-[''] hover:after:w-full">HOME</Link>
          <Link
          href="/Menu.pdf" target="_blank" rel="noopener noreferrer"
          className="relative text-white font-semibold after:block after:h-[2px] after:w-0
           after:bg-darkYellow after:transition-all after:duration-300 after:content-[''] hover:after:w-full">MENU</Link>
        </div>

        {/* Centered Logo */}
        <div className="h-full flex-shrink-0 flex items-center justify-center mb-2">
          <Link href="/">
            <Image 
              src={logo} 
              alt="Cuba Bakery Logo" 
              width={120} 
              height={60} 
              className="w-auto"
            />
          </Link>
        </div>

        {/* Right Links */}
        <div className="flex items-center space-x-8">
          <Link 
          href="/aboutus" 
          className="relative text-white font-semibold after:block after:h-[2px] after:w-0
           after:bg-darkYellow after:transition-all after:duration-300 after:content-[''] hover:after:w-full">ABOUT US</Link>
          <Link 
          href="/contact" 
          className="relative text-white font-semibold after:block after:h-[2px] after:w-0
           after:bg-darkYellow after:transition-all after:duration-300 after:content-[''] hover:after:w-full">CONTACT</Link>
        </div>

      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center pb-2 justify-between w-full">
        {/* Logo on the left in mobile */}
        <Link href="/">
          <Image 
            src={logo} 
            alt="Cuba Bakery Logo" 
            width={100} 
            height={50} 
            className="w-auto"
          />
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          {isOpen ? <XMarkIcon className="h-6 w-6 text-white" /> : <Bars3Icon className="h-6 w-6 text-white" />}
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu Dropdown */}
  {isOpen && (
    <div className="md:hidden absolute top-20 left-0 w-full py-4 border-darkYellow border-t-2 bg-blackGrey shadow-md animate-fadeIn transition-transform">
      <div className="flex flex-col items-center space-y-2 p-4">
        <Link 
        href="/" 
        className="relative text-offWhite font-semibold after:block after:h-[2px] after:w-0
         after:bg-darkYellow after:transition-all after:duration-300 after:content-[''] hover:after:w-full" 
        onClick={() => setIsOpen(false)}>HOME</Link>
        <Link 
        href="/Menu.pdf" target="_blank"
        className="relative text-offWhite font-semibold after:block after:h-[2px] after:w-0
         after:bg-darkYellow after:transition-all after:duration-300 after:content-[''] hover:after:w-full" 
        onClick={() => setIsOpen(false)}>MENU</Link>
        <Link 
        href="/aboutus" 
        className="relative text-offWhite font-semibold after:block after:h-[2px] after:w-0
         after:bg-darkYellow after:transition-all after:duration-300 after:content-[''] hover:after:w-full" 
        onClick={() => setIsOpen(false)}>ABOUT US</Link>
        <Link 
        href="/contact" 
        className="relative text-offWhite font-semibold after:block after:h-[2px] after:w-0
         after:bg-darkYellow after:transition-all after:duration-300 after:content-[''] hover:after:w-full" 
        onClick={() => setIsOpen(false)}>CONTACT</Link>
      </div>
    </div>
  )}
</nav>
  );
};

export default NavBar