import React from 'react'


const FindUs = () => {
  return (
    <section id="find-us" className="w-full max-w-containerSmall bg-white flex justify-center px-6 scroll-mt-20">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 rounded-lg bg-lightColor overflow-hidden">
        
        {/* Left: Google Map Embed (50% of container) */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <div className="w-full h-full">
          <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14407.273424484885!2d-80.46433357819392!3d25.477740141996538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9dd89c4673a0d%3A0x2026870b68aa4071!2sCuba%20Bakery!5e0!3m2!1sen!2sus!4v1738770717007!5m2!1sen!2sus"
             width="100%"
             height="100%"
             style={{ border: 0 }}
             allowFullScreen
             loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Cuba Bakery Location"
            ></iframe>
          </div>
        </div>

        {/* Right: Business Details (50% of container) */}
        <div className="flex flex-col justify-center px-20 py-8">
          <h2 className="text-xl md:text-2xl font-semibold font-titleFont text-left underline decoration-2 underline-offset-4 text-textBrown mb-8">
            WHERE CAN YOU FIND US?
          </h2>
          <p className="text-md font-bodyFont text-textBrown leading-relaxed text-left mb-4">
            1641 NE 8th St, Homestead, FL, 33033
          </p>
          <p className="text-md font-bodyFont text-textBrown leading-relaxed text-left mb-4 font-semibold">
            (305)-245-2724
          </p>
          <p className="text-md font-bodyFont text-textBrown leading-relaxed text-left mb-4">
            orders.cubabakery@gmail.com
          </p>

          {/* Hours Section */}
          <h3 className="text-xl md:text-xl font-semibold font-titleFont underline decoration-2 underline-offset-4 text-left text-textBrown mt-6 mb-4">
            HOURS
          </h3>
          <p className="text-md font-bodyFont text-textBrown leading-relaxed text-left">M - Tu 6:00am - 5:00pm</p>
          <p className="text-md font-bodyFont text-textBrown leading-relaxed text-left">W - Sat 6:00am - 6:00pm</p>
          <p className="text-md font-bodyFont text-textBrown leading-relaxed text-left">Sun 6:00am - 3:00pm</p>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
