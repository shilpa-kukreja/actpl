"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";
import { Link } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const services = [
    {
      title: "Dismantle",
      color: "from-blue-50 to-blue-100",
      image: "/servicepage/capabilities/Dismantle.jpg",
    },
    {
      title: "Punch Mark",
      color: "from-purple-50 to-purple-100",
      image: "/servicepage/capabilities/Punch Mark.jpg",
    },
    {
      title: "De-grease",
      color: "from-green-50 to-green-100",
      image: "/servicepage/capabilities/De-grease.jpg",
    },
    {
      title: "Sandblast",
      color: "from-cyan-50 to-cyan-100",
      image: "/servicepage/capabilities/Sandblast.jpg",
    },
    {
      title: "Non-visual Cracks",
      color: "from-yellow-50 to-yellow-100",
      image: "/servicepage/capabilities/Non-visual Cracks.jpg",
    },
    {
      title: "Replace",
      color: "from-orange-50 to-orange-100",
      image: "/servicepage/capabilities/Replace.jpg",
    },
    {
      title: "Inspection Report",
      color: "from-pink-50 to-pink-100",
      image: "/servicepage/capabilities/Inspection Report.jpg",
    },
    {
      title: "Machine, griding and Lapping",
      color: "from-indigo-50 to-indigo-100",
      image: "/servicepage/capabilities/Machine, griding and Lapping.jpg",
    },
    {
      title: "Flatness Check ",
      color: "from-red-50 to-red-100",
      image: "/servicepage/capabilities/Flatness Check.jpg",
    },
    {
      title: "Assemble",
      color: "from-teal-50 to-teal-100",
      image: "/servicepage/capabilities/Assemble.jpg",
    },
    {
      title: "Pneumatic Pressure Test",
      color: "from-sky-50 to-sky-100",
      image: "/servicepage/capabilities/Pneumatic Pressure Test.jpg",
    },
    {
      title: "Pack and Deliver",
      color: "from-rose-50 to-rose-100",
      image: "/servicepage/capabilities/Pack and Deliver.jpg",
    },
  ];

  const steps = [
    { title: "Specification", color: "bg-blue-50 border-blue-200" },
    { title: "Design", color: "bg-purple-50 border-purple-200" },
    { title: "Assembly", color: "bg-green-50 border-green-200" },
    { title: "Testing", color: "bg-yellow-50 border-yellow-200" },
    { title: "Delivery", color: "bg-pink-50 border-pink-200" },
  ];

  return (
    <>
      <Navbar />

      {/* ================= HERO IMAGE ================= */}
      <section className="w-full">
        <div className=" w-full ">
          {/* <video
            src="/services/video.mp4"
            alt="Eric AI CRA"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-40 sm:h-90 object-cover"
          /> */}
          <img src="/servicepage/banner.jpg" alt="banner"/>
        </div>
      </section>
      <div className="bg-white text-gray-800">
        {/* HERO SECTION */}
        <section className="relative bg-white">
          <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                We are here with an economical solution
              </h1>
              <p className="mt-6 text-gray-600 text-md sm:text-lg">
                We are committed to delivering cost-effective solutions with
                superior quality and precision engineering.
              </p>

              <button
                onClick={() => router.push("/contact-us")}
                className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-800 transition"
              >
                Get Started
              </button>
            </div>

            <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/servicepage/image.jpg"
                alt="Engineering"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* PRODUCT SHOWCASE */}
        {/* <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/services/image1.png"
                alt="Product 1"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/services/image2.png"
                alt="Product 2"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </section> */}

        {/* SERVICES GRID */}
        <section id="capabilities" className="py-12 bg-gray-50" >
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-14">
              Our Capabilities
              <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`rounded-2xl overflow-hidden bg-gradient-to-br ${service.color} p-[1px]`}
                >
                  <div className="bg-white rounded-2xl h-full group flex flex-col shadow-md transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(220,38,38,0.18)]">
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-semibold text-lg text-gray-800 transition-colors duration-300 group-hover:text-red-600">
                        {service.title}
                      </h3>

                      <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                        High-quality engineering with precision and reliability.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS / TIMELINE */}
        <section id="process" className=" bg-white py-24">
          <div className="max-w-5xl mx-auto px-6">
            {/* Heading */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                Our Process
                                                      <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>

              </h2>
              <p className="text-gray-500 mt-4 text-md sm:text-lg">
                A structured and efficient workflow from concept to delivery
              </p>
            </div>

            {/* Timeline Container */}
            <div className="relative">
              {/* Center Line */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200"></div>

              <div className="space-y-16">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className={`relative flex items-center ${
                      i % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    {/* Card */}
                    <div
                      className={`w-[45%] p-6 rounded-2xl border ${step.color} 
                  shadow-sm hover:shadow-xl transition duration-300`}
                    >
                      <h3 className="text-lg font-semibold text-gray-800">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-2">
                        Precision-driven execution ensuring quality and
                        reliability.
                      </p>
                    </div>

                    {/* Circle Indicator */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center shadow-md z-10">
                      <span className="text-sm font-semibold text-gray-700">
                        {i + 1}
                      </span>
                    </div>

                    {/* Connector Line */}
                    <div
                      className={`absolute top-1/2 w-[50px] h-[2px] bg-gray-300 ${
                        i % 2 === 0 ? "left-1/2" : "right-1/2"
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL / QUOTE */}
        <section className="bg-gray-200 text-red-600 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-xl italic">
              “Get your perfect solution with professional engineering and
              innovation.”
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
