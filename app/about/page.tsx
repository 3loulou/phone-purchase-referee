import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Refree",
    description: "Learn about Refree's constitutional principles and how our AI-powered phone comparison works.",
};

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto animate-fade-in">
            {/* Header */}
            <div className="text-center mb-12">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors mb-6 font-medium"
                >
                    <span>←</span>
                    <span>Back to Home</span>
                </Link>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    <span className="text-gradient">About Refree</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    The Phone Purchase Referee that never declares a "best" phone—only conditional recommendations.
                </p>
            </div>

            {/* Constitution */}
            <section className="panel mb-8">
                <h2 className="section-title flex items-center gap-2 mb-6">
                    <span>📜</span>
                    <span>Our Constitution</span>
                </h2>

                <div className="space-y-6">
                    <div className="p-5 rounded-xl bg-gradient-to-br from-primary-50 to-blue-50 border border-primary-100">
                        <h3 className="font-bold text-primary-800 mb-2 flex items-center gap-2">
                            <span>1️⃣</span>
                            <span>Multi-Option Output</span>
                        </h3>
                        <p className="text-gray-700">
                            We never output a single "winner." Every comparison presents at least 2 viable options, each with clear trade-offs.
                        </p>
                    </div>

                    <div className="p-5 rounded-xl bg-gradient-to-br from-accent-50 to-purple-50 border border-accent-100">
                        <h3 className="font-bold text-accent-800 mb-2 flex items-center gap-2">
                            <span>2️⃣</span>
                            <span>Conditional Recommendations</span>
                        </h3>
                        <p className="text-gray-700">
                            All recommendations are conditional. "Phone X is optimal IF you prioritize Y within budget Z." Never absolute statements.
                        </p>
                    </div>

                    <div className="p-5 rounded-xl bg-gradient-to-br from-success-50 to-emerald-50 border border-success-100">
                        <h3 className="font-bold text-success-800 mb-2 flex items-center gap-2">
                            <span>3️⃣</span>
                            <span>Explicit Trade-offs</span>
                        </h3>
                        <p className="text-gray-700">
                            Every recommendation includes measurable trade-offs across dimensions like battery, camera, price, and performance.
                        </p>
                    </div>

                    <div className="p-5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
                        <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                            <span>4️⃣</span>
                            <span>Transparent Eliminations</span>
                        </h3>
                        <p className="text-gray-700">
                            When a phone is eliminated, you see exactly why: "Exceeds budget by $150" or "Missing required 5G support."
                        </p>
                    </div>

                    <div className="p-5 rounded-xl bg-gradient-to-br from-gray-50 to-slate-50 border border-gray-200">
                        <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                            <span>5️⃣</span>
                            <span>Deterministic Core</span>
                        </h3>
                        <p className="text-gray-700">
                            The referee engine is pure logic—no AI in the decision process. Same inputs always produce same outputs. AI is used only for research.
                        </p>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="panel-purple mb-8">
                <h2 className="section-title flex items-center gap-2 mb-6 text-accent-900">
                    <span>🔧</span>
                    <span>How It Works</span>
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="bg-white/70 p-5 rounded-xl">
                        <div className="text-2xl mb-2">1️⃣</div>
                        <h3 className="font-bold text-gray-800 mb-1">Set Constraints</h3>
                        <p className="text-sm text-gray-600">Define your budget, priorities, and required features.</p>
                    </div>
                    <div className="bg-white/70 p-5 rounded-xl">
                        <div className="text-2xl mb-2">2️⃣</div>
                        <h3 className="font-bold text-gray-800 mb-1">Filter & Score</h3>
                        <p className="text-sm text-gray-600">Referee engine eliminates non-qualifying phones and scores the rest.</p>
                    </div>
                    <div className="bg-white/70 p-5 rounded-xl">
                        <div className="text-2xl mb-2">3️⃣</div>
                        <h3 className="font-bold text-gray-800 mb-1">AI Research</h3>
                        <p className="text-sm text-gray-600">Our AI searches the web for latest specs, prices, and reviews.</p>
                    </div>
                    <div className="bg-white/70 p-5 rounded-xl">
                        <div className="text-2xl mb-2">4️⃣</div>
                        <h3 className="font-bold text-gray-800 mb-1">Conditional Verdicts</h3>
                        <p className="text-sm text-gray-600">Get personalized recommendations with explicit trade-offs.</p>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="panel mb-8">
                <h2 className="section-title flex items-center gap-2 mb-6">
                    <span>⚙️</span>
                    <span>Technology</span>
                </h2>

                <div className="flex flex-wrap gap-3">
                    {[
                        { name: "Next.js 16", icon: "▲" },
                        { name: "TypeScript", icon: "📘" },
                        { name: "Tailwind CSS", icon: "🎨" },
                        { name: "Google AI", icon: "🤖" },
                        { name: "Google Search API", icon: "🔍" },
                        { name: "Zod", icon: "✅" },
                        { name: "Vercel", icon: "🚀" },
                    ].map((tech) => (
                        <div
                            key={tech.name}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200"
                        >
                            <span>{tech.icon}</span>
                            <span className="font-medium text-gray-700">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <div className="text-center">
                <Link
                    href="/compare"
                    className="btn-primary inline-flex items-center gap-2 text-lg"
                >
                    <span>🎯</span>
                    <span>Start Comparing</span>
                </Link>
            </div>
        </div>
    );
}
