import { PhoneWithScore } from "@/core/referee-engine/types";
import { formatPrice, getDimensionDisplayName } from "@/lib/utils";

interface PhoneCardProps {
    phoneWithScore: PhoneWithScore;
    isTop?: boolean;
}

export default function PhoneCard({ phoneWithScore, isTop = false }: PhoneCardProps) {
    const { phone, dimension_scores, overall_rank, conditional_statement } = phoneWithScore;

    const getRankBadgeClass = (rank: number) => {
        switch (rank) {
            case 1: return "rank-badge-1";
            case 2: return "rank-badge-2";
            case 3: return "rank-badge-3";
            default: return "rank-badge-other";
        }
    };

    const getScoreBarClass = (score: number) => {
        if (score >= 0.7) return "score-bar-fill-high";
        if (score >= 0.4) return "score-bar-fill-medium";
        return "score-bar-fill-low";
    };

    return (
        <div
            className={`${isTop ? "phone-card-top" : "phone-card"} animate-scale-in`}
        >
            {/* Rank Badge */}
            <div className={getRankBadgeClass(overall_rank)}>
                #{overall_rank}
            </div>

            {/* Top Badge */}
            {isTop && (
                <div className="absolute top-4 left-4">
                    <span className="badge badge-success flex items-center gap-1">
                        <span>🏆</span>
                        <span>Top Match</span>
                    </span>
                </div>
            )}

            {/* Phone Name & Price */}
            <div className="mb-5 pt-4">
                <h3 className="text-xl font-bold text-gray-900 pr-12">{phone.name}</h3>
                <p className="text-3xl font-extrabold mt-2">
                    <span className="text-gradient">{formatPrice(phone.price_usd)}</span>
                </p>
            </div>

            {/* Key Specs Grid */}
            <div className="grid grid-cols-3 gap-3 mb-5">
                {phone.specs.battery_mah && (
                    <div className="p-3 rounded-xl bg-gray-50 text-center">
                        <span className="text-lg">🔋</span>
                        <p className="text-sm font-semibold text-gray-900 mt-1">{phone.specs.battery_mah}</p>
                        <p className="text-xs text-gray-500">mAh</p>
                    </div>
                )}
                {phone.specs.camera_mp && (
                    <div className="p-3 rounded-xl bg-gray-50 text-center">
                        <span className="text-lg">📷</span>
                        <p className="text-sm font-semibold text-gray-900 mt-1">{phone.specs.camera_mp}</p>
                        <p className="text-xs text-gray-500">MP</p>
                    </div>
                )}
                {phone.specs.storage_gb && (
                    <div className="p-3 rounded-xl bg-gray-50 text-center">
                        <span className="text-lg">💾</span>
                        <p className="text-sm font-semibold text-gray-900 mt-1">{phone.specs.storage_gb}</p>
                        <p className="text-xs text-gray-500">GB</p>
                    </div>
                )}
            </div>

            {/* Additional Specs */}
            <div className="flex flex-wrap gap-2 mb-5">
                {phone.specs.screen_inches && (
                    <span className="badge badge-primary">📱 {phone.specs.screen_inches}"</span>
                )}
                {phone.specs.has_5g && (
                    <span className="badge badge-success">📶 5G</span>
                )}
                {phone.specs.weight_grams && (
                    <span className="badge bg-gray-100 text-gray-600">⚖️ {phone.specs.weight_grams}g</span>
                )}
            </div>

            {/* Priority Score Bars */}
            <div className="border-t border-gray-100 pt-4 mb-4">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Priority Scores
                </h4>
                <div className="space-y-3">
                    {Object.entries(dimension_scores).slice(0, 3).map(([dim, score]) => (
                        <div key={dim}>
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-medium text-gray-600">
                                    {getDimensionDisplayName(dim)}
                                </span>
                                <span className="text-xs font-bold text-gray-800">
                                    {(score * 100).toFixed(0)}%
                                </span>
                            </div>
                            <div className="score-bar">
                                <div
                                    className={`score-bar-fill ${getScoreBarClass(score)}`}
                                    style={{ width: `${score * 100}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Conditional Statement */}
            <div className={`rounded-xl p-4 ${isTop ? "bg-success-50 border border-success-200" : "bg-primary-50 border border-primary-100"}`}>
                <p className="text-sm text-gray-700 leading-relaxed">
                    <span className={`font-semibold ${isTop ? "text-success-700" : "text-primary-700"}`}>💡 </span>
                    <span className="italic">{conditional_statement}</span>
                </p>
            </div>
        </div>
    );
}
