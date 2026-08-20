import KnobSvg from "./GatedKnob.svg?react";
import GatedMarkings from "./GatedMarkings";

export default function Knob() {
    return (
        <div className="@container relative w-full aspect-square select-none">
            <svg viewBox="-50 -35 300 300" className="size-full">
                <g transform={`translate(0, 12)`}>

                    <GatedMarkings labels={["OFF", "NAV", "ATT"]} />
                    <KnobSvg x={0} y={0} width={200} height={253} />
                </g>
            </svg>
        </div>
    );
}
