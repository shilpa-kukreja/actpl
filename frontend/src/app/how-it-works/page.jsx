// pages/how-it-works.jsx or app/how-it-works/page.jsx
"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Sample Collection",
      description:
        "We begin by collecting and thoroughly analyzing the physical spare part that needs to be replicated or improved.",
    },
    {
      number: "02",
      title: "Precision Measurement",
      description:
        "Using high-accuracy dimensional inspection tools, we capture every critical measurement of the component.",
    },
    {
      number: "03",
      title: "CAD Modeling",
      description:
        "Our expert engineers convert the measurement data into advanced 3D CAD models with detailed engineering design.",
    },
    {
      number: "04",
      title: "Manufacturing",
      description:
        "The approved design moves to production, utilizing strict quality control protocols to ensure 100% consistency.",
    },
    {
      number: "05",
      title: "Digital Library",
      description:
        "The final engineering asset is securely stored in our platform, creating a future-ready reusable digital drawing.",
    },
  ];

  return (
    <>
    <Navbar/>
       <section className="w-full">
          <div className=" w-full">
            {/* <video
              src="/industries/video.mp4"
              alt="Eric AI CRA"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-40 sm:h-90 object-cover"
            /> */}
            <img src="/howitworks/banner.jpg" alt="how it works banner"/>
          </div>
        </section>

  <div className="min-h-screen bg-white text-black font-sans">
      {/* Navbar (Matching ACTPL Theme) */}
   

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-red-600"></div>
            <span className="text-gray-400 font-semibold tracking-widest uppercase text-sm">
              Our Process
            </span>
            <div className="w-12 h-0.5 bg-red-600"></div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            How{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              Reverse Engineering
            </span>{" "}
            Works
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            A systematic, precision-driven approach to transform physical spare
            parts into permanent digital engineering assets.
          </p>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {/* Desktop Connector Line */}
            {/* <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2 z-0"></div> */}

            {steps.map((step, index) => (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Step Number Circle */}
                <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-red-600/20 group-hover:scale-105 transition-transform duration-300 mb-6">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Connector Arrow for Mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden w-0.5 h-8 bg-gray-700 my-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiator / CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center border border-gray-200 rounded-2xl p-10 md:p-16 bg-gray-50 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-red-600"></div>
            <span className="text-red-500 font-semibold tracking-widest uppercase text-sm">
              Make Your Drawings Earn
            </span>
            <div className="w-12 h-0.5 bg-red-600"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            From One-Time Cost to{" "}
            <span className="text-red-500">Recurring Revenue</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Once your drawing is reverse engineered and securely stored, every
            reuse generates new income — turning engineering effort into a
            long-term digital asset.
          </p>
          <Link href="/contact-us" ><button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-10 rounded-md transition-all shadow-lg shadow-red-600/20">
            Start Your Project
          </button></Link>
          
        </div>
      </section>

  
    </div>
    <Footer/>
    
    </>
  
  );
};

export default HowItWorks;