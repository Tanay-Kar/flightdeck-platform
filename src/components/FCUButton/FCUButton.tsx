import styles from "./FCUButton.module.css";




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


export default function FCUButton() {
    return (
        <div className="@container w-full aspect-square bg-[#202020] rounded-lg p-1">
            <div className="size-full bg-[#161616] [box-shadow:inset_0_0_4px_rgba(2,2,2,0.25),0_0_4px_5px_rgba(32,32,32,0.60)] rounded-md p-4">
                <div className={`${styles.fcuBtn} relative overflow-hidden size-full bg-[#101010] rounded-xl p-3`}>
                    <div className="flex flex-col justify-center h-full">
                        <div className="flex h-1/2 pt-2 ">
                        </div>
                        <div className="flex h-1/2 pb-2">
                        </div>
                    </div>
                    <DiffuserGrain />
                </div>
            </div>
        </div>
    )
}
