import { TradeOffPair } from "@/core/referee-engine/types";

interface TradeOffDisplayProps {
    tradeOffs: TradeOffPair[];
}

export default function TradeOffDisplay({ tradeOffs }: TradeOffDisplayProps) {
    if (tradeOffs.length === 0) {
        return null;
    }

    return (
        <div className="animate-slide-up">
            <h2 className="section-title flex items-center gap-2 mb-4">
                <span className="text-accent-500">⚖️</span>
                <span>Trade-Off Analysis</span>
            </h2>

            <div className="panel-purple">
                <div className="grid gap-3 md:grid-cols-2">
                    {tradeOffs.map((tradeOff, index) => (
                        <div
                            key={`${tradeOff.phone_a_id}-${tradeOff.phone_b_id}-${tradeOff.dimension}-${index}`}
                            className="flex items-start gap-3 bg-white/80 rounded-xl p-4 border border-accent-100"
                        >
                            <span className="text-accent-500 text-lg mt-0.5">↔️</span>
                            <p className="text-gray-700 text-sm leading-relaxed">{tradeOff.explanation}</p>
                        </div>
                    ))}
                </div>

                <p className="mt-4 text-xs text-accent-600 italic text-center">
                    * Trade-offs shown for top prioritized dimensions only
                </p>
            </div>
        </div>
    );
}
