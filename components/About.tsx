import { coffee } from '@/public/assests'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <section id="about" className="w-full max-w-containerSmall  bg-white flex justify-center px-6 scroll-mt-20 ">
    <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 rounded-lg bg-lightColor overflow-hidden">
      
      {/* Left: Image - 50% of the container */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image 
          src={coffee} 
          alt="Café Cubano being poured"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          
        />
      </div>
  
      {/* Right: Text Content - 50% of the container */}
      <div className="flex flex-col justify-center items-center px-6 md:px-12 py-8">
        <h2 className="text-xl md:text-2xl font-bold font-titleFont underline decoration-2 underline-offset-4 text-center text-textBrown mb-8">
          OUR STORY
        </h2>
        <p className="text-sm font-bodyFont text-textBrown leading-relaxed text-center mb-4">
          Since 1972, Cuba Bakery has been a beloved neighborhood spot, serving the Homestead community 
          with authentic Cuban flavors. We take pride in making fresh pastries daily, from flaky pastelitos 
          to crispy croquetas, all crafted with time-honored family recipes.
          Whether you&apos;re looking for a quick café cubano, catering for a special event, or delicious Cuban 
          food by the pound, we&apos;ve got you covered. Stop by and experience the rich tradition of Cuban baking, 
          one bite at a time!
        </p>
  
        {/* Button */}
        <div className="mt-10">
          <Link href="/Menu.pdf" target="_blank">
          <button 
           className="px-5 py-2 font-bodyFont bg-white text-textLight border-2 border-textBrown font-bold rounded-md 
           hover:bg-textLight hover:text-white hover:border-white transition">
            View Menu
          </button>
          </Link>
        </div>
      </div>
  
    </div>
  </section>
  )
}

export default About