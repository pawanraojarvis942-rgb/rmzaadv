import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks =["Home", "About Us", "Our Services", "Gallery", "Catalogue", "Our Team", "Contact Us", "Blog"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/30"
    >
      <div className="w-full px-8 py-4 flex items -center">
        <a href="#" className="flex items-center gap-2">
          <motion.img
            src="https://alremouz.com/wp-content/uploads/2025/04/alremouz.png"
            alt="Alremouz Logo"
            className="h-14"
            whileHover={{ scale: 1.05 }}
          />
        </a>

        <div className="hidden lg:flex items-center gap-12 mx-auto">
          {navLinks.map((link, i) => (
            <motion.a
              key={link}
              href={
  link === "Catalogue"
    ? "/catalogue"
    : `#${link.toLowerCase().replace(/\s+/g, "-")}`
}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="story-link font-body text-sm font-medium text-foreground/70 hover:text-primary transition-colors uppercase tracking-wider"
            >
              <span>{link}</span>
            </motion.a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card/95 backdrop-blur-xl border-t border-border/30"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="font-body text-sm font-medium text-foreground/70 hover:text-primary transition-colors uppercase tracking-wider"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
