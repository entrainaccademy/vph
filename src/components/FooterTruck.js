"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion, useScroll, useTransform } from "motion/react";

// Delivery truck, side view, in the site palette.
function Truck() {
  return (
    <svg
      viewBox="0 0 280 120"
      aria-hidden="true"
      className="block h-auto w-full"
      fill="none"
      stroke="#0b2545"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="6" y="14" width="170" height="82" rx="4" fill="#fff" />
      <path d="M6 70h170" stroke="#e3c27a" strokeWidth="6" />
      <text
        x="91"
        y="52"
        textAnchor="middle"
        fontSize="30"
        fontWeight="700"
        fill="#0b2545"
        stroke="none"
        fontFamily="sans-serif"
      >
        VPH
      </text>
      <path d="M176 38h52l32 36v22h-84z" fill="#b8893a" />
      <path d="M188 46h32l20 24h-52z" fill="#dce6f4" />
      {[48, 100, 214].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="104" r="15" fill="#fff" />
          <circle cx={cx} cy="104" r="5" fill="#0b2545" stroke="none" />
        </g>
      ))}
    </svg>
  );
}

// A truck that drives along the road line as the footer scrolls into view. Stays parked for reduced-motion visitors.
export default function FooterTruck() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const left = useTransform(scrollYProgress, [0, 1], ["-24%", "72%"]);

  return (
    <LazyMotion features={domAnimation} strict>
      <div ref={ref} className="relative overflow-hidden bg-navy pt-8 sm:pt-12">
        <div className="relative h-24 sm:h-32">
          <m.div
            className="absolute bottom-0 w-[38vw] max-w-72 min-w-36"
            style={reduce ? { left: "60%" } : { left }}
          >
            <Truck />
          </m.div>
        </div>
      </div>
    </LazyMotion>
  );
}
