import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <section className="py-10 px-4 md:px-8 lg:px-16 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content Section */}
          <div className="lg:w-1/2 space-y-3">
            {/* Sub-headline */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-0.5 bg-[#ff0000]"></div>
              <span className="text-gray-900 font-semibold tracking-widest  uppercase">
                About Our Company
              </span>
            </div>

            <h1 className="text-5xl md:text-5xl lg:text-4xl font-light leading-tight ">
              Crafting Enduring{" "}
              <span className="font-medium text-[#ff0000]">
                Excellence Since 2006
              </span>
            </h1>

            {/* About Content */}
            <div className="space-y-2">
              <p className=" leading-relaxed text-justify ">
                Tanushree Group is a diversified organization built on vision,
                integrity, and long-term commitment. Since our inception in
                2006, we have consistently delivered excellence across Real
                Estate, Education, and Hospitality, guided by a belief that true
                success lies in creating meaningful impact. With nearly two
                decades of experience, we blend thoughtful planning with ethical
                execution to develop spaces, institutions, and experiences that
                stand the test of time. Our work reflects a deep understanding
                of human aspirations and a responsibility toward communities we
                serve.
              </p>

              <p className="leading-relaxed text-justify">
                We are driven by the pursuit of quality, transparency, and
                trust. Every initiative undertaken by Tanushree Group is shaped
                with care, precision, and a people-first mindset. Our passion
                lies in transforming vision into value and ambition into
                enduring outcomes, while remaining committed to excellence in
                every detail.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button
                className="group relative overflow-hidden px-6 py-3 rounded-xl
bg-gradient-to-r from-red-600 via-[#c92407] to-red-700
shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50
transition-all duration-300 hover:scale-105"
              >
                {/* CONTINUOUS SHINE */}
                <span
                  className="absolute inset-0 
  bg-gradient-to-r from-transparent via-white/60 to-transparent
  animate-shine"
                />

                {/* CONTENT */}
                <div className="relative flex items-center justify-center space-x-3">
                  <span className="font-bold capitalize text-black-900 tracking-wide">
                    LERN MORE
                  </span>
                  <svg
                    className="w-5 h-5 text-black-900 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#ff0000] to-red-400 bg-clip-text text-transparent">
                  99%
                </div>
                <div className="text-gray-600 text-sm">Timely Possession</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#ff0000] to-red-400 bg-clip-text text-transparent">
                  99%
                </div>
                <div className="text-gray-600 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#ff0000] to-red-400 bg-clip-text text-transparent">
                  20+
                </div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:w-1/2 relative">
            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-golden/20 to-yellow-400/10 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-golden/10 to-amber-500/5 rounded-3xl -z-10"></div>

              {/* Main Image */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-[5/5] w-full bg-gradient-to-br from-gray-900 to-gray-800 relative">
                  {/* Placeholder image - Replace with actual image */}
                  <img
                    src="/services/image3.png"
                    alt="Main Image"
                    className="w-full h-full object-cover"
                  />

                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
