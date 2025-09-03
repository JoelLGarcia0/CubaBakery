import React from "react";
import SEO from "@/components/SEO";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Owner from "@/components/Owner";

const aboutus = () => {
  return (
    <>
      <SEO
        title="Cuba Bakery | About Us"
        description="Learn about Cuba Bakery, Homestead's favorite spot for authentic Cuban pastries, sandwiches, coffee, and more. Discover our story and meet the team behind our delicious treats."
        canonical="https://www.cubabakery.com/aboutus"
        openGraphImageUrl="https://www.cubabakery.com/assets/images/Slide3.png"
      />
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          {/* container after NavBar */}
          <div className="w-full flex flex-col items-center gap-10 mb-10 pt-20">
            <Owner />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default aboutus;
