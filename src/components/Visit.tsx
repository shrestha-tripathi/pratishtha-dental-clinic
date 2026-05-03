import { MapPin, Phone, Clock, Navigation, MessageCircle } from "lucide-react";
import { clinic } from "../data/clinic";
import { waLink, telLink, fmtTime, isOpenNow } from "../lib/utils";

export function Visit() {
  const status = isOpenNow();
  const today = new Date().toLocaleDateString("en-US", { weekday: "short" });

  return (
    <section id="visit" className="py-20 md:py-28 bg-mint-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-sm uppercase tracking-[0.2em] text-teal-700 font-semibold mb-3">Visit Us</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            We're <span className="gradient-text italic">just around the corner</span>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="p-6 rounded-2xl bg-white shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="text-teal-700 shrink-0 mt-0.5" size={20} />
                <div>
                  <div className="font-display font-bold text-teal-900 mb-1">Address</div>
                  <p className="text-sm text-teal-900/70 leading-relaxed">
                    {clinic.address.line1}<br />
                    {clinic.address.line2}<br />
                    {clinic.address.line3}<br />
                    {clinic.address.state}
                  </p>
                </div>
              </div>
              <a
                href={clinic.address.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 mt-2 text-sm font-medium text-teal-700 hover:text-teal-900"
              >
                <Navigation size={14} /> Get Directions
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-teal-700" size={20} />
                <div className="font-display font-bold text-teal-900">Hours</div>
                <span className={`ml-auto text-xs px-2 py-0.5 rounded-full font-medium ${status.open ? "bg-green-100 text-green-700" : "bg-rose/15 text-rose"}`}>
                  {status.open ? "Open Now" : "Closed"}
                </span>
              </div>
              <ul className="space-y-1.5 text-sm">
                {clinic.hours.map((h) => (
                  <li
                    key={h.day}
                    className={`flex justify-between py-1 px-2 rounded-md ${h.day === today ? "bg-mint-50 font-semibold" : ""}`}
                  >
                    <span className="text-teal-900/80">{h.day}</span>
                    <span className={h.closed ? "text-rose font-medium" : "text-teal-900"}>
                      {h.closed ? "Closed" : `${fmtTime(h.open)} – ${fmtTime(h.close)}`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-teal-700 text-white shadow-md">
              <Phone size={20} className="mb-3" />
              <div className="font-display font-bold mb-1">Get in touch</div>
              <p className="text-sm opacity-80 mb-4">Call, message, or walk in. We're happy to help.</p>
              <div className="flex flex-col gap-2">
                <a href={telLink()} className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white text-teal-700 text-sm font-medium hover:bg-mint-50">
                  <Phone size={15} /> {clinic.contact.primaryPhone}
                </a>
                <a href={waLink()} className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-mint-500 text-white text-sm font-medium hover:bg-mint-500/90">
                  <MessageCircle size={15} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-sm min-h-[400px] bg-white">
            <iframe
              title="Map"
              src={clinic.address.embedUrl}
              className="w-full h-full min-h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
