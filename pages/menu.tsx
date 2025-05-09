import React from "react";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

const menu = () => {
  return (
    <>
      <Head>
        <title>Cuba Bakery | Menu </title>
        <meta
          name="description"
          content="Explore Cuba Bakery's menu featuring delicious Cuban pastries, sandwiches, coffee, and more, freshly prepared daily in Homestead, FL."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
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
