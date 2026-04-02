"use client";

import {
  TrendingUp,
  Database,
  FileCheck2,
  IndianRupee,
  Sparkles,
} from "lucide-react";

export default function DrawingRevenueModel() {
  return (
    <section className="relative py-10 overflow-hidden bg-white text-gray-800">

      {/* Soft Background Gradient */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[140px] opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[140px] opacity-40"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-red-600 font-semibold tracking-[4px] uppercase">
            Key Differentiator
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Make Your Drawings <span className="text-red-600">Earn</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg">
            ACTPL transforms reverse engineering from a one-time cost into a
            long-term digital asset that continuously generates business value.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-12 items-center">

          {/* LEFT */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug">
              Turn Engineering Effort into <br />
              <span className="text-red-600">Recurring Revenue</span>
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Once your drawing is reverse engineered, approved, and securely
              stored in our platform, it becomes a reusable digital asset.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Every time the same drawing is used for manufacturing by another
              customer, you earn — creating a new income stream from existing
              engineering work.
            </p>
          </div>

          {/* CENTER CARD */}
          <div className="relative group">

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 blur-xl opacity-20 group-hover:opacity-30 transition"></div>

            <div className="relative bg-white border border-gray-200 shadow-xl rounded-3xl p-10 text-center">

              <Sparkles className="mx-auto mb-6 text-red-600" size={36} />

              <p className="text-gray-500 mb-2">Traditional Model</p>
              <h4 className="text-md line-through text-red-500 mb-5">
                Reverse Engineering = Cost
              </h4>

              <div className="text-3xl text-red-600 mb-5">↓</div>

              <p className="text-gray-500 mb-2">ACTPL Model</p>
              <h4 className="text-lg font-semibold text-green-600 mb-5">
                Reverse Engineering = Digital Asset
              </h4>

              <div className="text-3xl text-red-600 mb-5">↓</div>

              <h4 className="text-xl font-bold text-yellow-500">
                Recurring Revenue
              </h4>
            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="space-y-5">

            {[
              {
                icon: Database,
                text: "Secure platform-based drawing storage",
              },
              {
                icon: FileCheck2,
                text: "Approved & controlled manufacturing access",
              },
              {
                icon: IndianRupee,
                text: "Revenue generation from drawing reuse",
              },
              {
                icon: TrendingUp,
                text: "Long-term value from one-time engineering",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-lg transition"
              >
                <item.icon className="text-red-600 mt-1" />
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}

          </div>
        </div>

        {/* Bottom Highlight */}
        {/* <div className="mt-20 text-center">
          <div className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold shadow-lg">
            From Cost Center → Profit Center
          </div>
        </div> */}

      </div>
    </section>
  );
}