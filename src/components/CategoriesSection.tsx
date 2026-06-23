import { motion } from "framer-motion";
import trophy from "../assets/trophy.jpg";
import awards from "../assets/awards.jpg";
import lanyard from "../assets/lanyard.jpg";
import pins from "../assets/pins.jpg";
import bag from "../assets/bag.jpg";
import stationary from "../assets/stationary.jpg";
import LuxuryGiftItems from "../assets/LuxuryGiftItems.jpg";
import Apparels from "../assets/Apparels.jpg";


const categories = [
  { title: "Luxury Gift Items", image: LuxuryGiftItems },
  { title: "Lanyard", image: lanyard },
  { title: "Medals & Trophy", image: trophy },
  { title: "Awards & Plaques", image: awards },
  { title: "Luxury Bags", image: bag },
  { title: "Stationery", image: stationary },
  { title: "Jute & Cotton Bags", image: "https://alremouz.com/wp-content/uploads/2025/05/8.webp" },
  { title: "Pin & Badges", image: pins },
  { title: "Apparel & Wearables", image: Apparels },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const CategoriesSection = () => {
  return (
    <section id="gallery" className="py-24 bg-mesh relative overflow-hidden">
    

      {/* Animated accent */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[120px]"
        animate={{ x: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Promotional <span className="text-gradient-accent">Gifts</span> Categories
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((cat) => (
            <motion.a
              key={cat.title}
              href={
            cat.title === "Apparel & Wearables"
            ? "/apparel"
           : cat.title === "Awards & Plaques"
          ? "/awards"
          : cat.title === "Medals & Trophy"
    ? "/trophy"
         : "#"
        }
              variants={itemVariants}
              whileHover={{}}
              className="group relative rounded-xl overflow-hidden aspect-square shadow-lg shadow-background/30"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent group-hover:from-background/95 transition-all" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <motion.h3
                  className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors"
                >
                  {cat.title}
                </motion.h3>
              </div>
            
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;
