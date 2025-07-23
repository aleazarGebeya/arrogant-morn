"use client";
import React from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";

const stats = [
  { label: "Teams Empowered", value: 1200 },
  { label: "API Uptime", value: "99.99%" },
  { label: "Integrations", value: 74 },
  { label: "Avg. ROI", value: "4.7x" },
];

function AnimatedNumber({ value }: { value: number | string }) {
  const [display, setDisplay] = React.useState(typeof value === "number" ? 0 : value);
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (shouldReduceMotion || typeof value === "string" || !inView) {
      setDisplay(value);
      return;
    }
    let start = 0;
    let end = Number(value);
    let duration = 1300;
    let startTime: number | null = null;
    function animateStep(now: number) {
      if (!startTime) startTime = now;
      let elapsed = now - startTime;
      let progress = Math.min(elapsed / duration, 1);
      let current = Math.round(progress * (end - start) + start);
      setDisplay(current);
      if (progress < 1) {
        requestAnimationFrame(animateStep);
      }
    }
    if (typeof value === "number") {
      requestAnimationFrame(animateStep);
    } else {
      setDisplay(value);
    }
    // eslint-disable-next-line
  }, [value, inView, shouldReduceMotion]);
  return <div ref={ref}>{display}</div>;
}

export function AnimatedStats() {
  return (
    <section id="stats" className="relative py-20 md:py-28 px-6 max-w-5xl mx-auto">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <span className="block absolute w-[480px] h-[480px] right-[-30%] top-[15%] bg-gradient-to-br from-cyan-400/40 via-indigo-400/30 to-transparent rounded-full blur-[90px]" />
        <span className="block absolute w-[300px] h-[300px] left-[-10%] bottom-[8%] bg-gradient-to-tr from-violet-300/20 to-transparent rounded-full blur-[120px]" />
      </div>
      <div className="bg-white/30 border border-white/30 rounded-3xl shadow-xl backdrop-blur-2xl p-10 md:p-16 flex flex-wrap items-center justify-evenly gap-10">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2 min-w-[130px]">
            <motion.div
              className="text-5xl md:text-6xl font-extrabold bg-gradient-to-tr from-cyan-400 via-indigo-300 to-violet-500 bg-clip-text text-transparent tracking-tighter drop-shadow animate-in duration-700 zoom-in-75"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, type: "spring", bounce: 0.4 }}
            >
              <AnimatedNumber value={stat.value} />
            </motion.div>
            <span className="text-lg md:text-xl font-medium text-white/90 mt-2 drop-shadow-md">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
