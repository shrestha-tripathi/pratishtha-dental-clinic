import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { asset } from "../lib/utils";

type Photo = { src: string; alt: string };

const photos: Photo[] = [
  { src: "storefront-day.jpeg", alt: "Pratishtha Dental Clinic — daytime storefront" },
  { src: "tooth-sign.jpeg", alt: "Illuminated tooth-shaped clinic sign" },
  { src: "clinic-storefront.jpeg", alt: "Clinic entrance at night" },
  { src: "clinic-interior.jpeg", alt: "Modern dental operatory interior" },
  { src: "clinic-room.jpeg", alt: "Treatment room with dental chair and equipment" },
  { src: "business-card.jpeg", alt: "Pratishtha Dental Clinic business card" },
  { src: "promo-toothache.jpeg", alt: "Don't keep your tooth waiting — book a consultation" },
  { src: "myth-brushing.jpeg", alt: "Dental myth vs. fact — brushing harder isn't better" },
  { src: "did-you-know.jpeg", alt: "Did you know? Historical dental hygiene fact" },
];

export function Gallery() {
  const [idx, setIdx] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const autoplayRef = useRef<number | null>(null);

  const next = useCallback(() => setIdx((i) => (i + 1) % photos.length), []);
  const prev = useCallback(() => setIdx((i) => (i - 1 + photos.length) % photos.length), []);

  // Autoplay (pauses when lightbox is open or tab is hidden)
  useEffect(() => {
    if (lightbox) return;
    autoplayRef.current = window.setInterval(next, 5000);
    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
  }, [next, lightbox]);

  // Keyboard nav (works for both carousel and lightbox)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape" && lightbox) setLightbox(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, lightbox]);

  // Lock scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  // Touch swipe
  const touchStart = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchStart.current = null;
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-10">
          <div className="text-sm uppercase tracking-[0.2em] text-teal-700 font-semibold mb-3">
            Our Clinic
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            A look <span className="gradient-text italic">inside our clinic</span>.
          </h2>
          <p className="text-teal-900/70 text-lg">
            Tap any photo to view full-size. Swipe or use the arrows to browse.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden bg-mint-50 shadow-xl shadow-teal-900/10"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.button
                key={idx}
                type="button"
                onClick={() => setLightbox(true)}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full cursor-zoom-in group"
                aria-label={`View full-size: ${photos[idx].alt}`}
              >
                <img
                  src={asset(photos[idx].src)}
                  alt={photos[idx].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm text-white grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={16} />
                </div>
                <div className="absolute bottom-5 left-5 right-5 sm:left-7 sm:right-7 text-left text-white">
                  <div className="text-xs uppercase tracking-widest opacity-70 mb-1">
                    {String(idx + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
                  </div>
                  <div className="text-sm sm:text-base font-medium max-w-xl drop-shadow-md">
                    {photos[idx].alt}
                  </div>
                </div>
              </motion.button>
            </AnimatePresence>

            {/* Arrows */}
            <button
              type="button"
              onClick={prev}
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/85 hover:bg-white text-teal-900 grid place-items-center shadow-md transition"
              aria-label="Previous photo"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/85 hover:bg-white text-teal-900 grid place-items-center shadow-md transition"
              aria-label="Next photo"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Thumbnail strip */}
          <div className="mt-5 flex gap-2 sm:gap-3 overflow-x-auto pb-2 -mx-2 px-2 snap-x scrollbar-thin">
            {photos.map((p, i) => (
              <button
                type="button"
                key={p.src}
                onClick={() => setIdx(i)}
                className={`shrink-0 snap-start w-20 h-14 sm:w-24 sm:h-16 rounded-lg overflow-hidden ring-2 transition-all ${
                  i === idx ? "ring-teal-700 scale-105" : "ring-transparent opacity-60 hover:opacity-100"
                }`}
                aria-label={`Go to photo ${i + 1}`}
              >
                <img src={asset(p.src)} alt="" className="w-full h-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightbox(false)}
          >
            <button
              type="button"
              onClick={() => setLightbox(false)}
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
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={asset(photos[idx].src)}
                alt={photos[idx].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              <p className="text-white/80 text-sm mt-3 text-center px-4">{photos[idx].alt}</p>
              <p className="text-white/40 text-xs mt-1">{idx + 1} / {photos.length}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
