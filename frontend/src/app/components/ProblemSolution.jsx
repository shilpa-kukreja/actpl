"use client";

import Image from "next/image";

export default function ProblemSolution() {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image Side */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/problem.webp"   // 👉 change to your image
            alt="Industrial Solution"
            fill
            className="object-cover rounded-2xl shadow-2xl"
          />

          {/* <div className="absolute bottom-6 right-6 bg-blue-900 text-white px-6 py-4 rounded-xl shadow-lg">
            <p className="font-semibold">ACTPL</p>
            <p className="text-sm">Engineering Reliable Solutions</p>
          </div> */}
        </div>

        {/* Content Side */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Facing These Challenges?
          </h2>

          <ul className="space-y-4 text-gray-800 text-lg">
            <li>✔ OEM spare parts discontinued</li>
            <li>✔ Long import lead times</li>
            <li>✔ High maintenance & downtime cost</li>
            <li>✔ No technical drawings available</li>
            <li>✔ Dependency on single suppliers</li>
          </ul>

          <p className="mt-6 text-lg font-medium text-gray-800">
            These challenges directly impact your
            <span className="text-red-600"> productivity, profitability</span> and
            <span className="text-red-600"> operational reliability.</span>
          </p>

          <p className="mt-4 font-semibold text-xl">
            ACTPL provides a permanent & cost-effective solution.
          </p>

          <button className="mt-8 bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
            Get a Solution →
          </button>
        </div>

      </div>
    </section>
  );
}