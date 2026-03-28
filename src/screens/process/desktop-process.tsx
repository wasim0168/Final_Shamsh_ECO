"use client";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FC,
  type ReactNode,
} from "react";

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
}

interface StatItem {
  value: string;
  label: string;
}

interface MaterialItem {
  id: string;
  label: string;
  color: string;
  icon: string;
  x: string;
  y: string;
}

interface MachineConfig {
  label: string;
  left: string;
  bottom: string;
  w: number;
  h: number;
  color: string;
  radius?: string;
}

interface SceneAnimationProps {
  step: number;
}

interface TruckProps {
  style?: CSSProperties;
  color?: string;
  darkColor?: string;
}

interface SolarPanelProps {
  style?: CSSProperties;
  children?: ReactNode;
}

interface StepIndicatorProps {
  step: RecyclingStep;
  isActive: boolean;
  isPast: boolean;
  onClick: () => void;
}

interface StepCardProps {
  step: RecyclingStep;
  isActive: boolean;
  onClick: () => void;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const RECYCLING_STEPS: readonly RecyclingStep[] = [
  {
    id: 1,
    number: "STEP 01",
    label: "Collection",
    title: "Collection & Transport",
    icon: "🚛",
    color: "#0a4f70",
    accentColor: "#1a7ca3",
    description:
      "We collect end-of-life solar panels from your location using specialized vehicles equipped with GPS tracking and safety features.",
    features: [
      "Free pickup service with scheduling",
      "Safe transportation with cushioning",
      "Real-time tracking system",
    ],
  },
  {
    id: 2,
    number: "STEP 02",
    label: "Inspection",
    title: "Inspection & Testing",
    icon: "🔬",
    color: "#1a5276",
    accentColor: "#2471a3",
    description:
      "Each panel undergoes thorough inspection and testing to determine the optimal recycling approach and assess material quality.",
    features: [
      "Comprehensive quality assessment",
      "Advanced component analysis",
      "Detailed data logging",
    ],
  },
  {
    id: 3,
    number: "STEP 03",
    label: "Dismantling",
    title: "Dismantling",
    icon: "⚙️",
    color: "#154360",
    accentColor: "#1f618d",
    description:
      "Careful manual and automated disassembly of aluminum frames, junction boxes, wiring, and protective glass layers.",
    features: [
      "Precision manual separation",
      "Aluminum frame removal",
      "Component sorting by type",
    ],
  },
  {
    id: 4,
    number: "STEP 04",
    label: "Chemical",
    title: "Chemical Treatment",
    icon: "⚗️",
    color: "#0e6655",
    accentColor: "#17a589",
    description:
      "Advanced chemical processes using eco-friendly solvents to separate silicon cells from glass and encapsulant materials.",
    features: [
      "Eco-friendly biodegradable solvents",
      "Silicon cell extraction",
      "Purity enhancement process",
    ],
  },
  {
    id: 5,
    number: "STEP 05",
    label: "Thermal",
    title: "Thermal Processing",
    icon: "🔥",
    color: "#784212",
    accentColor: "#d35400",
    description:
      "High-temperature treatment in controlled environments to recover valuable metals and eliminate residual organics.",
    features: [
      "Precision controlled heating",
      "Silver and copper recovery",
      "Heat energy capture and reuse",
    ],
  },
  {
    id: 6,
    number: "STEP 06",
    label: "Separation",
    title: "Material Separation",
    icon: "🔱",
    color: "#512e5f",
    accentColor: "#8e44ad",
    description:
      "Advanced mechanical and electrostatic separation techniques to isolate glass, silicon, silver, and copper materials.",
    features: [
      "Precision mechanical sorting",
      "95%+ material recovery rate",
      "Rigorous quality control",
    ],
  },
  {
    id: 7,
    number: "STEP 07",
    label: "Purification",
    title: "Purification",
    icon: "💎",
    color: "#145a32",
    accentColor: "#1e8449",
    description:
      "Recovered materials undergo chemical refinement to achieve industry-standard purity levels suitable for manufacturing.",
    features: [
      "Advanced chemical refinement",
      "Laboratory quality testing",
      "Industry certification",
    ],
  },
  {
    id: 8,
    number: "STEP 08",
    label: "Redistribution",
    title: "Redistribution",
    icon: "🚚",
    color: "#1a5276",
    accentColor: "#2980b9",
    description:
      "Purified materials are packaged and distributed to manufacturers for creating new solar panels and electronic components.",
    features: [
      "New solar panel manufacturing",
      "Electronic components production",
      "Sustainable building materials",
    ],
  },
] as const;

const STATS: readonly StatItem[] = [
  { value: "95%", label: "Recovery Rate" },
  { value: "8", label: "Step Process" },
  { value: "100%", label: "Eco-Friendly" },
  { value: "60K+", label: "Panels/Year" },
] as const;

const MATERIALS: readonly MaterialItem[] = [
  {
    id: "glass",
    label: "Glass",
    color: "#4fc3f7",
    icon: "🪟",
    x: "78%",
    y: "28%",
  },
  {
    id: "silicon",
    label: "Silicon",
    color: "#78909c",
    icon: "💠",
    x: "84%",
    y: "28%",
  },
  {
    id: "silver",
    label: "Silver",
    color: "#b0bec5",
    icon: "🔩",
    x: "78%",
    y: "53%",
  },
  {
    id: "copper",
    label: "Copper",
    color: "#ff9800",
    icon: "⚡",
    x: "84%",
    y: "53%",
  },
] as const;

const MACHINES: readonly MachineConfig[] = [
  {
    label: "Inspection",
    left: "22%",
    bottom: "52%",
    w: 110,
    h: 80,
    color: "#546e7a",
  },
  {
    label: "Dismantling",
    left: "38%",
    bottom: "40%",
    w: 130,
    h: 100,
    color: "#455a64",
  },
  {
    label: "Chemical",
    left: "52%",
    bottom: "55%",
    w: 100,
    h: 70,
    color: "#37474f",
    radius: "40% 40% 8px 8px",
  },
  {
    label: "Thermal",
    left: "63%",
    bottom: "40%",
    w: 100,
    h: 120,
    color: "#4e342e",
  },
  {
    label: "Separation",
    left: "74%",
    bottom: "55%",
    w: 160,
    h: 80,
    color: "#1a237e",
  },
] as const;

const PANEL_POSITIONS: readonly { left: string; bottom: string }[] = [
  { left: "8%", bottom: "42%" },
  { left: "28%", bottom: "50%" },
  { left: "40%", bottom: "46%" },
  { left: "55%", bottom: "52%" },
  { left: "66%", bottom: "40%" },
] as const;

const TOTAL_STEPS = 8;
const AUTO_PLAY_INTERVAL_MS = 2200;
const FLOAT_PERIOD_MS = 700;

// ─── Utility Helpers ─────────────────────────────────────────────────────────

const clamp = (val: number, min: number, max: number): number =>
  Math.max(min, Math.min(max, val));

// ─── Sub-components ──────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────

const SolarPanelEl: FC<SolarPanelProps> = ({ style, children }) => (
  <div
    style={{
      position: "absolute",
      width: 120,
      height: 70,
      background: "linear-gradient(45deg,#1a237e,#283593)",
      borderRadius: 8,
      boxShadow:
        "0 8px 20px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "2rem",
      zIndex: 20,
      transition: "all 0.8s cubic-bezier(0.34,1.56,0.64,1)",
      ...style,
    }}
  >
    {children ?? "☀️"}
  </div>
);

const Truck: FC<TruckProps> = ({
  style,
  color = "#e74c3c",
  darkColor = "#c0392b",
}) => (
  <div
    style={{
      position: "absolute",
      width: 200,
      height: 90,
      background: `linear-gradient(to right,${color},${darkColor})`,
      borderRadius: "12px 12px 4px 4px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
      transition: "all 1.5s ease-in-out",
      zIndex: 15,
      ...style,
    }}
  >
    {/* Cab */}
    <div
      style={{
        position: "absolute",
        top: -44,
        left: 18,
        width: 72,
        height: 44,
        background: darkColor,
        borderRadius: "8px 8px 0 0",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 8,
          left: 8,
          width: 36,
          height: 22,
          background: "linear-gradient(135deg,#3498db,#2980b9)",
          borderRadius: 4,
        }}
      />
    </div>
    {/* Wheels */}
    {([28, 148] as const).map((left) => (
      <div
        key={left}
        style={{
          position: "absolute",
          bottom: -13,
          left,
          width: 30,
          height: 30,
          background: "radial-gradient(circle,#2c3e50,#1a1a2e)",
          borderRadius: "50%",
          border: "3px solid #34495e",
        }}
      />
    ))}
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────

const SceneAnimation: FC<SceneAnimationProps> = ({ step }) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const [floatOffset, setFloatOffset] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startTsRef = useRef<number | null>(null);

  // Continuous float oscillation
  useEffect(() => {
    const tick = (ts: number) => {
      if (startTsRef.current === null) startTsRef.current = ts;
      const elapsed = ts - startTsRef.current;
      setFloatOffset(Math.sin(elapsed / FLOAT_PERIOD_MS) * 12);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const showPanel = step < 6;
  const showMaterials = step >= 6;
  const showTruck1 = step === 1;
  const showTruck2 = step === TOTAL_STEPS;

  const panelPosIndex = clamp(step - 1, 0, PANEL_POSITIONS.length - 1);
  const panelPos = PANEL_POSITIONS[panelPosIndex];

  const panelScaleReduction = step >= 4 ? (step - 4) * 0.05 : 0;
  const panelScale = Math.max(0.5, 1 - panelScaleReduction);

  return (
    <div
      className="scene-container"
      style={{ position: "absolute", inset: 0, overflow: "hidden" }}
    >
      {/* Conveyor belt */}
      <div
        style={{
          position: "absolute",
          bottom: "35%",
          left: "5%",
          width: "88%",
          height: 44,
          background: "linear-gradient(to bottom,#7f8c8d,#95a5a6)",
          borderRadius: 6,
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        <div className="conveyor-belt" />
      </div>

      {/* Factory machines */}
      {MACHINES.map((m) => (
        <div
          key={m.label}
          style={{
            position: "absolute",
            left: m.left,
            bottom: m.bottom,
            width: m.w,
            height: m.h,
            background: `linear-gradient(to bottom,${m.color},${m.color}dd)`,
            borderRadius: m.radius ?? 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <span
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
              textShadow: "0 1px 4px rgba(0,0,0,0.5)",
            }}
          >
            {m.label}
          </span>
        </div>
      ))}

      {/* Collection truck */}
      <Truck
        style={{
          bottom: "28%",
          left: showTruck1 ? "2%" : "-30%",
          opacity: showTruck1 ? 1 : 0,
        }}
        color="#e74c3c"
        darkColor="#c0392b"
      />

      {/* Solar panel */}
      {showPanel && (
        <div ref={panelRef} style={{ position: "absolute", ...panelPos }}>
          <SolarPanelEl
            style={{
              position: "relative",
              transform: [
                `translateY(${step === 2 ? floatOffset * 0.5 : 0}px)`,
                `rotate(${step === 2 ? floatOffset * 2 : 0}deg)`,
                `scale(${panelScale})`,
              ].join(" "),
              filter:
                step >= 5
                  ? `hue-rotate(${floatOffset * 3}deg) brightness(1.2)`
                  : "none",
            }}
          >
            ☀️
          </SolarPanelEl>
        </div>
      )}

      {/* Separated materials (step 6+) */}
      {showMaterials &&
        MATERIALS.map((mat, i) => {
          const isEven = i % 2 === 0;
          const isPurification = step === 7;
          return (
            <div
              key={mat.id}
              style={{
                position: "absolute",
                left: mat.x,
                top: mat.y,
                width: 56,
                height: 40,
                background: `linear-gradient(45deg,${mat.color}88,${mat.color})`,
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.4rem",
                boxShadow: isPurification
                  ? `0 0 20px 6px ${mat.color}, 0 4px 12px rgba(0,0,0,0.3)`
                  : "0 4px 12px rgba(0,0,0,0.3)",
                transform: `translateY(${floatOffset * (isEven ? 1 : -1)}px)`,
                transition: "box-shadow 0.5s ease",
                animation: "fadeScaleIn 0.5s ease forwards",
                animationDelay: `${i * 0.1}s`,
                opacity: 0,
              }}
            >
              {mat.icon}
            </div>
          );
        })}

      {/* Redistribution truck */}
      <Truck
        style={{
          bottom: "28%",
          right: showTruck2 ? "2%" : "-30%",
          opacity: showTruck2 ? 1 : 0,
        }}
        color="#4caf50"
        darkColor="#388e3c"
      />

      {/* Ceiling lights */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-around",
          pointerEvents: "none",
        }}
      >
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "radial-gradient(circle,#ffeb3b,#ff9800)",
              boxShadow: `0 0 ${16 + Math.sin(floatOffset / 8 + i) * 6}px ${
                8 + Math.sin(floatOffset / 8 + i) * 3
              }px rgba(255,235,59,0.6)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// ─── Step Indicator ───────────────────────────────────────────────────────────

const StepIndicator: FC<StepIndicatorProps> = ({
  step,
  isActive,
  isPast,
  onClick,
}) => (
  <div
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === "Enter" && onClick()}
    aria-label={`Go to step ${step.id}: ${step.title}`}
    aria-current={isActive ? "step" : undefined}
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      zIndex: 2,
      minWidth: 60,
      flex: 1,
      outline: "none",
    }}
    onMouseEnter={(e) =>
      ((e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)")
    }
    onMouseLeave={(e) =>
      ((e.currentTarget as HTMLDivElement).style.transform = "none")
    }
  >
    <div
      style={{
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: isActive
          ? "linear-gradient(135deg,#0a4f70,#1a7ca3)"
          : "white",
        color: isActive ? "white" : "#0a4f70",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: "1rem",
        boxShadow: isActive
          ? "0 4px 16px rgba(10,79,112,0.4)"
          : "0 4px 12px rgba(10,79,112,0.12)",
        border: isActive
          ? "2px solid #ff9800"
          : "2px solid rgba(10,79,112,0.1)",
        marginBottom: 10,
        transition: "all 0.3s",
      }}
    >
      {isPast ? "✓" : step.id}
    </div>
    <div
      style={{
        fontSize: "0.65rem",
        fontWeight: 600,
        color: isActive ? "#0a4f70" : "#5a6c7d",
        textAlign: "center",
        lineHeight: 1.3,
        maxWidth: 64,
        transition: "color 0.3s",
      }}
    >
      {step.label}
    </div>
  </div>
);

// ─── Step Card ────────────────────────────────────────────────────────────────

const StepCard: FC<StepCardProps> = ({ step, isActive, onClick }) => (
  <div
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === "Enter" && onClick()}
    aria-label={`${step.number}: ${step.title}`}
    style={{
      background: "white",
      borderRadius: 20,
      padding: "32px 28px",
      boxShadow: isActive
        ? "0 20px 45px rgba(10,79,112,0.2)"
        : "0 12px 30px rgba(10,79,112,0.08)",
      transform: isActive ? "translateY(-12px)" : "none",
      transition: "all 0.4s ease",
      border: isActive
        ? "2px solid rgba(10,79,112,0.2)"
        : "1px solid rgba(10,79,112,0.07)",
      cursor: "pointer",
      position: "relative",
      overflow: "hidden",
      outline: "none",
    }}
    onMouseEnter={(e) => {
      if (!isActive)
        (e.currentTarget as HTMLDivElement).style.transform =
          "translateY(-6px)";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLDivElement).style.transform = isActive
        ? "translateY(-12px)"
        : "none";
    }}
  >
    {/* Accent bar */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 5,
        background: `linear-gradient(to right,${step.color},${step.accentColor})`,
      }}
    />

    {/* Header */}
    <div style={{ display: "flex", alignItems: "center", marginBottom: 22 }}>
      <div
        style={{
          width: 64,
          height: 64,
          background: `linear-gradient(135deg,${step.color},${step.accentColor})`,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 18,
          fontSize: "1.8rem",
          boxShadow: `0 8px 20px ${step.color}44`,
          flexShrink: 0,
        }}
      >
        {step.icon}
      </div>
      <div>
        <div
          style={{
            fontSize: "0.8rem",
            color: "#ff9800",
            fontWeight: 700,
            letterSpacing: 1,
            marginBottom: 4,
          }}
        >
          {step.number}
        </div>
        <div
          style={{
            fontSize: "1.15rem",
            color: "#0a4f70",
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          {step.title}
        </div>
      </div>
    </div>

    {/* Description */}
    <p
      style={{
        color: "#5a6c7d",
        marginBottom: 20,
        fontSize: "0.92rem",
        lineHeight: 1.65,
      }}
    >
      {step.description}
    </p>

    {/* Features */}
    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
      {step.features.map((feature) => (
        <li
          key={feature}
          style={{
            padding: "10px 0",
            borderBottom: "1px solid rgba(10,79,112,0.08)",
            display: "flex",
            alignItems: "center",
            fontWeight: 500,
            fontSize: "0.88rem",
            color: "#1a1a2e",
          }}
        >
          <div
            style={{
              width: 22,
              height: 22,
              background: "#81c784",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 12,
              fontSize: "0.7rem",
              color: "white",
              fontWeight: 700,
              flexShrink: 0,
            }}
          >
            ✓
          </div>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

// ─── Root Component ───────────────────────────────────────────────────────────

const DesktopProcess = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const playIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopAutoPlay = useCallback(() => {
    if (playIntervalRef.current !== null) {
      clearInterval(playIntervalRef.current);
      playIntervalRef.current = null;
    }
    setIsPlaying(false);
  }, []);

  const goToStep = useCallback(
    (n: number) => {
      stopAutoPlay();
      setCurrentStep(clamp(n, 1, TOTAL_STEPS));
    },
    [stopAutoPlay],
  );

  // Auto-advance when playing
  useEffect(() => {
    if (!isPlaying) return;

    playIntervalRef.current = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= TOTAL_STEPS) {
          stopAutoPlay();
          return TOTAL_STEPS;
        }
        return prev + 1;
      });
    }, AUTO_PLAY_INTERVAL_MS);

    return () => {
      if (playIntervalRef.current !== null)
        clearInterval(playIntervalRef.current);
    };
  }, [isPlaying, stopAutoPlay]);

  const progressPct = (currentStep / TOTAL_STEPS) * 100;
  const activeStep = RECYCLING_STEPS[currentStep - 1];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#f8fdff 0%,#e6f4ff 100%)",
        fontFamily: "'Segoe UI',system-ui,sans-serif",
        color: "#1a1a2e",
        overflowX: "hidden",
      }}
      className="pt-20"
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "20px 16px" }}>
        {/* ── Header ─────────────────────────────────────────────────────────── */}
        <header
          style={{
            textAlign: "center",
            padding: "52px 40px",
            background: "linear-gradient(135deg,#0a4f70,#1a7ca3)",
            color: "white",
            borderRadius: 20,
            marginBottom: 40,
            boxShadow: "0 20px 40px rgba(10,79,112,0.2)",
            position: "relative",
            overflow: "hidden",
          }}
          className="page-header"
        >
          {/* Dot-grid background texture */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.07,
              backgroundImage:
                "radial-gradient(circle at 20% 30%,rgba(255,255,255,0.4) 2px,transparent 2px)," +
                "radial-gradient(circle at 80% 70%,rgba(255,255,255,0.3) 1px,transparent 1px)",
              backgroundSize: "50px 50px,30px 30px",
            }}
          />

          <h1
            style={{
              fontSize: "clamp(1.8rem,4vw,3.2rem)",
              fontWeight: 800,
              marginBottom: 16,
              textShadow: "0 4px 8px rgba(0,0,0,0.2)",
              letterSpacing: "-0.5px",
              position: "relative",
            }}
          >
            <span style={{ color: "#ffb74d" }}>Premium</span> Solar Panel
            Recycling
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem,1.5vw,1.2rem)",
              maxWidth: 800,
              margin: "0 auto 32px",
              fontWeight: 300,
              opacity: 0.95,
              lineHeight: 1.65,
              position: "relative",
            }}
          >
            Experience our state-of-the-art 8-step recycling process with
            advanced visualization, real-time tracking, and 95% material
            recovery efficiency.
          </p>

          {/* Stats */}
          <div
            className="stats-grid"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
              flexWrap: "wrap",
              position: "relative",
            }}
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 16,
                  padding: "16px 28px",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.2)",
                  minWidth: 130,
                }}
              >
                <div
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: 800,
                    background: "linear-gradient(to right,#fff,#ffb74d)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{ fontSize: "0.9rem", opacity: 0.9, fontWeight: 500 }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </header>

        {/* ── Animation Scene ─────────────────────────────────────────────────── */}
        <div
          role="region"
          aria-label="Recycling process animation"
          className="scene-wrapper"
          style={{
            position: "relative",
            height: 480,
            background: "linear-gradient(to bottom,#0a2540,#1a3a5f)",
            borderRadius: 20,
            marginBottom: 36,
            overflow: "hidden",
            boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Floor */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: 90,
              background: "linear-gradient(to top,#2c3e50,#34495e)",
              boxShadow: "inset 0 10px 20px rgba(0,0,0,0.5)",
            }}
          />
          {/* Ceiling */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              width: "100%",
              height: 68,
              background: "linear-gradient(to bottom,#2c3e50,#34495e)",
              boxShadow: "0 6px 24px rgba(0,0,0,0.5)",
            }}
          />

          <SceneAnimation step={currentStep} />

          {/* Step label overlay */}
          <div
            aria-live="polite"
            className="step-label-overlay"
            style={{
              position: "absolute",
              bottom: 110,
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(8px)",
              borderRadius: 12,
              padding: "10px 28px",
              color: "white",
              fontWeight: 700,
              fontSize: "1rem",
              letterSpacing: 1,
              border: "1px solid rgba(255,255,255,0.1)",
              whiteSpace: "nowrap",
            }}
          >
            {activeStep.icon} {activeStep.number} — {activeStep.title}
          </div>
        </div>

        {/* ── Step Indicators ─────────────────────────────────────────────────── */}
        <nav
          aria-label="Process steps"
          className="step-indicators-nav"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 28,
            position: "relative",
            padding: "0 4px",
            overflowX: "auto",
            gap: 4,
          }}
        >
          {/* Connecting line */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 24,
              left: 36,
              right: 36,
              height: 3,
              background: "rgba(10,79,112,0.12)",
              zIndex: 1,
            }}
          />
          {RECYCLING_STEPS.map((s) => (
            <StepIndicator
              key={s.id}
              step={s}
              isActive={currentStep === s.id}
              isPast={currentStep > s.id}
              onClick={() => goToStep(s.id)}
            />
          ))}
        </nav>

        {/* ── Progress Bar ────────────────────────────────────────────────────── */}
        <div
          role="progressbar"
          aria-valuenow={currentStep}
          aria-valuemin={1}
          aria-valuemax={TOTAL_STEPS}
          aria-label="Recycling process progress"
          style={{
            height: 12,
            background: "rgba(10,79,112,0.1)",
            borderRadius: 6,
            marginBottom: 36,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progressPct}%`,
              background: "linear-gradient(to right,#0a4f70,#ff9800)",
              borderRadius: 6,
              transition: "width 0.7s cubic-bezier(0.65,0,0.35,1)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div className="progress-shine" aria-hidden="true" />
          </div>
        </div>

        {/* ── Step Cards ──────────────────────────────────────────────────────── */}
        <section
          aria-label="Recycling process details"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
            gap: 28,
            marginBottom: 60,
          }}
          className="step-cards-grid"
        >
          {RECYCLING_STEPS.map((s) => (
            <StepCard
              key={s.id}
              step={s}
              isActive={currentStep === s.id}
              onClick={() => goToStep(s.id)}
            />
          ))}
        </section>
      </div>

      {/* ── Global keyframes ──────────────────────────────────────────────────── */}
      <style>{`
        * { box-sizing: border-box; }

        .conveyor-belt {
          width: 200%;
          height: 100%;
          background: repeating-linear-gradient(
            90deg,
            #34495e,
            #34495e 20px,
            #2c3e50 20px,
            #2c3e50 40px
          );
          animation: moveBelt 1.5s linear infinite;
        }

        .progress-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: progressShine 2s infinite;
        }

        @keyframes moveBelt {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes progressShine {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes fadeScaleIn {
          from { opacity: 0; transform: scale(0.5); }
          to   { opacity: 1; transform: scale(1); }
        }

        /* ── Mobile Responsive Styles ─────────────────────────────────────── */

        @media (max-width: 768px) {
          .page-header {
            padding: 32px 20px !important;
            border-radius: 14px !important;
            margin-bottom: 24px !important;
          }

          .stats-grid {
            gap: 10px !important;
          }

          .stats-grid > div {
            min-width: calc(50% - 10px) !important;
            padding: 12px 16px !important;
            border-radius: 12px !important;
            flex: 1 1 calc(50% - 10px);
          }

          .scene-wrapper {
            height: 280px !important;
            border-radius: 14px !important;
            margin-bottom: 24px !important;
          }

          .step-label-overlay {
            font-size: 0.72rem !important;
            padding: 8px 14px !important;
            bottom: 80px !important;
            letter-spacing: 0.5px !important;
            max-width: 90vw;
            white-space: normal !important;
            text-align: center;
          }

          .step-indicators-nav {
            gap: 2px !important;
            padding: 0 2px !important;
            margin-bottom: 20px !important;
            /* Enable horizontal scroll on very small screens */
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }

          .step-indicators-nav::-webkit-scrollbar {
            display: none;
          }

          .step-indicators-nav > div {
            min-width: 44px !important;
          }

          .step-indicators-nav > div > div:first-child {
            width: 36px !important;
            height: 36px !important;
            font-size: 0.8rem !important;
            margin-bottom: 6px !important;
          }

          .step-indicators-nav > div > div:last-child {
            font-size: 0.55rem !important;
            max-width: 44px !important;
          }

          .step-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            margin-bottom: 40px !important;
          }

          .step-cards-grid > div {
            padding: 24px 18px !important;
            border-radius: 14px !important;
          }
        }

        @media (max-width: 480px) {
          .page-header {
            padding: 24px 16px !important;
          }

          .stats-grid > div {
            min-width: calc(50% - 6px) !important;
            flex: 1 1 calc(50% - 6px);
            padding: 10px 12px !important;
          }

          .scene-wrapper {
            height: 220px !important;
          }

          .step-label-overlay {
            font-size: 0.65rem !important;
            padding: 6px 10px !important;
            bottom: 65px !important;
          }

          .step-indicators-nav > div > div:first-child {
            width: 30px !important;
            height: 30px !important;
            font-size: 0.72rem !important;
          }

          .step-cards-grid > div {
            padding: 20px 14px !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .step-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .scene-wrapper {
            height: 380px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default DesktopProcess;
