import { clinic } from "../data/clinic";

const BASE = import.meta.env.BASE_URL;

export const asset = (path: string) =>
  `${BASE}${path.startsWith("/") ? path.slice(1) : path}`;

export const waLink = (text = "Hi! I'd like to book an appointment at Pratishtha Dental Clinic.") =>
  `https://wa.me/${clinic.contact.whatsapp}?text=${encodeURIComponent(text)}`;

export const telLink = (n = clinic.contact.primaryPhone) => `tel:${n}`;

const dayKeys = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function isOpenNow(now = new Date()): { open: boolean; label: string } {
  const day = dayKeys[now.getDay()];
  const slot = clinic.hours.find((h) => h.day === day);
  if (!slot || slot.closed) return { open: false, label: "Closed today" };
  const [oh, om] = slot.open.split(":").map(Number);
  const [ch, cm] = slot.close.split(":").map(Number);
  const cur = now.getHours() * 60 + now.getMinutes();
  const o = oh * 60 + om;
  const c = ch * 60 + cm;
  if (cur >= o && cur < c) {
    const closeStr = `${((ch + 11) % 12) + 1}:${String(cm).padStart(2, "0")} ${ch >= 12 ? "PM" : "AM"}`;
    return { open: true, label: `Open now · until ${closeStr}` };
  }
  return { open: false, label: cur < o ? `Opens at ${slot.open}` : "Closed for today" };
}

export const fmtTime = (t: string) => {
  if (!t) return "";
  const [h, m] = t.split(":").map(Number);
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, "0")} ${h >= 12 ? "PM" : "AM"}`;
};
