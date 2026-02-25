import type { Variants } from "framer-motion";

/* =========================
   Fade + Blur Reveal
========================= */
export const fadeBlur: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    y: 30
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] // smooth cinematic ease
    }
  }
};

/* =========================
   Stagger Container
========================= */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

/* =========================
   Soft Scale In
========================= */
export const softScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

/* =========================
   Slide From Right
========================= */
export const slideRight: Variants = {
  hidden: {
    opacity: 0,
    x: 80
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

/* =========================
   Page Transition (Cinematic)
========================= */
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.98
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.98,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

/* =========================
   Hover Lift Effect
========================= */
export const hoverLift = {
  whileHover: {
    y: -8,
    scale: 1.03,
    transition: {
      duration: 0.3
    }
  }
};