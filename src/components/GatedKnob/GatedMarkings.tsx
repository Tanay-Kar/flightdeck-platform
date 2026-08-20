// GatedMarkings.tsx
interface Point {
    x: number;
    y: number;
}

type Anchor = "start" | "middle" | "end";

const CX = 100;
const CY = 117.024;
const RADIUS = 112;
const TICK_LENGTH = 10;
const LABEL_OFFSETS: readonly [number, number, number] = [8, 16, 8]; // 0, 1, 2 — same order as GATE_COUNT loop
const STROKE_WIDTH = 4;
const LABEL_FONT_SIZE = 24;
const COLOR = "#D4D4D4";

const START_ANGLE = -60;
const SWEEP_ANGLE = 120;
const GATE_COUNT = 3;

const toRad = (deg: number) => (deg * Math.PI) / 180;

const pointOnArc = (r: number, angleDeg: number): Point => {
    const rad = toRad(angleDeg);
    return { x: CX + r * Math.sin(rad), y: CY - r * Math.cos(rad) };
};

const anchorForAngle = (angle: number): Anchor =>
    angle < -5 ? "end" : angle > 5 ? "start" : "middle";

const arcStart = pointOnArc(RADIUS, START_ANGLE);
const arcEnd = pointOnArc(RADIUS, START_ANGLE + SWEEP_ANGLE);
const ARC_PATH = `M ${arcStart.x.toFixed(2)} ${arcStart.y.toFixed(2)} A ${RADIUS} ${RADIUS} 0 0 1 ${arcEnd.x.toFixed(2)} ${arcEnd.y.toFixed(2)}`;

// geometry only — text is bound at render time from the labels prop
const TICK_GEOMETRY = Array.from({ length: GATE_COUNT }, (_, i) => {
    const angle = START_ANGLE + (SWEEP_ANGLE * i) / (GATE_COUNT - 1);
    const rad = toRad(angle);
    const ux = Math.sin(rad);
    const uy = -Math.cos(rad);
    const labelR = RADIUS + TICK_LENGTH + LABEL_OFFSETS[i]; // <-- was the flat LABEL_OFFSET
    return {
        inner: { x: CX + RADIUS * ux, y: CY + RADIUS * uy },
        outer: { x: CX + (RADIUS + TICK_LENGTH) * ux, y: CY + (RADIUS + TICK_LENGTH) * uy },
        labelPt: { x: CX + labelR * ux, y: CY + labelR * uy },
        anchor: anchorForAngle(angle),
    };
});

interface GatedMarkingsProps {
    labels?: readonly [string, string, string];
}

export default function GatedMarkings({
    labels = ["0", "1", "2"],
}: GatedMarkingsProps) {
    return (
        <g>
            <path d={ARC_PATH} stroke={COLOR} strokeWidth={STROKE_WIDTH} strokeLinecap="round" fill="none" />
            {TICK_GEOMETRY.map((t, i) => (
                <line
                    key={i}
                    x1={t.inner.x.toFixed(2)}
                    y1={t.inner.y.toFixed(2)}
                    x2={t.outer.x.toFixed(2)}
                    y2={t.outer.y.toFixed(2)}
                    stroke={COLOR}
                    strokeWidth={STROKE_WIDTH}
                    strokeLinecap="round"
                />
            ))}
            {TICK_GEOMETRY.map((t, i) => (
                <text
                    key={i}
                    x={t.labelPt.x.toFixed(2)}
                    y={t.labelPt.y.toFixed(2)}
                    textAnchor={t.anchor}
                    dominantBaseline="middle"
                    fontSize={LABEL_FONT_SIZE}
                    fill={COLOR}
                    className="font-mono font-bold"
                >
                    {labels[i]}
                </text>
            ))}
        </g>
    );
}
