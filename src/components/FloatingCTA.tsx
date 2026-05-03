import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { waLink, telLink } from "../lib/utils";

export function FloatingCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`fixed bottom-5 right-5 z-50 flex flex-col gap-3 transition-all duration-500 ${show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"}`}>
      <a
        href={waLink()}
        aria-label="WhatsApp"
        className="w-13 h-13 p-3.5 rounded-full bg-mint-500 text-white shadow-2xl shadow-mint-500/40 grid place-items-center hover:scale-110 transition-transform"
      >
        <MessageCircle size={22} />
      </a>
      <a
        href={telLink()}
        aria-label="Call"
        className="w-13 h-13 p-3.5 rounded-full bg-teal-700 text-white shadow-2xl shadow-teal-700/40 grid place-items-center hover:scale-110 transition-transform"
      >
        <Phone size={22} />
      </a>
    </div>
  );
}
