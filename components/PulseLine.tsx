"use client";

type PulseLineProps = {
  variant?: "hero" | "divider";
  className?: string;
};

/**
 * Signature element: a heartbeat line that is also a circuit trace.
 * Flat segments = the "rented" baseline (Instagram feed, nothing structural).
 * The spike = the moment a real product (site/system) enters the picture.
 * Square nodes on the spike echo the circuit-board V in the VIBE mark.
 */
export default function PulseLine({ variant = "hero", className = "" }: PulseLineProps) {
  const isHero = variant === "hero";
  const strokeWidth = isHero ? 2.5 : 1.5;
  const height = isHero ? 140 : 48;

  return (
    <svg
      viewBox={`0 0 1200 ${height}`}
      fill="none"
      preserveAspectRatio="none"
      className={`w-full ${className}`}
      style={{ height }}
      aria-hidden="true"
    >
      <path
        d={
          isHero
            ? `M0 ${height / 2}
               L260 ${height / 2}
               L300 ${height / 2}
               L330 ${height * 0.18}
               L360 ${height * 0.92}
               L390 ${height * 0.08}
               L420 ${height / 2}
               L470 ${height / 2}
               L500 ${height * 0.62}
               L540 ${height * 0.5}
               L900 ${height / 2}
               L940 ${height / 2}
               L1200 ${height / 2}`
            : `M0 ${height / 2}
               L560 ${height / 2}
               L585 ${height * 0.2}
               L610 ${height * 0.8}
               L635 ${height / 2}
               L1200 ${height / 2}`
        }
        stroke="#FF4E32"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1200}
        strokeDasharray={1200}
        strokeDashoffset={1200}
        className="animate-pulse-draw"
      />
      {isHero && (
        <>
          <rect x={296} y={height / 2 - 3} width="6" height="6" fill="#7FE8C4" />
          <rect x={466} y={height / 2 - 3} width="6" height="6" fill="#7FE8C4" />
          <circle cx={360} cy={height * 0.92} r="4" fill="#7FE8C4" className="animate-pulse-glow" />
        </>
      )}
    </svg>
  );
}
