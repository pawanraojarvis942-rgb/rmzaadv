import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const IntroLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3.5, duration: 1.2, ease: "easeInOut" }}
    >
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="w-[500px] h-[500px] rounded-full bg-primary/20 blur-[140px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Floating Particle 1 */}
      <motion.div
        className="absolute w-4 h-4 bg-primary rounded-full blur-sm"
        style={{ top: "35%", left: "30%" }}
        animate={{
          y: [-20, 20, -20],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      {/* Floating Particle 2 */}
      <motion.div
        className="absolute w-3 h-3 bg-white rounded-full blur-sm"
        style={{ bottom: "35%", right: "30%" }}
        animate={{
          y: [20, -20, 20],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
      />

      {/* Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.img
          src={logo}
          alt="Al Remouz"
          className="w-56 md:w-72 object-contain drop-shadow-[0_0_50px_rgba(0,255,200,0.45)]"
          initial={{
            opacity: 0,
            scale: 0.4,
            rotateY: -90,
            filter: "blur(12px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateY: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </motion.div>
  );
};

export default IntroLoader;