import React from "react";
import Image from "next/image";
import { german } from "@/public/assests";

const Owner = () => {
  return (
    <section id="about" className="w-full max-w-containerSmall bg-white flex justify-center py-12 px-6 md:px-12 scroll-mt-20">
      <div className="max-w-6xl w-full rounded-lg bg-lightColor overflow-hidden p-8 flex flex-col items-center">
        
        {/* Titles */}
        <h2 className="text-xl md:text-2xl font-semibold font-titleFont text-center text-textBrown">
          ABOUT THE OWNER
        </h2>

        {/* Span Line */}
        <span className="w-20 h-[2px] bg-textBrown my-2"></span>

        <h2 className="text-lg md:text-xl font-semibold font-titleFont text-center text-textBrown">
          GERMAN PEREZ
        </h2>

        {/* Circular Image */}
        <div className="relative w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden my-6 border-4 border-textBrown shadow-lg">
          <Image 
            src={german} 
            alt="German Perez"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>

        {/* Description */}
        <p className="text-sm font-bodyFont text-textBrown leading-relaxed text-center px-6 max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Curabitur eget libero eget
           velit ultricies pharetra. Sed euismod, lacus at tempus pretium, ligula nulla fermentum arcu, non 
           venenatis justo turpis id odio. Donec efficitur metus at lectus varius, sit amet sodales odio auctor. 
           Fusce auctor nisi vel magna auctor, sit amet rhoncus arcu cursus. Proin bibendum felis nec nunc tempus, 
           et hendrerit odio congue. Integer non lacus nec libero fermentum efficitur nec at justo. Lorem, ipsum dolor 
           sit amet consectetur adipisicing elit. Sunt impedit debitis laboriosam suscipit, obcaecati officiis facere 
           velit maxime optio veritatis nisi, earum saepe id et nesciunt laborum quae aut dignissimos?
        </p>
      </div>
    </section>
  );
};

export default Owner;