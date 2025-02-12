import FeaturedCard from "./FeaturedCard";
import { card1, card2, card3 } from "@/public/assests";

const FeaturedItems = () => {
  const items = [
    {
      title: "Pasteles de Guayaba",
      description: "Flaky pastry filled with guava",
      image: card1,
    },
    {
      title: "Cuban Sandwiches",
      description: "Ham, roast pork, and Swiss cheese",
      image: card2,
    },
    {
      title: "Fresh Cuban Bread",
      description: "Soft and fluffy pan Cubano",
      image: card3,
    },
  ];

  return (
    <section className="w-full max-w-contentContainer bg-blackGrey px-6">
      <div className="flex items-center justify-center w-full mb-8">
    {/* Left Line */}
    <span className="md:block flex-grow h-[2px] bg-offWhite mr-4"></span>

    {/* Section Title */}
    <h2 className=" text-lg md:text-3xl lg:text-4xl font-bold font-headerFont text-center text-darkYellow  uppercase tracking-wide">
      house favorites
    </h2>

    {/* Right Line */}
    <span className=" md:block flex-grow h-[2px] bg-offWhite  ml-4"></span>
  </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <FeaturedCard 
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedItems;