import React, { useState, useEffect } from "react";
import SEO from "@/components/SEO";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

const menu = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 300px
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-blackGrey text-darkYellow border-2 border-white font-bodyFont font-semibold rounded-md hover:bg-darkYellow hover:text-blackGrey hover:border-white transition-all duration-200 shadow-lg flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default menu;
