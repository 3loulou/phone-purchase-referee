import { SensitivityRule } from "@/core/referee-engine/types";

interface SensitivityPanelProps {
    sensitivityRules: SensitivityRule[];
}

const TYPE_CONFIG: Record<string, { icon: string; gradient: string; border: string }> = {
    budget_increase: {
        icon: "💰",
        gradient: "from-success-50 to-emerald-50",
        border: "border-success-200",
    },
    budget_decrease: {
        icon: "💵",
        gradient: "from-amber-50 to-yellow-50",
        border: "border-amber-200",
    },
    priority_reorder: {
        icon: "🔄",
        gradient: "from-primary-50 to-blue-50",
        border: "border-primary-200",
    },
    add_requirement: {
        icon: "➕",
        gradient: "from-accent-50 to-purple-50",
        border: "border-accent-200",
    },
    remove_requirement: {
        icon: "➖",
        gradient: "from-orange-50 to-red-50",
        border: "border-orange-200",
    },
};

export default function SensitivityPanel({ sensitivityRules }: SensitivityPanelProps) {
    if (sensitivityRules.length === 0) {
        return null;
    }

    return (
        <div className="animate-slide-up">
            <h2 className="section-title flex items-center gap-2 mb-4">
                <span className="text-amber-500">💡</span>
                <span>What-If Scenarios</span>
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
                {sensitivityRules.map((rule, index) => {
                    const config = TYPE_CONFIG[rule.adjustment_type] ?? TYPE_CONFIG.priority_reorder!;

                    return (
                        <div
                            key={index}
                            className={`rounded-2xl border-2 bg-gradient-to-br p-5 ${config.gradient} ${config.border} hover:shadow-lg transition-shadow`}
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-2xl">{config.icon}</span>
                                <h3 className="font-semibold text-gray-800">
                                    {rule.adjustment_type.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
                                </h3>
                            </div>

                            <div className="bg-white/70 rounded-xl p-4 mb-3 font-mono text-sm">
                                <p className="text-gray-700">
                                    <span className="font-bold text-primary-600">IF</span>{" "}
                                    {rule.conditional_statement.replace(/^IF\s*/i, "").split("THEN")[0]?.trim() || rule.conditional_statement}
                                </p>
                                {rule.conditional_statement.includes("THEN") && (
                                    <p className="text-gray-700 mt-1">
                                        <span className="font-bold text-success-600">THEN</span>{" "}
                                        {rule.conditional_statement.split("THEN")[1]?.trim()}
                                    </p>
                                )}
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-600">Impact:</span>
                                <span className="text-sm text-gray-800">{rule.impact}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
