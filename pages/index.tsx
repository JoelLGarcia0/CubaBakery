import About from "@/components/About";
import Catering from "@/components/Catering";
import Connect from "@/components/Connect";
import FeaturedItems from "@/components/FeaturedItems";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Cuba Bakery | Homestead's Best Cuban Pastries & Café"
        description="Visit Cuba Bakery in Homestead, Florida, for fresh Cuban pastries, sandwiches, coffee, and authentic flavors daily. Discover our menu and come experience Cuban tradition."
        canonical="https://www.cubabakery.com/"
        openGraphImageUrl="https://www.cubabakery.com/assets/images/pastellitohighdef.png"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Cuba Bakery",
            url: "https://www.cubabakery.com/",
            logo: "https://www.cubabakery.com/logo.ico",
            sameAs: [
              "https://www.facebook.com/CubaBakery/",
              "https://www.instagram.com/cubabakery/?hl=en",
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Cuba Bakery",
            url: "https://www.cubabakery.com/",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.cubabakery.com/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Cuba Bakery",
            image:
              "https://www.cubabakery.com/assets/images/pastellitohighdef.png",
            url: "https://www.cubabakery.com/",
            hasMenu: "https://www.cubabakery.com/menu",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1641 NE 8th St",
              addressLocality: "Homestead",
              addressRegion: "FL",
              postalCode: "33033",
              addressCountry: "US",
            },
            telephone: "+1-305-245-2724",
            email: "mailto:orders.cubabakery@gmail.com",
            servesCuisine: ["Cuban", "Bakery", "Coffee"],
            priceRange: "$",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday"],
                opens: "06:00",
                closes: "17:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "06:00",
                closes: "18:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Sunday"],
                opens: "06:00",
                closes: "15:00",
              },
            ],
          },
        ]}
      />
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
