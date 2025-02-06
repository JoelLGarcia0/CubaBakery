import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface FeaturedCardProps {
  title: string;
  description: string;
  image: StaticImageData | string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ title, description, image }) => {
  return (
    <div className="relative w-full h-[350px] md:h-[400px] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
    >
        <Image 
          src={image} 
          alt={title} 
          fill
          style={{ objectFit: "cover", objectPosition: "bottom" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Text Content with Fade-in Effect */}
      <motion.div 
        initial={{ opacity: 1, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 flex flex-col justify-end items-center font-accentFont h-full p-6 text-white"
      >
        <h3 className="text-3xl font-bold italic pb-2">{title}</h3>
        <p className="text-md font-semibold mt-2">{description}</p>
      </motion.div>
    </div>
  );
};

export default FeaturedCard;