'use client';

import { AIComparison, GroundingSource } from "@/ai/gemini-research";

interface AIAnalysisPanelProps {
    analysis: AIComparison;
    sources: GroundingSource[];
    processingTime?: number;
    isLoading?: boolean;
}

export default function AIAnalysisPanel({
    analysis,
    sources,
    processingTime,
    isLoading = false
}: AIAnalysisPanelProps) {
    if (isLoading) {
        return (
            <div className="panel-purple animate-pulse">
                <div className="flex items-center gap-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-2 border-accent-600 border-t-transparent" />
                    <span className="text-accent-700 font-medium">
                        🤖 AI is analyzing phones with Google Search...
                    </span>
                </div>
                <p className="text-sm text-accent-500 mt-2">
                    Searching the web for reviews, benchmarks, and real-world performance data...
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6 animate-slide-up">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="text-3xl">🤖</span>
                    <h2 className="text-2xl font-bold text-gradient">AI-Powered Analysis</h2>
                    <span className="badge badge-accent">AI + Search</span>
                </div>
                {processingTime && (
                    <span className="text-sm text-gray-400">
                        {(processingTime / 1000).toFixed(1)}s
                    </span>
                )}
            </div>

            {/* Winner by Category */}
            <div className="panel">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span>🏆</span>
                    <span>Winner by Category</span>
                </h3>
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {analysis.winner_by_category.map((item, index) => (
                        <div
                            key={index}
                            className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-500">
                                    {item.category}
                                </span>
                                <span className={`badge text-xs ${item.margin === "significant"
                                        ? "badge-success"
                                        : item.margin === "moderate"
                                            ? "bg-yellow-100 text-yellow-700"
                                            : "bg-gray-100 text-gray-600"
                                    }`}>
                                    {item.margin}
                                </span>
                            </div>
                            <p className="font-bold text-gray-900 text-lg">{item.winner}</p>
                            <p className="text-xs text-gray-500 mt-1 line-clamp-2">{item.reason}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Conditional Verdicts */}
            <div className="panel-green">
                <h3 className="font-bold text-success-800 mb-4 flex items-center gap-2">
                    <span>💡</span>
                    <span>Conditional Recommendations</span>
                </h3>
                <div className="space-y-4">
                    {analysis.conditional_verdicts.map((verdict, index) => (
                        <div
                            key={index}
                            className="bg-white/80 rounded-xl p-5 border border-success-200 hover:shadow-md transition-shadow"
                        >
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                                <span className="font-bold text-success-900 text-lg">{verdict.phone_name}</span>
                                <span className="badge badge-success">Best for: {verdict.best_for}</span>
                            </div>
                            <p className="text-gray-700 italic leading-relaxed">
                                "{verdict.verdict}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recommendation Logic */}
            <div className="panel-blue">
                <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                    <span>🧠</span>
                    <span>How Your Priorities Affect the Recommendation</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">
                    {analysis.recommendation_logic}
                </p>
            </div>

            {/* Trade-off Summary */}
            <div className="panel-amber">
                <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                    <span>⚖️</span>
                    <span>Key Trade-offs</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">
                    {analysis.trade_off_summary}
                </p>
            </div>

            {/* Sources */}
            {(sources.length > 0 || analysis.sources_used.length > 0) && (
                <div className="rounded-xl bg-gray-50 border border-gray-100 p-5">
                    <h4 className="text-sm font-semibold text-gray-600 mb-4 flex items-center gap-2">
                        <span>📚</span>
                        <span>Sources & Citations</span>
                    </h4>

                    {analysis.sources_used.length > 0 && (
                        <div className="mb-4">
                            <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Referenced:</p>
                            <div className="flex flex-wrap gap-2">
                                {analysis.sources_used.map((source, index) => (
                                    <span
                                        key={index}
                                        className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-lg font-medium"
                                    >
                                        {source}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {sources.length > 0 && (
                        <div>
                            <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Web Sources:</p>
                            <div className="flex flex-wrap gap-2">
                                {sources.slice(0, 5).map((source, index) => (
                                    <a
                                        key={index}
                                        href={source.uri}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-lg hover:bg-primary-50 hover:border-primary-200 hover:text-primary-600 transition-colors"
                                    >
                                        {source.title || `Source ${index + 1}`} ↗
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
