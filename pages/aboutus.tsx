import React from "react";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Owner from "@/components/Owner";

const aboutus = () => {
  return (
    <>
      <Head>
        <title>Cuba Bakery | About Us</title>
        <meta
          name="description"
          content="Learn about Cuba Bakery, Homestead's favorite spot for authentic Cuban pastries, sandwiches, coffee, and more. Discover our story and meet the team behind our delicious treats."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
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
