import * as Icons from "lucide-react";
import { clinic } from "../data/clinic";
import { FadeUp } from "./FadeUp";

export function Trust() {
  return (
    <section id="trust" className="py-20 md:py-28 bg-teal-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-mint-500 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gold blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <FadeUp className="max-w-2xl mb-12">
          <div className="text-sm uppercase tracking-[0.2em] text-mint-500 font-semibold mb-3">
            Why patients trust us
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Built on care, <span className="text-gold italic">backed by science</span>.
          </h2>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {clinic.trustPillars.map((p, i) => {
            const Icon = (Icons[p.icon as keyof typeof Icons] as React.ComponentType<{ size?: number }>) ?? Icons.ShieldCheck;
            return (
              <FadeUp
                key={p.title}
                delay={(i % 3) * 0.07}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-mint-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-mint-500/20 text-mint-500 grid place-items-center mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-display font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{p.desc}</p>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
