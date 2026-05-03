import { GraduationCap, Award, Heart, Sparkles } from "lucide-react";
import { clinic } from "../data/clinic";
import { FadeUp } from "./FadeUp";

const points = [
  { icon: GraduationCap, label: "Bachelor of Dental Surgery (BDS)" },
  { icon: Award, label: "Root Canal Specialist · Reg. A-14456" },
  { icon: Heart, label: "Patient-first, gentle approach" },
  { icon: Sparkles, label: "Aesthetic & cosmetic dentistry" },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <FadeUp className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-sm uppercase tracking-[0.2em] text-teal-700 font-semibold mb-3">
            About the Doctor
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            Care that feels <span className="gradient-text italic">personal</span>.
          </h2>
          <p className="text-lg text-teal-900/70 leading-relaxed">{clinic.doctor.bio}</p>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {points.map((p, i) => (
            <FadeUp
              key={p.label}
              delay={i * 0.06}
              className="p-5 rounded-2xl bg-mint-50 border border-mint-100 hover:border-teal-700/20 hover:shadow-md transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-white grid place-items-center text-teal-700 mb-3 shadow-sm">
                <p.icon size={18} />
              </div>
              <div className="text-sm font-medium text-teal-900 leading-snug">{p.label}</div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
