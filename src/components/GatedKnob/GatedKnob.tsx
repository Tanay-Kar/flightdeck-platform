import KnobSvg from "./GatedKnob.svg?react";
import GatedMarkings from "./GatedMarkings";

const CONTENT = { minX: -56, minY: -21, width: 312, height: 286 };
const MARGIN = -5;

function computeViewBox({ minX, minY, width, height }: typeof CONTENT, margin: number) {
    const side = Math.max(width, height);
    const padX = (side - width) / 2;
    const padY = (side - height) / 2;
    return [minX - padX - margin, minY - padY - margin, side + margin * 2, side + margin * 2].join(" ");
}

export default function Knob() {
    return (
        <div className="@container relative w-full aspect-square select-none">
            <svg viewBox={computeViewBox(CONTENT, MARGIN)} className="size-full">
                <g transform={`translate(0, 12)`}>

                    <GatedMarkings labels={["OFF", "NAV", "ATT"]} />
                    <KnobSvg x={0} y={0} width={200} height={253} />
                </g>
            </svg>
        </div>
    );
}
