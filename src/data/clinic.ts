// Single source of truth — edit copy/services/photos here.
export const clinic = {
  name: "Pratishtha Dental Clinic",
  tagline: "A Total Dental & Aesthetic Solutions",
  doctor: {
    name: "Dr. Pratishtha Tripathi",
    qualifications: "BDS",
    specialization: "Root Canal Specialist",
    regNo: "A-14456",
    bio: "Dr. Pratishtha Tripathi is a passionate dental surgeon committed to gentle, evidence-based care. With special expertise in root canal therapy and cosmetic dentistry, she has restored thousands of smiles across Greater Noida — combining clinical precision with genuine warmth so every patient leaves feeling heard, cared for, and confident.",
  },
  contact: {
    primaryPhone: "+917800364268",
    secondaryPhone: "+917400364268",
    whatsapp: "917800364268",
    email: "tripathipratishtha65@gmail.com",
  },
  address: {
    line1: "Shop No. 6, Munnidevi School",
    line2: "Old Haibatpur, Nai Basti Dundahera",
    line3: "Greater Noida (Yusufpur), Ghaziabad — 201009",
    state: "Uttar Pradesh, India",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Pratishtha+Dental+Clinic+Old+Haibatpur+Dundahera+Greater+Noida",
    embedUrl:
      "https://www.google.com/maps?q=Pratishtha+Dental+Clinic+Old+Haibatpur+Dundahera+Greater+Noida&output=embed",
  },
  hours: [
    { day: "Mon", open: "10:30", close: "20:00", closed: false },
    { day: "Tue", open: "", close: "", closed: true },
    { day: "Wed", open: "10:30", close: "20:00", closed: false },
    { day: "Thu", open: "10:30", close: "20:00", closed: false },
    { day: "Fri", open: "10:30", close: "20:00", closed: false },
    { day: "Sat", open: "10:30", close: "20:00", closed: false },
    { day: "Sun", open: "10:30", close: "20:00", closed: false },
  ],
  rating: { value: 5.0, count: 21, source: "JustDial" },
  stats: [
    { label: "Years of Care", value: "5+" },
    { label: "Happy Smiles", value: "2000+" },
    { label: "Google Rating", value: "5.0★" },
    { label: "Painless Care", value: "100%" },
  ],
  services: [
    { icon: "Sparkles", title: "Root Canal Treatment", desc: "Pain-free, single-sitting RCTs using modern rotary endodontics — Dr. Pratishtha's specialty." },
    { icon: "Smile", title: "Cosmetic Dentistry", desc: "Smile makeovers, veneers, and tooth-colored restorations that look completely natural." },
    { icon: "Bone", title: "Dental Implants", desc: "Permanent tooth replacements that look, feel, and function like the real thing." },
    { icon: "Brush", title: "Teeth Whitening", desc: "Safe, effective in-office and take-home whitening for a brighter, confident smile." },
    { icon: "Baby", title: "Pediatric Dentistry", desc: "Gentle, anxiety-free dental care designed especially for our youngest patients." },
    { icon: "Crown", title: "Crowns & Bridges", desc: "Premium ceramic and zirconia crowns crafted for strength, durability, and aesthetics." },
    { icon: "AlignJustify", title: "Orthodontics & Aligners", desc: "Traditional braces and clear aligners to straighten teeth at any age." },
    { icon: "Stethoscope", title: "Scaling & Polishing", desc: "Professional cleaning to keep gums healthy and prevent dental disease." },
    { icon: "ShieldCheck", title: "Emergency Dental Care", desc: "Rapid relief for dental pain, broken teeth, and urgent treatment needs." },
  ],
  trustPillars: [
    { icon: "ShieldCheck", title: "Strict Sterilization", desc: "Autoclave + UV sterilization for every instrument, every patient — no exceptions." },
    { icon: "HeartHandshake", title: "Painless Treatment", desc: "Modern anesthesia and gentle techniques mean comfort throughout your visit." },
    { icon: "BadgeCheck", title: "Certified Specialist", desc: "BDS, Reg. No. A-14456 — practicing root-canal & aesthetic dentistry with care." },
    { icon: "Wallet", title: "Transparent Pricing", desc: "Clear, upfront costs. No hidden fees, no surprise bills — ever." },
    { icon: "Cpu", title: "Modern Equipment", desc: "Digital X-rays, rotary endodontics, and ergonomic patient chairs for the best outcomes." },
    { icon: "Clock", title: "Open 6 Days a Week", desc: "10:30 AM to 8:00 PM, Sun–Mon and Wed–Sat. Convenient hours for working professionals." },
  ],
  faqs: [
    { q: "Do I need an appointment, or are walk-ins welcome?", a: "Walk-ins are always welcome, but we recommend booking via WhatsApp to skip the wait and ensure dedicated time with Dr. Pratishtha." },
    { q: "Is the root canal treatment painful?", a: "Not at all. We use modern rotary endodontics and effective local anesthesia — most patients report little to no discomfort, and many RCTs are completed in a single sitting." },
    { q: "Do you accept payments by card or UPI?", a: "Yes! We accept cash, all major UPI apps (Google Pay, PhonePe, Paytm), and debit/credit cards for your convenience." },
    { q: "How often should I visit the dentist?", a: "We recommend a check-up and professional cleaning every 6 months — even if your teeth feel fine. Prevention is always cheaper than cure." },
    { q: "Is the clinic safe for children?", a: "Absolutely. We have a child-friendly approach to make your little one's first dental visit a positive, anxiety-free experience." },
  ],
  social: {
    justdial: "https://www.justdial.com/RSL-LII1777795686",
    instagram: "",
    facebook: "",
  },
};

export type Clinic = typeof clinic;
