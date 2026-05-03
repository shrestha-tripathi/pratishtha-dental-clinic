import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { clinic } from "../data/clinic";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <div className="text-sm uppercase tracking-[0.2em] text-teal-700 font-semibold mb-3">FAQ</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Questions? <span className="gradient-text italic">We've got answers</span>.
          </h2>
        </div>

        <div className="space-y-3">
          {clinic.faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-2xl border border-teal-700/10 overflow-hidden bg-mint-50/50">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-5 py-4 flex items-center gap-4 hover:bg-mint-50 transition-colors"
                >
                  <span className="font-display font-semibold text-teal-900 flex-1">{f.q}</span>
                  <Plus
                    className={`text-teal-700 transition-transform shrink-0 ${isOpen ? "rotate-45" : ""}`}
                    size={20}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-teal-900/70 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
