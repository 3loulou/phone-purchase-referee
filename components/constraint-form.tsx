"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { ComparisonDimension } from "@/core/referee-engine/types";

interface ConstraintFormProps {
    onSubmit: (formData: FormData) => void;
}

const DIMENSIONS: { value: ComparisonDimension; label: string; icon: string }[] = [
    { value: "battery_mah", label: "Battery Life", icon: "🔋" },
    { value: "camera_mp", label: "Camera Quality", icon: "📷" },
    { value: "price_usd", label: "Value for Money", icon: "💰" },
    { value: "screen_inches", label: "Screen Size", icon: "📱" },
    { value: "storage_gb", label: "Storage", icon: "💾" },
    { value: "processor_benchmark", label: "Performance", icon: "⚡" },
    { value: "weight_grams", label: "Lightweight", icon: "🪶" },
];

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="btn-primary w-full text-lg flex items-center justify-center gap-2"
        >
            {pending ? (
                <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Analyzing...</span>
                </>
            ) : (
                <>
                    <span>🔍</span>
                    <span>Compare Phones</span>
                </>
            )}
        </button>
    );
}

export default function ConstraintForm({ onSubmit }: ConstraintFormProps) {
    const [selectedPriorities, setSelectedPriorities] = useState<ComparisonDimension[]>([
        "battery_mah",
        "camera_mp",
    ]);
    const [require5G, setRequire5G] = useState(false);
    const [useAI, setUseAI] = useState(true);

    const handlePriorityChange = (dimension: ComparisonDimension, checked: boolean) => {
        if (checked && selectedPriorities.length < 5) {
            setSelectedPriorities([...selectedPriorities, dimension]);
        } else if (!checked) {
            setSelectedPriorities(selectedPriorities.filter(p => p !== dimension));
        }
    };

    const movePriority = (dimension: ComparisonDimension, direction: "up" | "down") => {
        const index = selectedPriorities.indexOf(dimension);
        if (index === -1) return;

        const newIndex = direction === "up" ? index - 1 : index + 1;
        if (newIndex < 0 || newIndex >= selectedPriorities.length) return;

        const newPriorities = [...selectedPriorities];
        [newPriorities[index], newPriorities[newIndex]] = [newPriorities[newIndex]!, newPriorities[index]!];
        setSelectedPriorities(newPriorities);
    };

    return (
        <form action={onSubmit} className="space-y-5">
            {/* Budget Input */}
            <div className="form-section">
                <label htmlFor="budget" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                    <span className="text-lg">💵</span>
                    <span>Maximum Budget</span>
                </label>
                <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-lg">$</span>
                    <input
                        type="number"
                        id="budget"
                        name="budget"
                        min="100"
                        max="2000"
                        step="50"
                        defaultValue="800"
                        className="input-field pl-10 pr-16 text-xl font-semibold"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">USD</span>
                </div>
                <p className="mt-2 text-xs text-gray-500">Leave empty for no budget limit</p>
            </div>

            {/* Priority Selection */}
            <div className="form-section">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <span className="text-lg">📊</span>
                    <span>Your Priorities</span>
                    <span className="badge badge-primary">{selectedPriorities.length}/5</span>
                </h3>
                <p className="text-xs text-gray-500 mb-4">
                    First priority = highest weight. Drag to reorder.
                </p>

                {/* Selected Priorities */}
                {selectedPriorities.length > 0 && (
                    <div className="space-y-2 mb-4">
                        {selectedPriorities.map((priority, index) => {
                            const dim = DIMENSIONS.find(d => d.value === priority);
                            return (
                                <div
                                    key={priority}
                                    className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-primary-50 to-primary-100 p-3 border border-primary-200 animate-scale-in"
                                >
                                    <span className="w-7 h-7 flex items-center justify-center bg-primary-600 text-white text-sm font-bold rounded-lg shadow-sm">
                                        {index + 1}
                                    </span>
                                    <span className="text-lg">{dim?.icon}</span>
                                    <span className="flex-1 font-medium text-primary-900">{dim?.label}</span>
                                    <div className="flex gap-1">
                                        <button
                                            type="button"
                                            onClick={() => movePriority(priority, "up")}
                                            disabled={index === 0}
                                            className="p-1.5 rounded-lg text-primary-600 hover:bg-primary-200 disabled:opacity-30 transition-colors"
                                            aria-label="Move up"
                                        >
                                            ↑
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => movePriority(priority, "down")}
                                            disabled={index === selectedPriorities.length - 1}
                                            className="p-1.5 rounded-lg text-primary-600 hover:bg-primary-200 disabled:opacity-30 transition-colors"
                                            aria-label="Move down"
                                        >
                                            ↓
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handlePriorityChange(priority, false)}
                                            className="p-1.5 rounded-lg text-red-500 hover:bg-red-100 transition-colors"
                                            aria-label="Remove"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Available Dimensions */}
                <div className="grid grid-cols-2 gap-2">
                    {DIMENSIONS.filter(d => !selectedPriorities.includes(d.value)).map(dim => (
                        <button
                            key={dim.value}
                            type="button"
                            onClick={() => handlePriorityChange(dim.value, true)}
                            disabled={selectedPriorities.length >= 5}
                            className="flex items-center gap-2 p-3 rounded-xl border-2 border-gray-100 bg-white hover:border-primary-300 hover:bg-primary-50 transition-all disabled:opacity-40 disabled:cursor-not-allowed text-left"
                        >
                            <span>{dim.icon}</span>
                            <span className="text-sm font-medium text-gray-700">{dim.label}</span>
                        </button>
                    ))}
                </div>

                {/* Hidden inputs */}
                {selectedPriorities.map(priority => (
                    <input key={priority} type="hidden" name="priorities" value={priority} />
                ))}
            </div>

            {/* Required Features */}
            <div className="form-section">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-4">
                    <span className="text-lg">✅</span>
                    <span>Required Features</span>
                </h3>
                <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <input
                        type="checkbox"
                        name="require_5g"
                        checked={require5G}
                        onChange={(e) => setRequire5G(e.target.checked)}
                        className="w-5 h-5 rounded-lg border-2 border-gray-300 text-primary-600 focus:ring-primary-500 focus:ring-offset-0"
                    />
                    <span className="text-lg">📶</span>
                    <span className="font-medium text-gray-700">Require 5G Support</span>
                </label>
            </div>

            {/* AI Enhancement */}
            <div className="panel-purple">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="flex items-center gap-2 text-sm font-semibold text-accent-800">
                        <span className="text-lg">🤖</span>
                        <span>AI Analysis</span>
                    </h3>
                    <span className="badge badge-accent text-xs">AI + Search</span>
                </div>
                <p className="text-xs text-accent-600 mb-4">
                    Real-time web research for the latest specs, reviews, and prices.
                </p>
                <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl bg-white/60 hover:bg-white/80 transition-colors">
                    <input
                        type="checkbox"
                        name="use_ai"
                        checked={useAI}
                        onChange={(e) => setUseAI(e.target.checked)}
                        className="w-5 h-5 rounded-lg border-2 border-accent-300 text-accent-600 focus:ring-accent-500 focus:ring-offset-0"
                    />
                    <span className="font-medium text-accent-800">Enable AI-Powered Analysis</span>
                </label>
            </div>

            {/* Submit Button */}
            <SubmitButton />

            {selectedPriorities.length === 0 && (
                <p className="text-center text-red-500 text-sm flex items-center justify-center gap-2">
                    <span>⚠️</span>
                    <span>Select at least one priority</span>
                </p>
            )}
        </form>
    );
}
