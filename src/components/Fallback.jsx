// Fallback.jsx
import { motion } from "framer-motion";

const Fallback = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center h-screen bg-black"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-12 h-12 border-4 border-t-transparent border-[#FF6002] rounded-full"
      />
    </motion.div>
  );
};

export default Fallback;