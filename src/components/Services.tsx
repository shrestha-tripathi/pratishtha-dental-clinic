import { motion } from "framer-motion";
import { clinic } from "../data/clinic";
import { DentalIcon } from "./DentalIcons";

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-sm uppercase tracking-[0.2em] text-teal-700 font-semibold mb-3">
            What we do
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Comprehensive dental care<br /><span className="gradient-text">all under one roof</span>.
          </h2>
          <p className="text-teal-900/70 text-lg">
            From your first cleaning to a complete smile makeover — every treatment is delivered with precision, comfort, and care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {clinic.services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.08 }}
              className="group relative p-6 rounded-2xl bg-white border border-teal-700/5 hover:border-teal-700/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-mint-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-700 to-mint-500 grid place-items-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform">
                  <DentalIcon name={s.icon} width={26} height={26} />
                </div>
                <h3 className="text-lg font-display font-bold text-teal-900 mb-2">{s.title}</h3>
                <p className="text-sm text-teal-900/65 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
