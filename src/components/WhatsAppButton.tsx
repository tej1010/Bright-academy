import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const WhatsAppButton = () => {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href="https://wa.me/919737842191"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-200 flex items-center justify-center group"
    >
      <div className="absolute -top-10 right-0 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us!
      </div>
      <MessageCircle className="w-8 h-8" />
    </motion.a>
  );
};

export default WhatsAppButton;
