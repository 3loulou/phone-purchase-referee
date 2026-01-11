import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20 animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-24 text-center">
        {/* Glow Effects */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl animate-glow" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-800/60 border border-lime-500/30 text-lime-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <span>AI-Powered Phone Intelligence</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-white">
            Phone Purchase
            <span className="block text-gradient-neon mt-2">Referee</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Smart recommendations powered by AI. Compare specs, analyze trade-offs, 
            and make data-driven decisions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/compare"
              className="btn-neon inline-flex items-center justify-center gap-2 text-lg min-w-[200px]"
            >
              <span>Start Comparing</span>
              <span>→</span>
            </Link>
            <Link
              href="/about"
              className="btn-ghost inline-flex items-center justify-center text-lg min-w-[200px]"
            >
              Learn More
            </Link>
          </div>

          {/* Info Pills */}
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <div className="pill-badge-neon">
              <span>⚡</span>
              <span>Real-time Analysis</span>
            </div>
            <div className="pill-badge-neon">
              <span>🎯</span>
              <span>Conditional Recommendations</span>
            </div>
            <div className="pill-badge-neon">
              <span>📊</span>
              <span>Data-Driven</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="card-dark-hover group">
          <div className="feature-icon mb-4 group-hover:scale-110 transition-transform">
            🤖
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            AI-Powered Analysis
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Advanced AI analyzes phones based on your priorities and budget, providing intelligent comparisons with real data points.
          </p>
        </div>

        <div className="card-dark-hover group">
          <div className="feature-icon mb-4 group-hover:scale-110 transition-transform">
            🔍
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            Real-Time Research
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Live web integration provides up-to-date specs, pricing, and reviews from trusted sources across the internet.
          </p>
        </div>

        <div className="card-dark-hover group">
          <div className="feature-icon mb-4 group-hover:scale-110 transition-transform">
            ⚖️
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            Transparent Trade-offs
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            No black box decisions. Clear, explicit trade-offs between options to help you make the right choice.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A principled, transparent approach to phone comparison
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { icon: "⚖️", title: "Multi-Option", desc: "Multiple choices" },
            { icon: "🔀", title: "Conditional", desc: "Context-based" },
            { icon: "📊", title: "Data-Driven", desc: "Real metrics" },
            { icon: "🔍", title: "Transparent", desc: "Clear reasoning" },
            { icon: "✨", title: "AI-Enhanced", desc: "Smart analysis" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-900/40 border border-gray-800 hover:border-lime-500/30 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto">
        <div className="glow-card p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Perfect Phone?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Get personalized recommendations with real-time data and transparent analysis
          </p>
          <Link
            href="/compare"
            className="btn-neon inline-flex items-center gap-2 text-lg"
          >
            <span>Start Comparing Now</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
