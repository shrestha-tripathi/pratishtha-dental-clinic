import { motion, type MotionProps } from "framer-motion";
import type { ComponentProps } from "react";

type Props = ComponentProps<"div"> &
  MotionProps & { delay?: number; y?: number; as?: "div" };

/**
 * Drop-in replacement for fade-up motion blocks.
 * Eliminates first-paint flicker by inlining opacity:0 so the very first
 * render is already hidden, before framer-motion takes over.
 */
export function FadeUp({
  delay = 0,
  y = 24,
  children,
  style,
  ...rest
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ opacity: 0, willChange: "transform, opacity", ...style }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
