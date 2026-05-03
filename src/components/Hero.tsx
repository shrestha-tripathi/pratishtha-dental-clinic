import { motion } from "framer-motion";
import { Star, MessageCircle, Phone, MapPin, ShieldCheck } from "lucide-react";
import { clinic } from "../data/clinic";
import { asset, waLink, telLink, isOpenNow } from "../lib/utils";

export function Hero() {
  const status = isOpenNow();
  return (
    <section id="top" className="relative pt-28 pb-20 md:pb-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-mint-100 blur-3xl opacity-70" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-gold/20 blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#0f766e" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-teal-700/10 text-xs font-medium text-teal-700 mb-6">
            <span className={`w-2 h-2 rounded-full ${status.open ? "bg-green-500 animate-pulse" : "bg-rose"}`} />
            {status.label}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] mb-5">
            Your <span className="gradient-text">healthiest smile</span><br />starts here.
          </h1>
          <p className="text-lg text-teal-900/70 mb-3 max-w-xl">
            {clinic.tagline}. Modern, painless dentistry led by{" "}
            <span className="font-semibold text-teal-900">{clinic.doctor.name}</span> — your trusted root canal & cosmetic specialist in Greater Noida.
          </p>

          <div className="flex items-center gap-2 mb-8 text-sm">
            <div className="flex items-center gap-0.5 text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="font-semibold text-teal-900">{clinic.rating.value.toFixed(1)}</span>
            <span className="text-teal-900/60">· {clinic.rating.count} reviews on {clinic.rating.source}</span>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            <a href={waLink()} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-teal-700 text-white font-medium shadow-lg shadow-teal-700/25 hover:shadow-xl hover:-translate-y-0.5 transition-all">
              <MessageCircle size={18} /> Book on WhatsApp
            </a>
            <a href={telLink()} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-teal-700/15 text-teal-900 font-medium hover:bg-mint-50 transition-all">
              <Phone size={18} /> {clinic.contact.primaryPhone}
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {clinic.stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl sm:text-3xl font-display font-bold text-teal-700">{s.value}</div>
                <div className="text-xs text-teal-900/60 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-teal-900/20">
            <img src={asset("dr-pratishtha.jpeg")} alt={clinic.doctor.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="text-xs uppercase tracking-widest opacity-80">Meet your dentist</div>
              <div className="text-2xl font-display font-bold">{clinic.doctor.name}</div>
              <div className="text-sm opacity-90">{clinic.doctor.qualifications} · {clinic.doctor.specialization}</div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -left-4 sm:-left-10 top-10 glass rounded-2xl px-4 py-3 shadow-xl border border-white/40"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-mint-100 grid place-items-center text-teal-700">
                <ShieldCheck size={18} />
              </div>
              <div>
                <div className="text-xs text-teal-900/60">Reg. No.</div>
                <div className="text-sm font-semibold text-teal-900">{clinic.doctor.regNo}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-2 sm:-right-6 bottom-16 glass rounded-2xl px-4 py-3 shadow-xl border border-white/40 max-w-[200px]"
          >
            <div className="flex items-start gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gold/20 grid place-items-center text-gold shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-xs text-teal-900/60">Visit us</div>
                <div className="text-sm font-semibold text-teal-900 leading-snug">Greater Noida, Yusufpur</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
