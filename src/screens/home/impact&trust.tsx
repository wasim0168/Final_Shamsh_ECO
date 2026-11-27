"use client";

import { Leaf, Zap, TrendingUp, Award, CheckCircle2, Sparkles } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring, type Variants } from "motion/react";
import { useEffect, useRef } from "react";

/* ---------------- Animations ---------------- */
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ---------------- Animated Counter (Fixed for mobile) ---------------- */
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { damping: 30, stiffness: 90 });

  // Start the animation as soon as it comes into view
  useEffect(() => {
    if (inView) {
      // small delay helps on mobile when element enters viewport
      const t = setTimeout(() => motionVal.set(value), 50);
      return () => clearTimeout(t);
    }
  }, [inView, value, motionVal]);

  // Update text from spring value + fallback
  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toLocaleString();
      }
    });

    // 🔧 Fallback: if spring animation fails (reduced motion / mobile quirks),
    // guarantee the final number is shown after a short time.
    const fallback = setTimeout(() => {
      if (ref.current) {
        ref.current.textContent = value.toLocaleString();
      }
    }, 1500);

    return () => {
      unsubscribe();
      clearTimeout(fallback);
    };
  }, [spring, value]);

  return (
    <span>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

export default function ImpactSection() {
  const stats = [
    {
      icon: Leaf,
      value: 150000,
      suffix: "+",
      label: "Solar Modules Recycled",
      description: "Successfully processed",
      accent: "from-emerald-400/30 to-emerald-500/0",
      glow: "group-hover:shadow-emerald-400/20",
      ring: "ring-emerald-300/20",
    },
    {
      icon: Zap,
      value: 25000,
      suffix: "+",
      label: "Tons CO₂ Reduced",
      description: "Environmental impact",
      accent: "from-yellow-300/30 to-yellow-500/0",
      glow: "group-hover:shadow-yellow-300/20",
      ring: "ring-yellow-200/20",
    },
    {
      icon: TrendingUp,
      value: 95,
      suffix: "%",
      label: "Materials Recovered",
      description: "Recovery efficiency",
      accent: "from-sky-300/30 to-sky-500/0",
      glow: "group-hover:shadow-sky-300/20",
      ring: "ring-sky-200/20",
    },
    {
      icon: Award,
      value: 12,
      suffix: "+",
      label: "Years of Experience",
      description: "Industry expertise",
      accent: "from-fuchsia-300/30 to-fuchsia-500/0",
      glow: "group-hover:shadow-fuchsia-300/20",
      ring: "ring-fuchsia-200/20",
    },
  ];

  const certifications = [
    { icon: CheckCircle2, text: "ISO Certified" },
    { icon: Leaf, text: "100% Eco-Friendly" },
    { icon: TrendingUp, text: "E-Waste Compliant" },
  ];

  return (
    <section className="relative w-full overflow-hidden mt-1 bg-primary py-6 sm:py-10 lg:py-8 px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="space-y-12 sm:space-y-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={item} className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/[0.08] px-4 py-1.5 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-primary-foreground/90" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-primary-foreground">
                Our Impact &amp; Trust
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="mx-auto max-w-3xl space-y-3 text-center sm:space-y-4"
          >
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl text-balance">
              Making a Real Difference
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-primary-foreground/75 sm:text-base md:text-lg text-balance">
              Building trust through measurable environmental impact — one
              recycled panel at a time.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={card}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className={`group relative overflow-hidden rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.06] p-6 backdrop-blur-md ring-1 ${stat.ring} ${stat.glow} transition-shadow duration-300 hover:shadow-2xl sm:p-7`}
                >
                  <div
                    className={`pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${stat.accent} blur-2xl`}
                  />

                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-primary-foreground sm:h-6 sm:w-6" />
                  </div>

                  <div className="mb-1.5 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mb-1 text-sm font-semibold text-primary-foreground sm:text-base">
                    {stat.label}
                  </div>
                  <p className="text-xs text-primary-foreground/60 sm:text-sm">
                    {stat.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-emerald-300 to-teal-200 transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            variants={item}
            className="mx-auto h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent"
          />

          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.text}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/[0.08] px-4 py-2.5 backdrop-blur-md transition-colors hover:border-primary-foreground/30 hover:bg-primary-foreground/[0.14] sm:px-5 sm:py-3">
                    <Icon className="h-4 w-4 text-emerald-300 sm:h-5 sm:w-5" />
                    <span className="text-xs font-semibold text-primary-foreground sm:text-sm">
                      {cert.text}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}