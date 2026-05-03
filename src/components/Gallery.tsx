import { motion } from "framer-motion";
import { asset } from "../lib/utils";

const photos = [
  { src: "clinic-storefront.jpeg", alt: "Pratishtha Dental Clinic — illuminated storefront", span: "md:col-span-2 md:row-span-2" },
  { src: "clinic-interior.jpeg", alt: "Modern dental operatory interior", span: "" },
  { src: "clinic-card.png", alt: "Pratishtha Dental Clinic business card", span: "" },
  { src: "dr-pratishtha.jpeg", alt: "Dr. Pratishtha Tripathi", span: "md:col-span-2" },
];

export function Gallery() {
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
            A warm, welcoming space designed for your comfort — from the moment you walk in.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {photos.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-2xl group ${p.span}`}
            >
              <img
                src={asset(p.src)}
                alt={p.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
