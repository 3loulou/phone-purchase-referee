"use client";

import Link from "next/link";

export default function SelectPage() {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors mb-4 font-medium"
        >
          <span>←</span>
          <span>Back to Home</span>
        </Link>
        <h1 className="text-4xl font-extrabold text-gray-900 flex items-center gap-3">
          <span className="text-4xl">📊</span>
          <span>Phone Selection</span>
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Select specific phones to compare.
        </p>
      </div>

      <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-12 text-center border border-primary-100">
        <div className="text-6xl mb-4">🔜</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon</h2>
        <p className="text-gray-600 mb-6">
          Select specific phones from our database and compare them side-by-side.
        </p>
        <Link
          href="/compare"
          className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
        >
          <span>Try Comparison Instead</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
