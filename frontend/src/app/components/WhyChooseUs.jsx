"use client";

import {
  Settings,
  Cpu,
  Clock,
  IndianRupee,
  Database,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "Expert Engineering Team",
    desc: "Highly experienced mechanical specialists.",
  },
  {
    icon: Cpu,
    title: "High-Precision CAD",
    desc: "Advanced inspection & accurate digital modeling.",
  },
  {
    icon: Clock,
    title: "Faster Than OEM",
    desc: "Reduced lead time for critical spare parts.",
  },
  {
    icon: IndianRupee,
    title: "Cost-Effective",
    desc: "Optimized solutions without compromising quality.",
  },
  {
    icon: Database,
    title: "Drawing Management",
    desc: "Platform-based secure digital library.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Control",
    desc: "Strict manufacturing & inspection process.",
  },
];

export default function WhyACTPL() {
  return (
    <section className="py-12 ">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-red-600 font-semibold tracking-widest uppercase">
            Why ACTPL
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Engineering Excellence You Can Trust
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            We deliver precision-driven reverse engineering solutions
            that ensure performance, reliability, and long-term value.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Your Reliable Partner for Critical Spare Parts
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              ACTPL combines deep mechanical engineering expertise with
              advanced digital technologies to deliver faster, more accurate,
              and cost-efficient solutions compared to traditional OEM supply.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our platform-driven approach ensures every drawing, component,
              and manufacturing process is securely stored and instantly
              accessible for future production.
            </p>

            {/* Highlight Box */}
            <div className="mt-8 bg-white border-l-4 border-red-600 p-6 rounded-lg shadow-sm">
              <p className="font-semibold text-gray-800">
                We focus on reliability, accuracy, and customer satisfaction.
              </p>
            </div>
          </div>

          {/* Right Side Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-6">

            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 group"
              >
                <item.icon
                  className="text-red-600 mb-4 group-hover:scale-110 transition"
                  size={36}
                />

                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* Bottom Trust Strip */}
        {/* <div className="mt-20 bg-blue-600 text-white text-center py-8 rounded-xl shadow-lg">
          <p className="text-xl font-semibold">
            Delivering Precision • Speed • Long-Term Value
          </p>
        </div> */}

      </div>
    </section>
  );
}