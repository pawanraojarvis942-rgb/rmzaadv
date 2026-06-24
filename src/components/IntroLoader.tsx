import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const IntroLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3.5, duration: 1.2, ease: "easeInOut" }}
    >
      {/* Glow splash */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.3, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Small particles */}
      <motion.div
        className="absolute w-4 h-4 bg-primary rounded-full top-1/3 left-1/4 blur-sm"
        animate={{
          y: [-20, 20, -20],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute w-3 h-3 bg-white rounded-full bottom-1/3 right-1/4 blur-sm"
        animate={{
          y: [20, -20, 20],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
      />

      {/* Logo Reveal */}
<motion.div
  className="flex flex-col items-center justify-center"
  initial={{ opacity: 0, scale: 0.7 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 1.2,
    ease: "easeOut",
  }}
>
  <motion.img
    src={logo}
    alt="Al Remouz"
    className="w-52 md:w-80 object-contain drop-shadow-[0_0_40px_rgba(0,255,200,0.4)]"
    animate={{
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <motion.div
    className="absolute w-64 h-64 bg-primary/20 rounded-full blur-[100px]"
    animate={{
      scale: [1, 1.3, 1],
      opacity: [0.4, 0.8, 0.4],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
    }}
  />

  <motion.p
    className="mt-6 text-white/70 tracking-[6px] text-sm uppercase"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8 }}
  >
    Advertising & Gift Supply
  </motion.p>
</motion.div>

        <motion.p
          className="mt-4 text-white/70 tracking-[6px] text-sm uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Advertising & Gift Supply
        </motion.p>
      </motion.div>
    
  );
};

export default IntroLoader;