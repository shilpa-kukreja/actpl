"use client";

import {
  ScanSearch,
  Ruler,
  Cpu,
  Factory,
  Database,
} from "lucide-react";

const steps = [
  {
    icon: ScanSearch,
    title: "Sample Collection",
    desc: "Physical spare part is collected and analyzed.",
  },
  {
    icon: Ruler,
    title: "Precision Measurement",
    desc: "High-accuracy dimensional inspection.",
  },
  {
    icon: Cpu,
    title: "CAD Modeling",
    desc: "Advanced engineering design & detailing.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Production with strict quality control.",
  },
  {
    icon: Database,
    title: "Digital Library",
    desc: "Future-ready reusable digital assets.",
  },
];

export default function OurSolution() {
  return (
    <section className="relative py-12 bg-gray-100 text-gray-900 overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-200 opacity-30 blur-[140px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 whitespace-nowrap">
            Our Reverse Engineering Solution
          </h2>

          <p className="text-gray-600 text-lg">
            We convert physical spare parts into precise digital engineering assets —
            enabling faster production, superior accuracy, and lifetime availability.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-5 gap-8 relative">

          {steps.map((step, index) => (
            <div key={index} className="relative group">

              {/* Connector Line */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-14 left-full w-full h-[2px] bg-gradient-to-r from-red-400 to-transparent"></div>
              )}

              {/* Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center
                              shadow-md hover:shadow-xl hover:-translate-y-2
                              transition duration-500">

                {/* Step Number */}
                <div className="text-sm text-black-600 mb-2 font-semibold">
                  STEP {index + 1}
                </div>

                {/* Icon */}
                <step.icon
                  size={42}
                  className="mx-auto text-red-600 mb-4 group-hover:scale-110 transition"
                />

                {/* Title */}
                <h3 className="font-semibold truncate text-lg mb-2">
                  {step.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-gray-600">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Result Strip */}
        <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">

          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-md">
            <h4 className="text-3xl font-bold text-red-600">3X</h4>
            <p className="text-gray-600 mt-2">Faster Replacement</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-md">
            <h4 className="text-3xl font-bold text-red-600">100%</h4>
            <p className="text-gray-600 mt-2">Quality Consistency</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-md">
            <h4 className="text-3xl font-bold text-red-600">Lifetime</h4>
            <p className="text-gray-600 mt-2">Digital Availability</p>
          </div>

        </div>
      </div>
    </section>
  );
}