import React from "react";
import SEO from "@/components/SEO";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

const menu = () => {
  return (
    <>
      <SEO
        title="Cuba Bakery | Menu"
        description="Explore Cuba Bakery's menu featuring delicious Cuban pastries, sandwiches, coffee, and more, freshly prepared daily in Homestead, FL."
        canonical="https://www.cubabakery.com/menu"
        openGraphImageUrl="https://www.cubabakery.com/assets/images/German.png"
      />
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          {/* container after NavBar */}
          <div className="w-full flex flex-col items-center pt-20">
            <Menu />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default menu;
