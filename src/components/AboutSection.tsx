import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 100, suffix: "%", label: "Customer Satisfaction" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "%", label: "Experienced Sales Team" },
  { value: 200, suffix: "+", label: "Events Covered" },
];

const capabilities = [
  "Advertising & Printing Services",
  "Gifts & Product Assembly",
  "Debossing & Embossing",
  "Engraving & Customization",
  "PVC ID Card Printing",
  "Indoor Wall & Desk Signs",
];

const galleryImages = [
  "https://alremouz.com/wp-content/uploads/2025/05/IMG-20250501-WA0050-rotated-368x442.jpg",
  "https://alremouz.com/wp-content/uploads/2025/04/470223208_524849103889480_8245584230351986001_n-368x442.png",
  "https://alremouz.com/wp-content/uploads/2025/04/470197375_524848770556180_4631044460186251614_n-368x442.png",
  "https://alremouz.com/wp-content/uploads/2025/05/IMG-20250526-WA0033-368x442.jpg",
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const AboutSection = () => {
  return (
    <section id="about-us" className="py-24 bg-mesh relative overflow-hidden">
      {/* Floating orbs */}
      <motion.div
        className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px]"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="w-full px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-body text-primary text-sm uppercase tracking-[0.3em]">About Alremouz</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
            Alremouz <span className="text-gradient-primary">Experts</span> in Advertising & Gift Supplies
          </h2>
          <p className="font-body text-muted-foreground mt-6 max-w-none text-lg leading-9">
            We specialize in creating corporate promotions and award programs, and offer warehouse fulfillment services. On the leading edge of the promotional industry, 
            we are constantly evolving, and our service is second to none. Our sales professionals will assist your marketing efforts by sourcing the right product at an affordable price.
            We provide you with ideas and digital solutions. On the award program, Al Remouz is a world-class provider of integrated solutions and services for events operating across
             the main market segments: conferences and conventions; cultural and sports events.  The groups mission is assisting companies, institutions, club organizations at every
              stage of the process from the definition of the event strategies to final implementation in the field.

We specialize also in design and development of highly intuitive and professional websites, ad campaigns, marketing materials, corporate identity kit, brochures, leaflets, catalogues and
 promotional gifts.

While traditional advertising is important (those TV spots and radio commercials), we dont stop there. Al Remouz takes a look at where your customers are and designs marketing plans
 targeted towards those spaces. Theres no sense in you being where your customers arent.

          </p>
        </motion.div>

        {/* Why Choose Us */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
          className="flex flex-col items-center text-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-heading text-2xl font-semibold mb-6 text-center">
            <span className="text-primary">Why</span> Choose Us
            </h3>
            <p className="font-body text-muted-foreground mb-8">
              With years of experience and a dedicated team, we offer customized advertising and gift services tailored to your unique needs.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2 font-body text-sm text-foreground/80"
                >
                  <motion.div
                    className="w-2 h-2 rounded-full bg-primary flex-shrink-0"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                  {cap}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
          className="flex flex-col items-center text-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-heading text-2xl font-semibold mb-6 text-center">
            <span className="text-primary">Alremouz</span> Operation
            </h3>
            <p className="font-body text-muted-foreground mb-8">
              Creative branding and advertising solutions, helping brands stand out with customized, high-quality services.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="text-center bg-secondary/30 backdrop-blur-sm border border-border/30 rounded-xl p-5 hover:border-primary/30 transition-all"
                >
                  <div className="font-heading text-3xl font-bold text-gradient-primary">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-body text-xs text-muted-foreground uppercase tracking-wider mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Gallery strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="rounded-xl overflow-hidden aspect-[4/5] shadow-lg shadow-background/50"
            >
              <img src={img} alt={`Gallery item ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
