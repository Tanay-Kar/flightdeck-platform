import styles from "./AnnButton.module.css";

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

type AnnColor =
    | "green"
    | "amber"
    | "yellow"
    | "red"
    | "white"
    | "cyan"


const annColors: Record<AnnColor, string> = {
    green: "var(--color-ann-green)",
    amber: "var(--color-ann-amber)",
    yellow: "var(--color-ann-yellow)",
    red: "var(--color-ann-red)",
    white: "var(--color-ann-white)",
    cyan: "var(--color-ann-cyan)",
};

export interface AnnLabelProps {
    text: string;
    color: AnnColor;
    box?: boolean;
    state?: boolean;
    className?: string;
}

export function AnnLabel({ text, color, box, state }: AnnLabelProps) {
    const offColor = "#131313";
    const annColor = state ? annColors[color] : offColor;

    return (
        <div
            className={`flex items-center justify-center w-full border-4 select-none`}
            style={{
                borderColor: box ? annColor : "transparent",
                boxShadow: box && state ? `0 0 16px color-mix(in srgb, ${annColor} 20%, transparent)` : "none",
            }}
        >
            <h1
                className={`font-bold text-[22cqw] font-mono tracking-[-0.02em]`}
                style={{
                    color: annColor,
                    textShadow: state ? `0 0 16px color-mix(in srgb, ${annColor} 20%, transparent)` : "none",
                }}
            >
                {text}
            </h1>
        </div>
    )
}

export interface AnnButtonState {
    top: boolean;
    bottom: boolean;
}

export interface AnnButtonConfig {
    top: AnnLabelProps;
    bottom: AnnLabelProps;
}

export interface AnnButtonProps {
  config: AnnButtonConfig;
  state: AnnButtonState;
}

export default function AnnButton({ config, state }: AnnButtonProps) {
    return (
        <div className="@container w-full aspect-square bg-[#202020] rounded-lg p-1">
            <div className="size-full bg-[#161616] [box-shadow:inset_0_0_4px_rgba(2,2,2,0.25),0_0_4px_5px_rgba(32,32,32,0.60)] rounded-md p-4">
                <div className={`${styles.annBtn} relative overflow-hidden size-full bg-[#101010] rounded-xl p-3`}>
                    <div className="flex flex-col justify-center h-full">
                        <div className="flex h-1/2 pt-2 ">
                            <AnnLabel {...config.top} state={state.top} />
                        </div>
                        <div className="flex h-1/2 pb-2">
                            <AnnLabel {...config.bottom} state={state.bottom} />
                        </div>
                    </div>
                    <DiffuserGrain />
                </div>
            </div>
        </div>
    )
}
