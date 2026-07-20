"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const industries = [
  {
    title: "Natural Gas Gathering",
    img: "/industries/industry/naturalgas.jpeg",
    desc: "Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation."
  },
  {
    title: "Liquified Natural Gas",
    img: "/industries/industry/liquidfiednaturalgas.jpeg",
    desc: "Built to withstand pressure and environment in oil and gas operations.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation."
  },
  {
    title: "Biogas Renewable Natural Gas",
    img: "/industries/industry/biogas.jpeg",
    desc: "Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation."
  },
  {
    title: "Chemical Processing ",
    img: "/industries/industry/chemicalprocessing.jpeg",
    desc: "Digging for natural resources while providing safety and reliability.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation."
  },
  {
    title: "Marine",
    img: "/industries/industry/Marine.jpg",
    desc: "Precision processes require purity and reliability.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation."
  },
  {
    title: "P.E.T. Bottle Blowing",
    img: "/industries/industry/pet.jpeg",
    desc: "Manufacturing plastic products involves precision and consistency.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation."
  },
  {
    title: "Compressed Natural Gas (CNG)",
    img: "/industries/industry/cng.jpeg",
    desc: "Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation."
  },
  {
    title: "Pipeline Transmission Industry",
    img: "/industries/industry/Pipeline Transmission Industry.jpg",
    desc: "Clean, high-quality machinery is vital to the medical field.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation."
  },
  {
    title: "Petrochemical Processing",
    img: "/industries/industry/Petrochemical Processing.jpg",
    desc: "Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation."
  },
  {
    title: "Hydrozen",
    img: "/industries/industry/Hydrozen.jpg",
    desc: "Manufacturers rely on compressed air for efficiency.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation."
  },
  {
    title: "Oxygen",
    img: "/industries/industry/Oxygen.jpg",
    desc: "Compressed air systems optimize production in the auto industry.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation.Whether you are a train passenger or a shipper of interstate cargo, you both expect smooth transportation."
  },
];

export default function IndustriesPage() {
  return (
    <>
    <Navbar/>

<div className="bg-gray-100 min-h-screen">
      
      {/* HERO SECTION */}
      <div className="relative">
        <img
          src="/industries/banner.jpg"
          alt="Industries"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">INDUSTRIES</h1>
        </div> */}
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl sm:text-5xl font-bold mb-8 text-gray-700">
          Industries
                                                <div className="w-24 h-1 bg-red-600 mt-4 rounded-full"></div>

        </h2>

        <div className="space-y-10">
          {industries.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 border-b pb-8"
            >
              {/* IMAGE */}
              <div className="md:w-1/3 w-full h-[180px] ">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* CONTENT */}
              <div className="md:w-2/3 w-full">
                <h3 className="text-xl font-bold text-red-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxe text-align">
                  {item.desc}
                </p>

                
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
    <Footer/>
    </>
    
  );
}