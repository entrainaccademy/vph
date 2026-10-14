"use client";

import { LazyMotion, MotionConfig, domAnimation, m } from "motion/react";
import {
  DeliveryScene,
  FairScene,
  LocalScene,
  SupplyScene,
} from "@/components/WhyIllustrations";

const reasons = [
  {
    scene: SupplyScene,
    title: "Reliable supply",
    text: "Consistent stock so you don't miss sales.",
  },
  {
    scene: DeliveryScene,
    title: "On-time delivery",
    text: "Orders packed by our supply team and delivered to your door by our delivery team.",
  },
  {
    scene: LocalScene,
    title: "Local knowledge",
    text: "We understand Malappuram's markets and shops.",
  },
  {
    scene: FairScene,
    title: "Fair dealing",
    text: "19 years of long-term relationships.",
  },
];

// Illustrated cards that slide in from the left one after another when the row
// scrolls into view. Movement is skipped for reduced-motion visitors.
export default function WhyCards() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <m.ul
          className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ staggerChildren: 0.14 }}
        >
          {reasons.map(({ scene: Scene, title, text }) => (
            <m.li
              key={title}
              variants={{
                hidden: { opacity: 0, x: -120 },
                shown: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="flex items-center gap-3 rounded-2xl border-2 border-navy bg-white p-2.5 shadow-[3px_3px_0_0_var(--color-navy)] sm:flex-col sm:items-stretch sm:gap-0 sm:p-3 sm:shadow-[4px_4px_0_0_var(--color-navy)]"
            >
              {/* Compact side-by-side on phones, stacked from sm up. */}
              <div className="aspect-4/3 w-32 shrink-0 rounded-xl bg-wash p-1.5 sm:w-auto sm:p-2">
                {/* Inherits the card's hidden/shown state, then slides in after it. */}
                <m.div
                  className="h-full w-full"
                  variants={{
                    hidden: { opacity: 0, x: -60 },
                    shown: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  <Scene />
                </m.div>
              </div>
              <div className="min-w-0 pr-1 sm:px-2 sm:pt-4 sm:pb-3 sm:pr-2">
                <h3 className="text-lg font-semibold sm:text-xl">{title}</h3>
                <p className="mt-1 text-sm sm:mt-2 sm:text-base">{text}</p>
              </div>
            </m.li>
          ))}
        </m.ul>
      </MotionConfig>
    </LazyMotion>
  );
}
