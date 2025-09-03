import React from "react";
import Image from "next/image";
import { german } from "@/public/assets";

const Owner = () => {
  return (
    <section
      id="about"
      className="w-full max-w-contentContainer bg-black flex justify-center py-6 px-6 md:px-12 scroll-mt-20"
    >
      <div className="max-w-6xl w-full rounded-lg bg-darkGrey overflow-hidden p-8 flex flex-col items-center">
        {/* Titles */}
        <h2 className="text-2xl md:text-4xl font-semibold font-headerFont text-center text-darkYellow">
          ABOUT THE OWNER
        </h2>
        {/* Span Line */}
        <span className="w-20 h-[2px] bg-darkYellow my-2"></span>
        <h2 className="text-2xl md:text-3xl font-semibold font-headerFont text-center text-darkYellow">
          GERMAN PEREZ
        </h2>
        {/* Circular Image */}
        <div className="relative w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden my-6 border-4 border-darkYellow shadow-lg">
          <Image
            src={german}
            alt="German Perez"
            fill
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        {/* Description */}
        <p className="text-sm font-titleFont text-offWhite leading-relaxed text-center px-6 max-w-3xl">
          German Perez is the proud owner of Cuba Bakery, a family-run
          establishment that has been a cornerstone of the Homestead community
          since 1972. As a second-generation entrepreneur, German carries on the
          legacy started by his father, preserving the authentic Cuban flavors
          and traditions that have made Cuba Bakery a local favorite for over 50
          years. With a deep passion for quality and craftsmanship, he ensures
          that every pastry, loaf of bread, and cup of coffee reflects the
          dedication and heritage of his family&#39;s business. Under his
          leadership, Cuba Bakery continues to be a welcoming place where
          customers can enjoy the taste of Cuba, one bite at a time.
        </p>
        .
      </div>
    </section>
  );
};

export default Owner;
