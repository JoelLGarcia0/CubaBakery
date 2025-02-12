import { coffee } from '@/public/assests'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <section id="about" className="w-full max-w-contentContainer bg-blackGrey flex justify-center px-6 scroll-mt-20">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] rounded-lg bg-darkGrey overflow-hidden relative">
        
        {/* Left: Image */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image 
            src={coffee} 
            alt="Café Cubano being poured"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        {/* Border - Hidden on small screens, shown between sections on medium and larger */}
        <div className="hidden md:block  h-full bg-transparent"></div>

        {/* Right: Text Content */}
        <div className="flex flex-col justify-center items-center px-4 py-6">
          <h2 className="text-3xl md:text-4xl font-bold font-headerFont underline decoration-2 underline-offset-7 text-center text-darkYellow mb-8">
            OUR STORY
          </h2>
          <p className="text-xs font-titleFont text-offWhite leading-relaxed text-center mt-2 mb-4">
            Cuba Bakery is more than just a bakery—it&#39;s the story of a family&#39;s journey, resilience, and love
            for tradition. Our story began in 1972, when our family, filled with hope and dreams for a new
            life, opened our first bakery in New Jersey after leaving Cuba. Fueled by a passion for
            preserving our heritage, we brought the rich flavors of Cuba to the community. Years later, we
            brought our roots further south to Miami, where Cuba Bakery continues to thrive as a
            cornerstone of Cuban culture and cuisine.
          </p>
          <p className="text-xs font-titleFont text-offWhite leading-relaxed text-center mb-2">
            Today, we proudly offer a taste of home with our authentic Cuban pastries, savory dishes, and
            handcrafted cakes, while staying true to the recipes and traditions that started it all.
          </p>

          {/* Button */}
          <div className="mt-4">
            <Link href="/aboutus" target="_blank">
              <button 
                className="px-5 py-2 font-bodyFont bg-blackGrey text-white border-2
                border-white font-bold rounded-md hover:bg-hoverColor hover:text-black hover:border-white transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Border for small screens - Placed at the bottom */}
        <div className="md:hidden w-full h-[3px] border-t border-dotted border-white/50 mt-4"></div>
      </div>
    </section>
  )
}

export default About;