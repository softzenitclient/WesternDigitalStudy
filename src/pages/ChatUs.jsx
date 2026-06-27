import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Send } from 'lucide-react';

export default function ChatUs() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '8801688176309'; // Stripped from +880 1688176309
  const defaultMessage = 'Hello, Western Study! I am interested in studying abroad and would like to get more information.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
      <div className="relative flex items-center justify-end pointer-events-auto">
        <AnimatePresence>
          {isHovered && (
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="absolute right-16 mr-2 bg-white text-gray-800 text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2 whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>Chat on WhatsApp</span>
              <Send size={12} className="text-gray-400" />
            </motion.a>
          )}
        </AnimatePresence>

        <motion.a
          id="whatsapp-floating-button"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:bg-[#20ba5a] transition-colors cursor-pointer group"
          title="Chat with us on WhatsApp"
        >
          {/* Pulsing indicator effect */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping group-hover:animate-none opacity-75 pointer-events-none" />
          
          <MessageCircle size={28} className="fill-current text-white relative z-10" />
        </motion.a>
      </div>
    </div>
  );
}
