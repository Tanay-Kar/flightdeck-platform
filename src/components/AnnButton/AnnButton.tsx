
type AnnColor =
    | "green"
    | "amber"
    | "yellow"
    | "red"
    | "white"
    | "cyan"
    | "off";

const annColors: Record<AnnColor, string> = {
    green: "var(--color-ann-green)",
    amber: "var(--color-ann-amber)",
    yellow: "var(--color-ann-yellow)",
    red: "var(--color-ann-red)",
    white: "var(--color-ann-white)",
    cyan: "var(--color-ann-cyan)",
    off: "#090909",
};

export interface AnnLabelProps {
    text: string;
    color: AnnColor;
    box?: boolean;
    className?: string;
}

export function AnnLabel({ text, color, box }: AnnLabelProps) {
    return (
        <div
            className={`flex items-center justify-center w-full border-4`}
            style={{
                borderColor: box ? annColors[color] : "transparent",
                boxShadow: box ? `0 0 8px color-mix(in srgb, ${annColors[color]} 40%, transparent)` : "none",
            }}
        >
            <h1
                className={`font-bold text-[22cqw] font-mono tracking-[-0.02em]`}
                style={{
                    color: annColors[color],
                    textShadow: `0 0 8px color-mix(in srgb, ${annColors[color]} 30%, transparent)`,
                }}
            >
                {text}
            </h1>
        </div>
    )
}

function DiffuserGrain() {
    return (
        <div
            className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-50"
            style={{
                backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='2'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
        />
    );
}

export interface AnnButtonProps {
  top: AnnLabelProps;
  bottom: AnnLabelProps;
}

export default function AnnButton({ top, bottom }: AnnButtonProps) {
    return (
        <div className="@container w-full aspect-square bg-[#202020] rounded-lg p-1">
            <div className="size-full bg-[#161616] [box-shadow:inset_0_0_4px_rgba(2,2,2,0.25),0_0_4px_5px_rgba(32,32,32,0.60)] rounded-md p-4">
                <div className="relative overflow-hidden size-full bg-[#101010] [box-shadow:inset_0_0_4px_rgba(64,64,64,0.25),0_0_8px_10px_rgba(1,1,1,0.30)] rounded-xl p-3">
                    <div className="flex flex-col justify-center h-full">
                        <div className="flex h-1/2 pt-2 ">
                            <AnnLabel {...top} />
                        </div>
                        <div className="flex h-1/2 pb-2">
                            <AnnLabel {...bottom} />
                        </div>
                    </div>
                    <DiffuserGrain />
                </div>
            </div>
        </div>
    )
}
