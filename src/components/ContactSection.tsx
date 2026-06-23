import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact-us" className="py-24 bg-mesh relative overflow-hidden">
      {/* Animated orb */}
      <motion.div
        className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-primary text-sm uppercase tracking-[0.3em]">Contact Us</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-8">
              Feel Free To Ask Anything{" "}
              <span className="text-gradient-primary">Contact Us</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Our Mails",
                  lines: ["rmzagift@gmail.com"],
                },
                {
                  icon: Phone,
                  title: "Book Us",
                  lines: [" 050 765 3223"],
                },
                {
                  icon: MapPin,
                  title: "Company Address",
                  lines:  ["Sharjah - University Road - Industrial Area 13 - UAE"],
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <h4 className="font-body font-semibold text-foreground mb-1">{item.title}</h4>
                    {item.lines.map((line) => (
                      <p key={line} className="font-body text-sm text-muted-foreground">{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-card/80 backdrop-blur-md border border-border/30 rounded-2xl p-8 hover:border-primary/20 transition-all duration-500"
          >
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="font-body bg-secondary/30 border border-border/30 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary/50 transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="font-body bg-secondary/30 border border-border/30 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary/50 transition-all"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="font-body w-full bg-secondary/30 border border-border/30 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary/50 transition-all"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="font-body w-full bg-secondary/30 border border-border/30 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary/50 transition-all resize-none"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full font-body font-semibold text-sm uppercase tracking-wider bg-primary text-primary-foreground py-3.5 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2"
              >
                Submit Now
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
