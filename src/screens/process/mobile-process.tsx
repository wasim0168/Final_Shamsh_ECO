"use client";
import { useState, useEffect, useRef, useCallback, type FC } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface RecyclingStep {
  id: number;
  number: string;
  label: string;
  title: string;
  icon: string;
  color: string;
  accentColor: string;
  description: string;
  features: string[];
  sceneEmoji: string[];
  bgGradient: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const RECYCLING_STEPS: RecyclingStep[] = [
  {
    id: 1,
    number: "STEP 01",
    label: "Collection",
    title: "Collection & Transport",
    icon: "🚛",
    color: "#0a4f70",
    accentColor: "#1a7ca3",
    bgGradient: "linear-gradient(135deg,#0a2540 0%,#0d3d5c 100%)",
    description:
      "We collect end-of-life solar panels from your location using specialized vehicles equipped with GPS tracking and safety features.",
    features: [
      "Free pickup service with scheduling",
      "Safe transportation with cushioning",
      "Real-time tracking system",
    ],
    sceneEmoji: ["🚛", "☀️", "📍"],
  },
  {
    id: 2,
    number: "STEP 02",
    label: "Inspection",
    title: "Inspection & Testing",
    icon: "🔬",
    color: "#1a5276",
    accentColor: "#2471a3",
    bgGradient: "linear-gradient(135deg,#0d2137 0%,#1a3a5a 100%)",
    description:
      "Each panel undergoes thorough inspection and testing to determine the optimal recycling approach and assess material quality.",
    features: [
      "Comprehensive quality assessment",
      "Advanced component analysis",
      "Detailed data logging",
    ],
    sceneEmoji: ["🔬", "☀️", "📊"],
  },
  {
    id: 3,
    number: "STEP 03",
    label: "Dismantling",
    title: "Dismantling",
    icon: "⚙️",
    color: "#154360",
    accentColor: "#1f618d",
    bgGradient: "linear-gradient(135deg,#0f2033 0%,#1a3450 100%)",
    description:
      "Careful manual and automated disassembly of aluminum frames, junction boxes, wiring, and protective glass layers.",
    features: [
      "Precision manual separation",
      "Aluminum frame removal",
      "Component sorting by type",
    ],
    sceneEmoji: ["⚙️", "🔧", "🪛"],
  },
  {
    id: 4,
    number: "STEP 04",
    label: "Chemical",
    title: "Chemical Treatment",
    icon: "⚗️",
    color: "#0e6655",
    accentColor: "#17a589",
    bgGradient: "linear-gradient(135deg,#052e23 0%,#0e4a38 100%)",
    description:
      "Advanced chemical processes using eco-friendly solvents to separate silicon cells from glass and encapsulant materials.",
    features: [
      "Eco-friendly biodegradable solvents",
      "Silicon cell extraction",
      "Purity enhancement process",
    ],
    sceneEmoji: ["⚗️", "🧪", "💧"],
  },
  {
    id: 5,
    number: "STEP 05",
    label: "Thermal",
    title: "Thermal Processing",
    icon: "🔥",
    color: "#784212",
    accentColor: "#d35400",
    bgGradient: "linear-gradient(135deg,#2d1a06 0%,#4a2a0a 100%)",
    description:
      "High-temperature treatment in controlled environments to recover valuable metals and eliminate residual organics.",
    features: [
      "Precision controlled heating",
      "Silver and copper recovery",
      "Heat energy capture and reuse",
    ],
    sceneEmoji: ["🔥", "🌡️", "⚡"],
  },
  {
    id: 6,
    number: "STEP 06",
    label: "Separation",
    title: "Material Separation",
    icon: "🔱",
    color: "#512e5f",
    accentColor: "#8e44ad",
    bgGradient: "linear-gradient(135deg,#1f1033 0%,#341a4a 100%)",
    description:
      "Advanced mechanical and electrostatic separation techniques to isolate glass, silicon, silver, and copper materials.",
    features: [
      "Precision mechanical sorting",
      "95%+ material recovery rate",
      "Rigorous quality control",
    ],
    sceneEmoji: ["🔱", "🪟", "💠"],
  },
  {
    id: 7,
    number: "STEP 07",
    label: "Purification",
    title: "Purification",
    icon: "💎",
    color: "#145a32",
    accentColor: "#1e8449",
    bgGradient: "linear-gradient(135deg,#082414 0%,#0f3b20 100%)",
    description:
      "Recovered materials undergo chemical refinement to achieve industry-standard purity levels suitable for manufacturing.",
    features: [
      "Advanced chemical refinement",
      "Laboratory quality testing",
      "Industry certification",
    ],
    sceneEmoji: ["💎", "✨", "🔩"],
  },
  {
    id: 8,
    number: "STEP 08",
    label: "Redistribution",
    title: "Redistribution",
    icon: "🚚",
    color: "#1a5276",
    accentColor: "#2980b9",
    bgGradient: "linear-gradient(135deg,#0a1f35 0%,#153452 100%)",
    description:
      "Purified materials are packaged and distributed to manufacturers for creating new solar panels and electronic components.",
    features: [
      "New solar panel manufacturing",
      "Electronic components production",
      "Sustainable building materials",
    ],
    sceneEmoji: ["🚚", "📦", "♻️"],
  },
];

const TOTAL_STEPS = 8;
const AUTO_PLAY_MS = 3000;

// ─── Step Scene (mobile-safe, purely emoji-based) ─────────────────────────────

const StepScene: FC<{ step: RecyclingStep; floatOffset: number }> = ({
  step,
  floatOffset,
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: 180,
        background: step.bgGradient,
        borderRadius: "16px 16px 0 0",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Animated background orbs */}
      <div
        style={{
          position: "absolute",
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${step.accentColor}33, transparent 70%)`,
          top: "10%",
          left: "10%",
          transform: `translate(${floatOffset * 0.6}px, ${floatOffset * 0.4}px)`,
          transition: "transform 0.05s linear",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${step.color}44, transparent 70%)`,
          bottom: "10%",
          right: "10%",
          transform: `translate(${-floatOffset * 0.5}px, ${-floatOffset * 0.3}px)`,
          transition: "transform 0.05s linear",
        }}
      />

      {/* Conveyor belt strip */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: 0,
          right: 0,
          height: 10,
          background: "rgba(255,255,255,0.08)",
          overflow: "hidden",
        }}
      >
        <div className="mobile-belt" />
      </div>

      {/* Central icon cluster */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          zIndex: 2,
          position: "relative",
        }}
      >
        {step.sceneEmoji.map((emoji, i) => (
          <div
            key={i}
            style={{
              fontSize: i === 1 ? "3.2rem" : "2rem",
              transform: `translateY(${floatOffset * (i % 2 === 0 ? 1 : -1) * 0.8}px) scale(${i === 1 ? 1 : 0.85})`,
              transition: "transform 0.05s linear",
              filter:
                i === 1 ? `drop-shadow(0 0 12px ${step.accentColor})` : "none",
              background:
                i === 1
                  ? `radial-gradient(circle at 50%, ${step.accentColor}22, transparent)`
                  : "none",
              padding: i === 1 ? "12px" : "8px",
              borderRadius: "50%",
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Step badge */}
      <div
        style={{
          position: "absolute",
          top: 14,
          left: 14,
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(8px)",
          borderRadius: 8,
          padding: "4px 10px",
          color: "#ffb74d",
          fontSize: "0.65rem",
          fontWeight: 800,
          letterSpacing: 1.5,
          border: "1px solid rgba(255,183,77,0.3)",
        }}
      >
        {step.number}
      </div>

      {/* Step title badge */}
      <div
        style={{
          position: "absolute",
          bottom: 14,
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(8px)",
          borderRadius: 20,
          padding: "5px 16px",
          color: "white",
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: 0.5,
          border: "1px solid rgba(255,255,255,0.1)",
          whiteSpace: "nowrap",
        }}
      >
        {step.icon} {step.title}
      </div>
    </div>
  );
};

// ─── Progress Dots ────────────────────────────────────────────────────────────

const ProgressDots: FC<{
  total: number;
  current: number;
  onSelect: (n: number) => void;
}> = ({ total, current, onSelect }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 6,
      justifyContent: "center",
      padding: "16px 0",
    }}
  >
    {Array.from({ length: total }, (_, i) => {
      const n = i + 1;
      const isActive = n === current;
      const isPast = n < current;
      return (
        <button
          key={n}
          onClick={() => onSelect(n)}
          aria-label={`Go to step ${n}`}
          style={{
            width: isActive ? 28 : 10,
            height: 10,
            borderRadius: 5,
            background: isActive
              ? "linear-gradient(to right,#0a4f70,#ff9800)"
              : isPast
                ? "#1a7ca3"
                : "rgba(10,79,112,0.2)",
            border: "none",
            cursor: "pointer",
            transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
            padding: 0,
            outline: "none",
          }}
        />
      );
    })}
  </div>
);

// ─── Feature List Item ────────────────────────────────────────────────────────

const FeatureItem: FC<{ text: string; color: string }> = ({ text, color }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 0",
      borderBottom: "1px solid rgba(10,79,112,0.07)",
    }}
  >
    <div
      style={{
        width: 22,
        height: 22,
        borderRadius: "50%",
        background: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.65rem",
        color: "white",
        fontWeight: 800,
        flexShrink: 0,
      }}
    >
      ✓
    </div>
    <span
      style={{
        fontSize: "0.875rem",
        color: "#1a1a2e",
        fontWeight: 500,
        lineHeight: 1.4,
      }}
    >
      {text}
    </span>
  </div>
);

// ─── Step Pill Selector (scrollable horizontal row) ───────────────────────────

const StepPillNav: FC<{
  steps: RecyclingStep[];
  current: number;
  onSelect: (n: number) => void;
}> = ({ steps, current, onSelect }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const active = el.querySelector(`[data-step="${current}"]`) as HTMLElement;
    if (active) {
      const left =
        active.offsetLeft - el.clientWidth / 2 + active.clientWidth / 2;
      el.scrollTo({ left, behavior: "smooth" });
    }
  }, [current]);

  return (
    <div
      ref={scrollRef}
      style={{
        display: "flex",
        gap: 8,
        overflowX: "auto",
        padding: "4px 16px 4px",
        scrollbarWidth: "none",
        WebkitOverflowScrolling: "touch",
      }}
      className="pill-nav"
    >
      {steps.map((s) => {
        const isActive = s.id === current;
        const isPast = s.id < current;
        return (
          <button
            key={s.id}
            data-step={s.id}
            onClick={() => onSelect(s.id)}
            style={{
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "7px 14px",
              borderRadius: 20,
              border: isActive
                ? `2px solid ${s.accentColor}`
                : "2px solid rgba(10,79,112,0.12)",
              background: isActive
                ? `linear-gradient(135deg,${s.color},${s.accentColor})`
                : isPast
                  ? "rgba(10,79,112,0.06)"
                  : "white",
              color: isActive ? "white" : isPast ? "#1a7ca3" : "#5a6c7d",
              fontWeight: 700,
              fontSize: "0.72rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              outline: "none",
              boxShadow: isActive
                ? `0 4px 14px ${s.color}55`
                : "0 2px 6px rgba(10,79,112,0.07)",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ fontSize: "0.9rem" }}>{isPast ? "✓" : s.icon}</span>
            {s.label}
          </button>
        );
      })}
    </div>
  );
};

// ─── Main Mobile Component ────────────────────────────────────────────────────

const MobileProcess: FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [floatOffset, setFloatOffset] = useState(0);
  const [slideDir, setSlideDir] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const rafRef = useRef<number | null>(null);
  const startTsRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  // Float animation
  useEffect(() => {
    const tick = (ts: number) => {
      if (!startTsRef.current) startTsRef.current = ts;
      const elapsed = ts - startTsRef.current;
      setFloatOffset(Math.sin(elapsed / 800) * 10);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const navigateTo = useCallback(
    (n: number, dir?: "left" | "right") => {
      if (animating || n === currentStep) return;
      const d = dir ?? (n > currentStep ? "right" : "left");
      setSlideDir(d);
      setAnimating(true);
      setTimeout(() => {
        setCurrentStep(n);
        setAnimating(false);
      }, 280);
    },
    [animating, currentStep],
  );

  const next = useCallback(() => {
    if (currentStep < TOTAL_STEPS) navigateTo(currentStep + 1, "right");
  }, [currentStep, navigateTo]);

  const prev = useCallback(() => {
    if (currentStep > 1) navigateTo(currentStep - 1, "left");
  }, [currentStep, navigateTo]);

  // Auto-play
  useEffect(() => {
    if (!isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= TOTAL_STEPS) {
          setIsPlaying(false);
          return TOTAL_STEPS;
        }
        return prev + 1;
      });
    }, AUTO_PLAY_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  // Swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      if (dx < 0) next();
      prev();
    }
    touchStartX.current = null;
  };

  const step = RECYCLING_STEPS[currentStep - 1];
  const progress = (currentStep / TOTAL_STEPS) * 100;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg,#f0f8ff 0%,#e2f0fb 100%)",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        color: "#1a1a2e",
        overflowX: "hidden",
        maxWidth: 480,
        margin: "0 auto",
      }}
      className="pt-20"
    >
      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <div
        style={{
          background: "linear-gradient(135deg,#0a4f70,#1a7ca3)",
          padding: "28px 20px 20px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Dot texture */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.06,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div
          style={{
            fontSize: "0.7rem",
            letterSpacing: 3,
            color: "#ffb74d",
            fontWeight: 800,
            marginBottom: 8,
            position: "relative",
          }}
        >
          ♻️ SOLAR RECYCLING
        </div>
        <h1
          style={{
            fontSize: "1.55rem",
            fontWeight: 800,
            color: "white",
            margin: "0 0 6px",
            lineHeight: 1.2,
            position: "relative",
          }}
        >
          8-Step Recycling
          <br />
          <span style={{ color: "#ffb74d" }}>Process</span>
        </h1>
        <p
          style={{
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.8)",
            margin: "0 0 16px",
            lineHeight: 1.5,
            position: "relative",
          }}
        >
          95% material recovery · 100% eco-friendly
        </p>

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 8,
            position: "relative",
          }}
        >
          {[
            { v: "95%", l: "Recovery" },
            { v: "8", l: "Steps" },
            { v: "100%", l: "Eco" },
            { v: "60K+", l: "Panels/yr" },
          ].map((s) => (
            <div
              key={s.l}
              style={{
                background: "rgba(255,255,255,0.12)",
                borderRadius: 10,
                padding: "8px 4px",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  background: "linear-gradient(to right,#fff,#ffb74d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.v}
              </div>
              <div
                style={{
                  fontSize: "0.6rem",
                  color: "rgba(255,255,255,0.75)",
                  fontWeight: 600,
                }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Pill Nav ────────────────────────────────────────────────────────── */}
      <div
        style={{
          background: "white",
          boxShadow: "0 2px 12px rgba(10,79,112,0.08)",
          padding: "12px 0 8px",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <StepPillNav
          steps={RECYCLING_STEPS}
          current={currentStep}
          onSelect={(n) => navigateTo(n)}
        />

        {/* Progress bar */}
        <div
          style={{
            height: 3,
            background: "rgba(10,79,112,0.08)",
            margin: "8px 16px 0",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: "linear-gradient(to right,#0a4f70,#ff9800)",
              borderRadius: 2,
              transition: "width 0.6s cubic-bezier(0.65,0,0.35,1)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div className="mobile-shine" />
          </div>
        </div>
      </div>

      {/* ── Step Card (swipeable) ────────────────────────────────────────────── */}
      <div
        style={{ padding: "16px 16px 0", position: "relative" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className={`step-card-slide ${animating ? `slide-out-${slideDir}` : "slide-in"}`}
          style={{
            background: "white",
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 12px 40px rgba(10,79,112,0.14)",
            border: "1px solid rgba(10,79,112,0.07)",
          }}
        >
          {/* Scene */}
          <StepScene step={step} floatOffset={floatOffset} />

          {/* Content */}
          <div style={{ padding: "20px 20px 4px" }}>
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg,${step.color},${step.accentColor})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.6rem",
                  boxShadow: `0 6px 20px ${step.color}44`,
                  flexShrink: 0,
                }}
              >
                {step.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "#ff9800",
                    fontWeight: 800,
                    letterSpacing: 1.5,
                    marginBottom: 3,
                  }}
                >
                  {step.number}
                </div>
                <div
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    color: "#0a4f70",
                    lineHeight: 1.2,
                  }}
                >
                  {step.title}
                </div>
              </div>
              {/* Step counter badge */}
              <div
                style={{
                  background: `linear-gradient(135deg,${step.color},${step.accentColor})`,
                  color: "white",
                  borderRadius: 10,
                  padding: "4px 10px",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  whiteSpace: "nowrap",
                }}
              >
                {currentStep}/{TOTAL_STEPS}
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: "0.875rem",
                color: "#5a6c7d",
                lineHeight: 1.65,
                margin: "0 0 16px",
              }}
            >
              {step.description}
            </p>

            {/* Features */}
            <div style={{ marginBottom: 8 }}>
              {step.features.map((f) => (
                <FeatureItem key={f} text={f} color="#81c784" />
              ))}
            </div>
          </div>
        </div>

        {/* ── Navigation Buttons ─────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            gap: 12,
            margin: "16px 0",
            alignItems: "center",
          }}
        >
          <button
            onClick={prev}
            disabled={currentStep === 1}
            style={{
              flex: 1,
              padding: "13px",
              borderRadius: 14,
              border: "2px solid rgba(10,79,112,0.15)",
              background: currentStep === 1 ? "rgba(10,79,112,0.04)" : "white",
              color: currentStep === 1 ? "rgba(10,79,112,0.3)" : "#0a4f70",
              fontWeight: 700,
              fontSize: "0.88rem",
              cursor: currentStep === 1 ? "default" : "pointer",
              transition: "all 0.2s",
              outline: "none",
              boxShadow:
                currentStep === 1 ? "none" : "0 4px 12px rgba(10,79,112,0.1)",
            }}
          >
            ← Previous
          </button>

          <button
            onClick={next}
            disabled={currentStep === TOTAL_STEPS}
            style={{
              flex: 1,
              padding: "13px",
              borderRadius: 14,
              border: "none",
              background:
                currentStep === TOTAL_STEPS
                  ? "rgba(10,79,112,0.08)"
                  : `linear-gradient(135deg,${step.color},${step.accentColor})`,
              color:
                currentStep === TOTAL_STEPS ? "rgba(10,79,112,0.35)" : "white",
              fontWeight: 700,
              fontSize: "0.88rem",
              cursor: currentStep === TOTAL_STEPS ? "default" : "pointer",
              transition: "all 0.2s",
              outline: "none",
              boxShadow:
                currentStep === TOTAL_STEPS
                  ? "none"
                  : `0 6px 18px ${step.color}44`,
            }}
          >
            Next →
          </button>
        </div>

        {/* Progress dots */}
        <ProgressDots
          total={TOTAL_STEPS}
          current={currentStep}
          onSelect={(n) => navigateTo(n)}
        />

        {/* ── All Steps Overview ─────────────────────────────────────────────── */}
        <div
          style={{
            marginTop: 8,
            marginBottom: 32,
            background: "white",
            borderRadius: 20,
            padding: "20px",
            boxShadow: "0 8px 24px rgba(10,79,112,0.09)",
            border: "1px solid rgba(10,79,112,0.07)",
          }}
        >
          <div
            style={{
              fontSize: "0.7rem",
              letterSpacing: 2,
              fontWeight: 800,
              color: "#0a4f70",
              marginBottom: 16,
              textTransform: "uppercase",
            }}
          >
            All Steps
          </div>

          {RECYCLING_STEPS.map((s, i) => {
            const isActive = s.id === currentStep;
            const isPast = s.id < currentStep;

            return (
              <button
                key={s.id}
                onClick={() => navigateTo(s.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px 14px",
                  borderRadius: 12,
                  border: isActive
                    ? `2px solid ${s.accentColor}`
                    : "2px solid transparent",
                  background: isActive
                    ? `linear-gradient(135deg,${s.color}11,${s.accentColor}18)`
                    : isPast
                      ? "rgba(10,79,112,0.03)"
                      : "transparent",
                  cursor: "pointer",
                  transition: "all 0.25s",
                  outline: "none",
                  textAlign: "left",
                  marginBottom: i < TOTAL_STEPS - 1 ? 4 : 0,
                }}
              >
                {/* Icon circle */}
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: isPast
                      ? "#81c784"
                      : isActive
                        ? `linear-gradient(135deg,${s.color},${s.accentColor})`
                        : "rgba(10,79,112,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: isPast ? "0.9rem" : "1.1rem",
                    flexShrink: 0,
                    boxShadow: isActive ? `0 4px 12px ${s.color}44` : "none",
                    transition: "all 0.3s",
                  }}
                >
                  {isPast ? "✓" : s.icon}
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "0.6rem",
                      fontWeight: 800,
                      color: isActive ? s.accentColor : "#9aabba",
                      letterSpacing: 1.2,
                      marginBottom: 1,
                    }}
                  >
                    {s.number}
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: isActive
                        ? "#0a4f70"
                        : isPast
                          ? "#4a7a95"
                          : "#8a9ab0",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {s.title}
                  </div>
                </div>

                {/* Arrow */}
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: isActive ? s.accentColor : "rgba(10,79,112,0.25)",
                    fontWeight: 700,
                    transition: "all 0.2s",
                  }}
                >
                  {isActive ? "●" : "›"}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Keyframes ─────────────────────────────────────────────────────────── */}
      <style>{`
        * { box-sizing: border-box; }

        .pill-nav::-webkit-scrollbar { display: none; }

        .mobile-belt {
          width: 200%;
          height: 100%;
          background: repeating-linear-gradient(
            90deg,
            rgba(255,255,255,0.12),
            rgba(255,255,255,0.12) 18px,
            rgba(255,255,255,0.04) 18px,
            rgba(255,255,255,0.04) 36px
          );
          animation: beltMove 1.2s linear infinite;
        }

        .mobile-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
          animation: shineMove 2s infinite;
        }

        @keyframes beltMove {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes shineMove {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        .slide-in {
          animation: slideIn 0.3s cubic-bezier(0.34,1.56,0.64,1) both;
        }

        .slide-out-right {
          animation: slideOutRight 0.28s ease-in both;
        }

        .slide-out-left {
          animation: slideOutLeft 0.28s ease-in both;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(18px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes slideOutRight {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-24px); }
        }

        @keyframes slideOutLeft {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(24px); }
        }
      `}</style>
    </div>
  );
};

export default MobileProcess;
