import { motion } from "framer-motion";
import corporate from "../assets/corporate.jpg";
import crystal from "../assets/crystal.jpg";
import umbrella from "../assets/umbrella.jpg";
import plague   from "../assets/plague.jpg";
import flag  from "../assets/flag.jpg";
import awards   from "../assets/awards.jpg";
import heroVideo from "../assets/heroVideo.mp4";

const heroImages = [
  corporate,
  crystal,
  umbrella,
  plague,
  flag,
  awards,
];

const FloatingOrb = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={className}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

const HeroSection = () => {
  return (
   <section id="home" className="relative min-h-screen flex flex-col items-center justify-center">

    <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src={heroVideo} type="video/mp4" />
</video>



     {/* Animated floating orbs */}
      <FloatingOrb
        className="absolute top-20 left-1/4 w-80 h-80 bg-primary/8 rounded-full blur-[100px]"
        delay={0}
      />
      <FloatingOrb
        className="absolute top-40 right-1/4 w-96 h-96 bg-accent/6 rounded-full blur-[120px]"
        delay={2}
      />
      <FloatingOrb
        className="absolute bottom-40 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"
        delay={4}
      />

      {/* Rotating decorative ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent/5 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

  
      {/* Small floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{
            top: `${20 + i * 12}%`,
            left: `${10 + i * 15}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-block font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6 border border-border/50 px-6 py-2 rounded-full backdrop-blur-sm"
        >
          Adv. & Gifts Supply
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          Crafted for Brands That Demand,{" "}
          <motion.span
            className="text-gradient-accent italic inline-block"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Excellence
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-lg text-white max-w-2xl mx-auto leading-relaxed"
        >
          Exclusive promotional gifts and advertising solutions tailored for premium businesses.
        
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 flex gap-4 justify-center"
        >
          <a
            href="#our-services"
            className="font-body text-sm font-semibold uppercase tracking-wider bg-primary text-primary-foreground px-8 py-3.5 rounded-full hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            Our Services
          </a>
          <a
            href="#contact-us"
            className="font-body text-sm font-semibold uppercase tracking-wider border border-border/50 text-foreground px-8 py-3.5 rounded-full hover:border-primary/50 transition-all backdrop-blur-sm"
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>

      {/* Image carousel strip */}
      <div className="relative w-full mt-16 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />
        <motion.div
          className="flex gap-4 animate-marquee"
          style={{ width: "fit-content" }}
        >
          {[...heroImages, ...heroImages, ...heroImages, ...heroImages, ...heroImages, ...heroImages].map((img, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-72 h-80 rounded-xl overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={img}
                alt={`Project showcase ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
