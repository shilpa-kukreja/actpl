"use client";

import {
  Factory,
  Building2,
  Zap,
  Settings,
  Cpu,
  Wrench,
} from "lucide-react";

const industries = [
  { icon: Factory, title: "Manufacturing Plants" },
  { icon: Building2, title: "Cement Plants" },
  { icon: Zap, title: "Power Plants" },
  { icon: Settings, title: "Steel Plants" },
  { icon: Cpu, title: "Compressor & Pump Industry" },
  { icon: Wrench, title: "Heavy Engineering Units" },
];

export default function IndustriesWeServe() {
  return (
    <section className="py-10 bg-gray-200 relative overflow-hidden">

      {/* Soft background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gray-200 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-red-600 tracking-[4px] uppercase font-semibold">
            Industries We Serve
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
            Delivering Solutions Across
            <span className="text-red-600"> Core Industries</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg">
            Our reverse engineering expertise supports mission-critical
            equipment across diverse industrial sectors with
            customized, reliable, and cost-effective solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {industries.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-2xl p-8 
                         shadow-md hover:shadow-2xl hover:-translate-y-2 
                         transition duration-500"
            >

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl
                              bg-gradient-to-r from-blue-50 to-indigo-50
                              mb-4 transition">

                <item.icon className="text-red-600" size={28} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                Tailored reverse engineering solutions to improve equipment
                availability, reduce downtime, and enhance lifecycle performance.
              </p>

            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        {/* <div className="mt-24 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg">
            Customized Engineering Solutions for Every Industry
          </div>
        </div> */}

      </div>
    </section>
  );
}