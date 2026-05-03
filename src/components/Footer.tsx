import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { clinic } from "../data/clinic";
import { waLink, telLink } from "../lib/utils";

export function Footer() {
  return (
    <footer className="bg-teal-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-4 gap-10 mb-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-mint-500 to-teal-700 grid place-items-center">
              <span className="font-display font-bold text-white text-lg">P</span>
            </div>
            <div>
              <div className="font-display font-bold text-lg">{clinic.name}</div>
              <div className="text-xs text-mint-500">{clinic.tagline}</div>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed max-w-md mb-4">
            Modern, painless, patient-first dentistry in Greater Noida — led by {clinic.doctor.name}, {clinic.doctor.qualifications}.
          </p>
          <div className="text-xs text-white/40">Reg. No. {clinic.doctor.regNo}</div>
        </div>

        <div>
          <div className="text-sm font-display font-bold mb-4 text-mint-500">Reach Us</div>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2"><Phone size={15} className="mt-0.5 shrink-0" /><a href={telLink()} className="hover:text-white">{clinic.contact.primaryPhone}</a></li>
            <li className="flex gap-2"><MessageCircle size={15} className="mt-0.5 shrink-0" /><a href={waLink()} className="hover:text-white">WhatsApp</a></li>
            <li className="flex gap-2"><Mail size={15} className="mt-0.5 shrink-0" /><a href={`mailto:${clinic.contact.email}`} className="hover:text-white break-all">{clinic.contact.email}</a></li>
            <li className="flex gap-2"><MapPin size={15} className="mt-0.5 shrink-0" /><span>{clinic.address.line2}, Greater Noida</span></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-display font-bold mb-4 text-mint-500">Quick Links</div>
          <ul className="space-y-2 text-sm text-white/70">
            {["About", "Services", "Why Us", "Gallery", "Visit", "FAQ"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase().replace(" ", "")}`} className="hover:text-white">{l}</a></li>
            ))}
            <li><a href={clinic.social.justdial} target="_blank" rel="noreferrer" className="hover:text-white">Reviews on JustDial ↗</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <div>© {new Date().getFullYear()} {clinic.name}. All rights reserved.</div>
        <div>Crafted with care · For appointments call {clinic.contact.primaryPhone}</div>
      </div>
    </footer>
  );
}
