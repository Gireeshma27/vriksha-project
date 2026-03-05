"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Pre-built variants for reuse
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

// Wrapper that triggers animation when element enters viewport
export function AnimateOnScroll({
  children,
  variants = fadeUp,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.15,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger container that animates children on scroll
export function StaggerOnScroll({
  children,
  variants = staggerContainer,
  className = "",
  once = true,
  threshold = 0.1,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// A motion item for use inside StaggerOnScroll
export function StaggerItem({
  children,
  variants = fadeUp,
  className = "",
  duration = 0.55,
}) {
  return (
    <motion.div
      variants={variants}
      transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Animated section heading group
export function AnimatedHeading({ badge, title, subtitle, center = true, light = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={center ? "text-center" : ""}
    >
      {badge && (
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider text-sm font-semibold ${
            light
              ? "bg-white/15 text-green-300 border border-white/20"
              : "bg-green-100 text-forest-600"
          }`}
        >
          {badge}
        </motion.div>
      )}
      {title && (
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className={`text-4xl sm:text-5xl font-bold mb-4 ${light ? "text-white" : "text-forest-800"}`}
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {title}
        </motion.h2>
      )}
      {subtitle && (
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={`text-lg max-w-2xl leading-relaxed ${center ? "mx-auto" : ""} ${
            light ? "text-white/70" : "text-forest-500"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
