import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index}
            className={cn(
              "border rounded-[1.5rem] transition-all duration-500 overflow-hidden",
              isOpen 
                ? "bg-white border-blue-400 shadow-xl shadow-blue-600/5 ring-1 ring-blue-400/30" 
                : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
            )}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
            >
              <span className="text-lg md:text-xl font-extrabold text-slate-900 pr-4 tracking-tight">{item.question}</span>
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 flex-shrink-0",
                isOpen ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-500"
              )}>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 transition-transform duration-500",
                    isOpen ? "rotate-180 text-blue-700" : "rotate-0 text-slate-500"
                  )} 
                />
              </div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-6 md:px-8 pb-8 text-slate-600 text-lg leading-relaxed font-normal border-t border-slate-100 pt-4 mt-2">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
