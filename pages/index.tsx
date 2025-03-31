import About from "@/components/About";
import Catering from "@/components/Catering";
import Connect from "@/components/Connect";
import FeaturedItems from "@/components/FeaturedItems";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cuba Bakery | Homestead&apos;s Best Cuban Pastries & Café</title>
        <meta
          name="description"
          content="Visit Cuba Bakery in Homestead, Florida, for fresh Cuban pastries, sandwiches, coffee, and authentic flavors daily. Discover our menu and come experience Cuban tradition."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Cuba Bakery | Homestead's Best Cuban Pastries & Cafe"
        />
        <meta
          property="og:description"
          content="Fresh Cuban pastries, sandwiches, and coffee served daily in Homestead, FL."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cubabakery.com/" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <div className="flex flex-col min-h-screen bg-blackGrey">
        <NavBar />
        <main className="flex-grow">
          {/* container after NavBar */}
          <div className="w-full flex flex-col items-center gap-10 mb-10 pt-20">
            <Hero />
            <About />
            <Catering />
            <FeaturedItems />
            <Connect />
            <FindUs />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
