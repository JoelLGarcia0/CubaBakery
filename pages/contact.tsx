import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";
import React from "react";

const contact = () => {
  return (
    <>
      <SEO
        title="Cuba Bakery | Contact"
        description="Contact Cuba Bakery in Homestead, FL. Visit us, call us, or send us a message — We are here to serve you fresh Cuban pastries, sandwiches, and coffee daily."
        canonical="https://www.cubabakery.com/contact"
        openGraphImageUrl="https://www.cubabakery.com/assets/images/coffeedrip.png"
      />
      <div className="flex flex-col min-h-screen bg-blackGrey">
        <NavBar />
        <main className="flex-grow">
          {/* container after NavBar */}
          <div className="w-full flex flex-col items-center gap-10 mb-10 pt-20">
            <ContactForm />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default contact;
