import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import React from "react";

const contact = () => {
  return (
    <>
      <Head>
        <title>Cuba Bakery | Contact</title>
        <meta
          name="description"
          content="Contact Cuba Bakery in Homestead, FL. Visit us, call us, or send us a message—We are here to serve you fresh Cuban pastries, sandwiches, and coffee daily."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
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
