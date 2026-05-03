import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { asset } from "../lib/utils";

type Photo = { src: string; alt: string; span: string };

const photos: Photo[] = [
  { src: "storefront-day.jpeg", alt: "Pratishtha Dental Clinic — daytime storefront", span: "md:col-span-2 md:row-span-2" },
  { src: "tooth-sign.jpeg", alt: "Illuminated tooth-shaped clinic sign", span: "" },
  { src: "clinic-storefront.jpeg", alt: "Clinic entrance at night, illuminated signage", span: "" },
  { src: "clinic-interior.jpeg", alt: "Modern dental operatory interior", span: "md:col-span-2" },
  { src: "clinic-room.jpeg", alt: "Treatment room with dental chair and equipment", span: "" },
  { src: "business-card.jpeg", alt: "Pratishtha Dental Clinic business card", span: "" },
  { src: "promo-toothache.jpeg", alt: "Don't keep your tooth waiting — book a consultation", span: "md:col-span-2" },
  { src: "myth-brushing.jpeg", alt: "Dental myth vs. fact — brushing harder isn't better", span: "" },
  { src: "did-you-know.jpeg", alt: "Did you know? Historical dental hygiene fact", span: "" },
];

export function Gallery() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const close = useCallback(() => setOpenIdx(null), []);
  const next = useCallback(() => setOpenIdx((i) => (i === null ? null : (i + 1) % photos.length)), []);
  const prev = useCallback(() => setOpenIdx((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)), []);

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIdx, close, next, prev]);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-sm uppercase tracking-[0.2em] text-teal-700 font-semibold mb-3">
            Our Clinic
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            A look <span className="gradient-text italic">inside our clinic</span>.
          </h2>
          <p className="text-teal-900/70 text-lg">
            A warm, welcoming space designed for your comfort — tap any photo to view it full-size.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {photos.map((p, i) => (
            <motion.button
              key={p.src}
              type="button"
              onClick={() => setOpenIdx(i)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.06 }}
              className={`relative overflow-hidden rounded-2xl group cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 ${p.span}`}
              aria-label={`Open photo: ${p.alt}`}
            >
              <img
                src={asset(p.src)}
                alt={p.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 via-teal-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 text-left text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2">
                {p.alt}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {openIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center transition"
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-2 sm:left-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center transition"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-2 sm:right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center transition"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>

            <motion.div
              key={openIdx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={asset(photos[openIdx].src)}
                alt={photos[openIdx].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              <p className="text-white/80 text-sm mt-3 text-center px-4">{photos[openIdx].alt}</p>
              <p className="text-white/40 text-xs mt-1">{openIdx + 1} / {photos.length}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
