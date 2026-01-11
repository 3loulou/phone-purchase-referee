import { EliminatedPhone } from "@/core/referee-engine/types";
import { formatPrice } from "@/lib/utils";

interface EliminationPanelProps {
    eliminatedPhones: EliminatedPhone[];
}

const REASON_CONFIG: Record<string, { icon: string; bg: string; border: string; text: string }> = {
    EXCEEDS_BUDGET: {
        icon: "💸",
        bg: "bg-red-50",
        border: "border-red-200",
        text: "text-red-800",
    },
    MISSING_REQUIRED_FEATURE: {
        icon: "❌",
        bg: "bg-orange-50",
        border: "border-orange-200",
        text: "text-orange-800",
    },
    UNAVAILABLE_IN_REGION: {
        icon: "🌍",
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-800",
    },
    DISCONTINUED: {
        icon: "🚫",
        bg: "bg-gray-100",
        border: "border-gray-300",
        text: "text-gray-800",
    },
    INCOMPLETE_DATA: {
        icon: "⚠️",
        bg: "bg-yellow-50",
        border: "border-yellow-200",
        text: "text-yellow-800",
    },
};

export default function EliminationPanel({ eliminatedPhones }: EliminationPanelProps) {
    if (eliminatedPhones.length === 0) {
        return null;
    }

    // Group by rejection reason
    const grouped = eliminatedPhones.reduce((acc, ep) => {
        const reason = ep.rejection_reason;
        if (!acc[reason]) {
            acc[reason] = [];
        }
        acc[reason].push(ep);
        return acc;
    }, {} as Record<string, EliminatedPhone[]>);

    return (
        <div className="animate-slide-up">
            <h2 className="section-title flex items-center gap-2 mb-4">
                <span className="text-red-500">✗</span>
                <span>Eliminated Phones</span>
                <span className="badge bg-red-100 text-red-600">{eliminatedPhones.length}</span>
            </h2>

            <div className="space-y-4">
                {Object.entries(grouped).map(([reason, phones]) => {
                    const config = REASON_CONFIG[reason] ?? REASON_CONFIG.INCOMPLETE_DATA!;
                    return (
                        <div
                            key={reason}
                            className={`rounded-2xl border-2 p-5 ${config.bg} ${config.border}`}
                        >
                            <h3 className={`font-semibold mb-4 flex items-center gap-2 ${config.text}`}>
                                <span className="text-xl">{config.icon}</span>
                                <span>{reason.replace(/_/g, " ")}</span>
                                <span className="badge bg-white/60 text-inherit">{phones.length}</span>
                            </h3>

                            <div className="space-y-2">
                                {phones.map((ep) => (
                                    <div
                                        key={ep.phone.id}
                                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 bg-white rounded-xl px-4 py-3 shadow-sm"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="font-semibold text-gray-900">{ep.phone.name}</span>
                                            <span className="text-gray-400 font-medium">
                                                {formatPrice(ep.phone.price_usd)}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            {ep.rejection_details}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
