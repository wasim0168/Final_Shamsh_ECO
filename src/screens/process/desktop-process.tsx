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
  iconKey: IconKey;
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
  iconKey: IconKey;
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
  iconKey: IconKey;
}

interface SceneAnimationProps {
  step: number;
}

interface TruckProps {
  style?: CSSProperties;
  color?: string;
  darkColor?: string;
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

type IconKey =
  | "truck"
  | "microscope"
  | "gear"
  | "flask"
  | "flame"
  | "trident"
  | "diamond"
  | "shipping"
  | "glass"
  | "silicon"
  | "silver"
  | "copper"
  | "sun"
  | "check";

// ─── SVG Icon Set ─────────────────────────────────────────────────────────────

const Icon: FC<{ name: IconKey; size?: number; color?: string }> = ({
  name,
  size = 24,
  color = "currentColor",
}) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "truck":
      return (
        <svg {...common}>
          <path d="M1 3h15v13H1z" />
          <path d="M16 8h4l3 3v5h-7V8z" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      );
    case "microscope":
      return (
        <svg {...common}>
          <path d="M6 18h8" />
          <path d="M3 22h18" />
          <path d="M14 22a7 7 0 1 0 0-14h-1" />
          <path d="M9 14h2" />
          <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2z" />
          <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
        </svg>
      );
    case "gear":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case "flask":
      return (
        <svg {...common}>
          <path d="M9 3h6" />
          <path d="M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" />
          <path d="M6.5 15h11" />
        </svg>
      );
    case "flame":
      return (
        <svg {...common}>
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      );
    case "trident":
      return (
        <svg {...common}>
          <path d="M12 2v20" />
          <path d="M4 8c0 4 3 6 8 6s8-2 8-6" />
          <path d="M2 6l2 2 2-2" />
          <path d="M18 6l2 2 2-2" />
          <path d="M10 8l2-2 2 2" />
        </svg>
      );
    case "diamond":
      return (
        <svg {...common}>
          <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" />
          <path d="M8 12h8" />
          <path d="M12 8v8" />
        </svg>
      );
    case "shipping":
      return (
        <svg {...common}>
          <path d="M16 3h5v13h-5z" />
          <path d="M1 3h15v13H1z" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      );
    case "glass":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="1.5" />
          <path d="M3 9h18" />
          <path d="M9 3v18" />
        </svg>
      );
    case "silicon":
      return (
        <svg {...common}>
          <path d="M12 2 4 7v10l8 5 8-5V7z" />
          <path d="M4 7l8 5 8-5" />
          <path d="M12 12v10" />
        </svg>
      );
    case "silver":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v18" />
          <path d="M3 12h18" />
        </svg>
      );
    case "copper":
      return (
        <svg {...common}>
          <path d="M13 2 3 14h8l-1 8 10-12h-8z" />
        </svg>
      );
    case "sun":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M17.66 17.66l1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M4.93 19.07l1.41-1.41" />
          <path d="M17.66 6.34l1.41-1.41" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="M20 6 9 17l-5-5" />
        </svg>
      );
    default:
      return null;
  }
};

// ─── Constants ────────────────────────────────────────────────────────────────

const RECYCLING_STEPS: readonly RecyclingStep[] = [
  {
    id: 1,
    number: "STEP 01",
    label: "Collection",
    title: "Collection & Transport",
    iconKey: "truck",
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
    iconKey: "microscope",
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
    iconKey: "gear",
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
    iconKey: "flask",
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
    iconKey: "flame",
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
    iconKey: "trident",
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
    iconKey: "diamond",
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
    iconKey: "shipping",
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
    iconKey: "glass",
    x: "78%",
    y: "28%",
  },
  {
    id: "silicon",
    label: "Silicon",
    color: "#78909c",
    iconKey: "silicon",
    x: "84%",
    y: "28%",
  },
  {
    id: "silver",
    label: "Silver",
    color: "#b0bec5",
    iconKey: "silver",
    x: "78%",
    y: "53%",
  },
  {
    id: "copper",
    label: "Copper",
    color: "#ff9800",
    iconKey: "copper",
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
    iconKey: "microscope",
  },
  {
    label: "Dismantling",
    left: "38%",
    bottom: "40%",
    w: 130,
    h: 100,
    color: "#455a64",
    iconKey: "gear",
  },
  {
    label: "Chemical",
    left: "52%",
    bottom: "55%",
    w: 100,
    h: 70,
    color: "#37474f",
    radius: "40% 40% 8px 8px",
    iconKey: "flask",
  },
  {
    label: "Thermal",
    left: "63%",
    bottom: "40%",
    w: 100,
    h: 120,
    color: "#4e342e",
    iconKey: "flame",
  },
  {
    label: "Separation",
    left: "74%",
    bottom: "55%",
    w: 160,
    h: 80,
    color: "#1a237e",
    iconKey: "trident",
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

// ─── Scene Animation ─────────────────────────────────────────────────────────

const SceneAnimation: FC<SceneAnimationProps> = ({ step }) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const [floatOffset, setFloatOffset] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startTsRef = useRef<number | null>(null);

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

  // Active machine index for steps 2..6
  const activeMachineIndex = step - 2;
  const activeMachine =
    activeMachineIndex >= 0 && activeMachineIndex < MACHINES.length
      ? MACHINES[activeMachineIndex]
      : null;

  const showScanBeam = activeMachine !== null && step >= 2 && step <= 6;

  return (
    <div
      className="scene-container"
      style={{ position: "absolute", inset: 0, overflow: "hidden" }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse at 20% 80%, rgba(255,165,0,0.06), transparent 55%),
            radial-gradient(ellipse at 80% 20%, rgba(0,150,255,0.08), transparent 55%)
          `,
          pointerEvents: "none",
        }}
      />

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
          border: "2px solid #5d6d7e",
        }}
      >
        <div className="conveyor-belt" />
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              bottom: -16,
              left: `${i * 9}%`,
              width: 4,
              height: 16,
              background: "#5d6d7e",
              borderRadius: "0 0 2px 2px",
            }}
          />
        ))}
      </div>

      {/* Factory floor line */}
      <div
        style={{
          position: "absolute",
          bottom: "30%",
          left: 0,
          right: 0,
          height: 4,
          background:
            "repeating-linear-gradient(90deg, #4a5a6a, #4a5a6a 20px, #3d4d5d 20px, #3d4d5d 40px)",
          opacity: 0.3,
        }}
      />

      {/* Machines */}
      {MACHINES.map((m, i) => {
        const isActive = i === activeMachineIndex;
        return (
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
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: isActive
                ? "0 0 24px 4px rgba(255,183,77,0.55), 0 6px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)"
                : "0 6px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
              border: isActive
                ? "1.5px solid rgba(255,183,77,0.9)"
                : "1px solid rgba(255,255,255,0.08)",
              gap: 4,
              transition: "all 0.4s ease",
              zIndex: 12,
            }}
          >
            <div
              style={{
                color: isActive ? "#ffb74d" : "rgba(255,255,255,0.9)",
                filter: isActive
                  ? "drop-shadow(0 0 6px rgba(255,183,77,0.8))"
                  : "none",
                transition: "color 0.4s ease",
              }}
            >
              <Icon name={m.iconKey} size={28} />
            </div>
            <span
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "0.62rem",
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
                textShadow: "0 1px 4px rgba(0,0,0,0.5)",
              }}
            >
              {m.label}
            </span>
            <div style={{ display: "flex", gap: 4, marginTop: 2 }}>
              {[0, 1, 2].map((k) => (
                <div
                  key={k}
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background:
                      step >= 2 && k < step - 1
                        ? "#4caf50"
                        : step >= 2 && k === step - 2
                        ? "#ffeb3b"
                        : "#555",
                    boxShadow:
                      step >= 2 && k < step - 1
                        ? "0 0 8px #4caf50"
                        : step >= 2 && k === step - 2
                        ? "0 0 8px #ffeb3b"
                        : "none",
                    animation:
                      step >= 2 && k === step - 2
                        ? "blinkLight 0.8s ease-in-out infinite"
                        : "none",
                  }}
                />
              ))}
            </div>
          </div>
        );
      })}

      {/* Scan beam from active machine to panel */}
      {showScanBeam && activeMachine && (
        <div
          style={{
            position: "absolute",
            left: `calc(${activeMachine.left} + ${activeMachine.w / 2}px)`,
            bottom: `calc(${activeMachine.bottom} + ${activeMachine.h}px)`,
            width: 3,
            height: 90,
            background:
              "linear-gradient(to bottom, rgba(255,183,77,0.9), rgba(255,183,77,0))",
            transformOrigin: "top",
            animation: "scanBeam 1.2s ease-in-out infinite",
            pointerEvents: "none",
            zIndex: 13,
            filter: "blur(0.5px)",
          }}
        />
      )}

      {/* Collection truck */}
      <Truck
        style={{
          bottom: "28%",
          left: showTruck1 ? "2%" : "-30%",
          opacity: showTruck1 ? 1 : 0,
        }}
        color="#0bc552"
        darkColor="#c0392b"
      />

      {/* Illustrated Solar Panel Bundle */}
      {showPanel && (
        <div ref={panelRef} style={{ position: "absolute", ...panelPos }}>
          <div
            style={{
              position: "relative",
              width: 140,
              height: 90,
              transform: [
                `translateY(${step === 2 ? floatOffset * 0.5 : 0}px)`,
                `rotate(${step === 2 ? floatOffset * 2 : 0}deg)`,
                `scale(${panelScale})`,
              ].join(" "),
              filter:
                step >= 5
                  ? `hue-rotate(${floatOffset * 2}deg) brightness(1.15)`
                  : "none",
              transition: "all 0.8s cubic-bezier(0.34,1.56,0.64,1)",
              zIndex: 20,
            }}
          >
            {/* Stacked depth layers */}
            <div
              style={{
                position: "absolute",
                bottom: -8,
                left: 8,
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg,#0d1b4a,#071230)",
                borderRadius: 8,
                opacity: 0.35,
                transform: "rotate(-3deg) scale(0.98)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -4,
                left: 4,
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg,#12224f,#08163a)",
                borderRadius: 8,
                opacity: 0.6,
                transform: "rotate(-1.5deg) scale(0.99)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
              }}
            />

            {/* Main panel */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: 8,
                overflow: "hidden",
                background:
                  "linear-gradient(135deg,#1e3a8a 0%,#1e40af 45%,#0d1b4a 100%)",
                border: "2px solid rgba(200,215,255,0.35)",
                boxShadow:
                  step >= 5
                    ? "0 0 26px rgba(255,165,0,0.35), 0 8px 20px rgba(0,0,0,0.5)"
                    : "0 8px 20px rgba(0,0,0,0.5), inset 0 0 20px rgba(30,64,175,0.4)",
                transition: "box-shadow 0.5s ease",
              }}
            >
              {/* Cell grid */}
              <div
                style={{
                  position: "absolute",
                  inset: 6,
                  background: `
                    repeating-linear-gradient(
                      90deg,
                      rgba(30,58,138,0.9) 0 3px,
                      rgba(96,165,250,0.25) 3px 4px
                    ),
                    repeating-linear-gradient(
                      0deg,
                      rgba(30,58,138,0.9) 0 3px,
                      rgba(96,165,250,0.25) 3px 4px
                    ),
                    linear-gradient(135deg,#1e40af,#1e3a8a)
                  `,
                  borderRadius: 4,
                }}
              />

              {/* Diagonal glare */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.22) 45%, rgba(255,255,255,0.05) 55%, transparent 60%)",
                  pointerEvents: "none",
                }}
              />

              {/* Top gloss */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "38%",
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.18), transparent)",
                  pointerEvents: "none",
                }}
              />

              {/* Corner frames */}
              {[
                { top: 4, left: 4 },
                { top: 4, right: 4 },
                { bottom: 4, left: 4 },
                { bottom: 4, right: 4 },
              ].map((pos, idx) => (
                <div
                  key={idx}
                  style={{
                    position: "absolute",
                    width: 18,
                    height: 18,
                    ...pos,
                    borderTop:
                      idx === 0 || idx === 1
                        ? "2px solid rgba(255,255,255,0.35)"
                        : undefined,
                    borderBottom:
                      idx === 2 || idx === 3
                        ? "2px solid rgba(255,255,255,0.35)"
                        : undefined,
                    borderLeft:
                      idx === 0 || idx === 2
                        ? "2px solid rgba(255,255,255,0.35)"
                        : undefined,
                    borderRight:
                      idx === 1 || idx === 3
                        ? "2px solid rgba(255,255,255,0.35)"
                        : undefined,
                    pointerEvents: "none",
                  }}
                />
              ))}

              {/* Sun icon */}
              <div
                style={{
                  position: "absolute",
                  top: 8,
                  left: 8,
                  color: "#ffb74d",
                  filter: "drop-shadow(0 0 4px rgba(255,183,77,0.8))",
                  opacity: 0.85,
                }}
              >
                <Icon name="sun" size={14} />
              </div>

              {/* Bundle badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: 8,
                  right: 8,
                  background: "rgba(0,0,0,0.72)",
                  backdropFilter: "blur(4px)",
                  padding: "2px 10px",
                  borderRadius: 12,
                  color: "#ffb74d",
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  letterSpacing: 0.5,
                  border: "1px solid rgba(255,183,77,0.4)",
                }}
              >
                x24
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Thermal sparks (step 5) */}
      {step === 5 && (
        <>
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `calc(63% + ${Math.sin(i * 1.3) * 40}px)`,
                bottom: "60%",
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: i % 3 === 0 ? "#ffeb3b" : "#ff9800",
                boxShadow: "0 0 8px currentColor",
                animation: `sparkFloat ${1.5 + (i % 3) * 0.4}s ease-out infinite`,
                animationDelay: `${i * 0.12}s`,
                pointerEvents: "none",
                zIndex: 25,
              }}
            />
          ))}
        </>
      )}

      {/* Materials */}
      {showMaterials &&
        MATERIALS.map((mat, i) => {
          const isEven = i % 2 === 0;
          const isPurification = step === 7;
          const isRedistribution = step === 8;
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
                color: "#fff",
                boxShadow: isPurification
                  ? `0 0 20px 6px ${mat.color}, 0 4px 12px rgba(0,0,0,0.3)`
                  : isRedistribution
                  ? `0 0 30px 10px ${mat.color}44, 0 4px 12px rgba(0,0,0,0.3)`
                  : "0 4px 12px rgba(0,0,0,0.3)",
                transform: `translateY(${floatOffset * (isEven ? 1 : -1)}px)`,
                transition: "box-shadow 0.5s ease, transform 0.3s ease",
                animation: "fadeScaleIn 0.5s ease forwards",
                animationDelay: `${i * 0.1}s`,
                opacity: 0,
                border: isPurification ? `2px solid ${mat.color}` : "none",
                zIndex: 18,
              }}
            >
              <Icon name={mat.iconKey} size={22} color="#fff" />
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
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
            }}
          >
            <div
              style={{
                width: 8,
                height: 20,
                background: "#4a5a6a",
                borderRadius: "2px 2px 0 0",
              }}
            />
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${
                  step > 0 ? "#ffeb3b" : "#555"
                }, ${step > 0 ? "#ff9800" : "#333"})`,
                boxShadow: `0 0 ${
                  16 + Math.sin(floatOffset / 8 + i) * 6
                }px ${
                  8 + Math.sin(floatOffset / 8 + i) * 3
                }px rgba(255,235,59,${step > 0 ? 0.6 : 0.1})`,
                transition: "all 0.5s ease",
              }}
            />
          </div>
        ))}
      </div>

      {/* Floor markings */}
      <div
        style={{
          position: "absolute",
          bottom: "30%",
          left: "10%",
          right: "10%",
          display: "flex",
          justifyContent: "space-between",
          pointerEvents: "none",
        }}
      >
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            style={{ display: "flex", gap: 4, alignItems: "center" }}
          >
            {Array.from({ length: 4 }, (_, j) => (
              <div
                key={j}
                style={{
                  width: 8,
                  height: 8,
                  background: i % 2 === 0 ? "#ffeb3b" : "#4caf50",
                  opacity: 0.3,
                  borderRadius: 2,
                }}
              />
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes blinkLight {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes scanBeam {
          0%, 100% { opacity: 0.3; transform: scaleY(0.6); }
          50% { opacity: 1; transform: scaleY(1); }
        }
        @keyframes sparkFloat {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-60px) scale(0.3); opacity: 0; }
        }
      `}</style>
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
      transition: "transform 0.2s",
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
      {isPast ? <Icon name="check" size={20} /> : step.id}
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
          color: "white",
          boxShadow: `0 8px 20px ${step.color}44`,
          flexShrink: 0,
        }}
      >
        <Icon name={step.iconKey} size={30} color="white" />
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
              color: "white",
              flexShrink: 0,
            }}
          >
            <Icon name="check" size={12} color="white" />
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
        {/* Header */}
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

        {/* Animation Scene */}
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
              display: "flex",
              alignItems: "center",
              gap: 10,
              zIndex: 30,
            }}
          >
            <Icon name={activeStep.iconKey} size={18} color="#ffb74d" />
            {activeStep.number} — {activeStep.title}
          </div>
        </div>

        {/* Step Indicators */}
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

        {/* Progress Bar */}
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

        {/* Play/Pause control */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 36,
          }}
        >
          <button
            onClick={() => setIsPlaying((p) => !p)}
            aria-label={isPlaying ? "Pause animation" : "Play animation"}
            style={{
              background: isPlaying
                ? "linear-gradient(135deg,#e74c3c,#c0392b)"
                : "linear-gradient(135deg,#0a4f70,#1a7ca3)",
              color: "white",
              border: "none",
              borderRadius: 50,
              padding: "12px 32px",
              fontSize: "0.95rem",
              fontWeight: 700,
              letterSpacing: 0.5,
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(10,79,112,0.3)",
              transition: "all 0.3s ease",
            }}
          >
            {isPlaying ? "⏸ Pause" : "▶ Play Process"}
          </button>
        </div>

        {/* Step Cards */}
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
          animation: moveBelt 3.5s linear infinite;
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

        @keyframes blinkLight {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        @keyframes scanBeam {
          0%, 100% { opacity: 0.3; transform: scaleY(0.6); }
          50% { opacity: 1; transform: scaleY(1); }
        }

        @keyframes sparkFloat {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-60px) scale(0.3); opacity: 0; }
        }

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