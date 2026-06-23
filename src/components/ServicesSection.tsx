import { motion } from "framer-motion";
import { Printer, Flame, Monitor, Scissors, Droplets, CreditCard } from "lucide-react";

const services = [
  {
    icon: Printer,
    title: "UV Printing Service",
    description: "A modern printing technique that uses ultraviolet light to cure inks, delivering vibrant and durable results on various surfaces.",
  },
  {
    icon: Flame,
    title: "Heat Transfer Service",
    description: "Applying heat transfer material onto surfaces using specialized equipment for high-quality, lasting custom designs.",
  },
  {
    icon: Monitor,
    title: "Digital Printing Service",
    description: "Modern printing method using digital files to directly print images, texts, and content onto a wide range of materials.",
  },
  {
    icon: Scissors,
    title: "Print and Cut",
    description: "Printing desired designs onto special transfer paper using a digital printer, then precisely cutting them for application.",
  },
  {
    icon: Droplets,
    title: "Sublimation Printing",
    description: "A digital printing method using heat and pressure to transfer dye onto polyester or polymer-coated items.",
  },
  {
    icon: CreditCard,
    title: "PVC ID Card Printing",
    description: "Expert team using state-of-the-art equipment and technology to ensure each card is produced with the highest quality.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ServicesSection = () => {
  return (
    <section id="our-services" className="py-24 bg-mesh relative overflow-hidden">
      
      
      {/* Decorative animated accents */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    

        <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-body text-primary text-sm uppercase tracking-[0.3em]"
          >
            Services
          </motion.span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
            Explore Alremouz <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            Custom gifts and advertising solutions that ensure your brand leaves a lasting impression.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-secondary/30 backdrop-blur-sm border border-border/30 rounded-xl p-8 hover:border-primary/40 transition-all duration-300 hover:glow-primary hover:bg-secondary/50"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                transition={{ duration: 0.4 }}
              >
                <service.icon className="w-10 h-10 text-primary mb-5" />
              </motion.div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
