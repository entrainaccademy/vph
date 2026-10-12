"use client";

import { LazyMotion, MotionConfig, domAnimation, m } from "motion/react";

// Fades content up once as it scrolls into view. Movement is skipped for
// visitors who prefer reduced motion.
export default function Reveal({ children, delay = 0, className = "" }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <m.div
          className={className}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -60px 0px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
        >
          {children}
        </m.div>
      </MotionConfig>
    </LazyMotion>
  );
}
