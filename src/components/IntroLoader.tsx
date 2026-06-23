import { motion } from "framer-motion";

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

      {/* Text */}
      <motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  }}
  className="flex justify-center gap-4 perspective-{1200px}"
>
  {["AL", "REMOUZ"].map((word, index) => (
    <motion.span
      key={index}
      variants={{
        hidden: {
          opacity: 0,
          y: 100,
          rotateX: 90,
          filter: "blur(10px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          filter: "blur(0px)",
        },
      }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
      }}
      className={`text-6xl md:text-8xl font-[Playfair_Display] font-bold drop-shadow-[0_0_20px_rgba(255,255,255,0.25)] ${
  word === "REMOUZ" ? "text-primary" : "text-white"
}`}
    >
      {word}
    </motion.span>
  ))}
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