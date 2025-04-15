import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ColorPicker: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pickerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="absolute to-6 right-6 color-picker" ref={pickerRef}>
      <div
        className="w-8 h-8 rounded-full cursor-pointer border border-grey-light hover:scale-110 transition-all duration-300 ease-in"
        onClick={() => setIsOpen(!isOpen)}
      ></div>
      <AnimatePresence>
        {isOpen && (
            <motion.ul>
                
            </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorPicker;
