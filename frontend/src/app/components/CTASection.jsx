"use client";

import { PhoneCall, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-10 bg-white relative overflow-hidden">

      {/* Soft Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-blue-50 blur-[120px] -z-10"></div>

      <div className="max-w-6xl mx-auto px-6">

        <div className="relative bg-white border border-gray-300 text-black rounded-xl p-6 md:p-10 shadow-xl overflow-hidden">

          {/* Glow Effect */}
          {/* <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/20 blur-[100px]"></div> */}

          <div className="relative z-10 text-center">

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Ready to Solve Your Spare Part Problem?
            </h2>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Get expert technical support for your critical components and
              eliminate downtime with our precision reverse engineering solutions.
            </p>

            {/* Contact Line */}
            <div className="flex items-center justify-center gap-3 text-black font-medium mb-10">
              <PhoneCall className="text-black" />
              <span>Contact us today for a free technical consultation</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-row sm:flex-row gap-5 justify-center">

              {/* Contact Us */}
              <Link href="/contact-us">
                <button className="group bg-red-600 text-white px-2 sm:px-8 py-4 rounded-md font-semibold flex items-center gap-2  transition shadow-lg">
                  Contact Us
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </button>
              </Link>

              {/* Request Quote */}
              <Link href="/request-quote">
                <button className="group border border-white px-2 sm:px-8 py-4 bg-gray-200 rounded-md font-semibold flex items-center gap-2  hover:text-blue-700 transition">
                  Request Quote
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}