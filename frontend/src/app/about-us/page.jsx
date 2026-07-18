"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutUs() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const companyImages = [
    { id: 1, src: "/companygallery/achievements.webp", alt: "Achievements", category: "Achievements" },
    { id: 2, src: "/companygallery/Awards&Recognition.webp", alt: "Awards", category: "Awards & Recognition" },
    { id: 3, src: "/companygallery/QualityCompliance.webp", alt: "Quality Compliance", category: "Quality" },
    { id: 4, src: "/companygallery/TradeMemberships.webp", alt: "Trade Memberships", category: "Memberships" },
    { id: 5, src: "/companygallery/QualityMantra.webp", alt: "Quality Mantra", category: "Quality" },
    { id: 6, src: "/companygallery/QualityAssurance.webp", alt: "Quality Assurance", category: "Quality" },
    { id: 7, src: "/companygallery/InfrastructuraSet-Up.webp", alt: "Infrastructure Set-Up", category: "Infrastructure" },
    { id: 8, src: "/companygallery/OurInfrastructure.webp", alt: "Our Infrastructure", category: "Infrastructure" },
    { id: 9, src: "/companygallery/Memberships.webp", alt: "Memberships", category: "Memberships" },
    { id: 10, src: "/companygallery/Affiliations.webp", alt: "Affiliations", category: "Memberships" },
    { id: 11, src: "/companygallery/OurWarehouse.webp", alt: "Our Warehouse", category: "Infrastructure" },
    { id: 12, src: "/companygallery/CertificateofRegistration.webp", alt: "Certificate", category: "Certificates" },
    { id: 13, src: "/companygallery/Research&DevelopmentFacilities.webp", alt: "R&D", category: "R&D" },
    { id: 14, src: "/companygallery/Recognition.webp", alt: "Recognition", category: "Achievements" },
    { id: 15, src: "/companygallery/ISOCertification.webp", alt: "ISO Certification", category: "Certificates" },
  ];

  // Dynamic categories
  const categories = ["All", ...new Set(companyImages.map((img) => img.category))];

  // Filter logic
  const filteredImages =
    activeCategory === "All"
      ? companyImages
      : companyImages.filter((img) => img.category === activeCategory);

  return (
    <>

    <Navbar/>
    {/* ================= HERO IMAGE ================= */}
        <section className="w-full">
          <div className=" w-full">
            <img
              src="/about/banner.jpg"
              alt="Eric AI CRA"
              className="w-full h-full object-cover"
            />
          </div>
        </section>


    <section className="mt-12 text-gray-800">
     
      {/* ================= BREADCRUMB ================= */}
      <div className=" text-sm text-center">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-3xl sm:text-5xl font-bold ">About Us</span>
                <div className="w-24 h-1 bg-red-600 mx-auto mt-3 rounded-full"></div>

        </div>
      </div>

      {/* ================= COMPANY OVERVIEW SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Company Description */}
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold mb-6 relative">
              <span className="relative z-10">Company Overview</span>
              <span className="absolute bottom-0 left-0 w-20 h-1 bg-red-600"></span>
            </h2>
            
            <p className="text-gray-700 text-justify leading-relaxed mb-6 text-lg">
              <span className="font-bold text-[#1b3163] text-xl">ACTPL</span> was established in the year 1974. 
              We are a leading Manufacturer and Exporter of Agricultural Pesticides, Butachlor 50% EW Herbicide, 
              Granulated Bio Extract Organic Soil Enricher, and much more.
            </p>
            
            <p className="text-gray-700 text-justify leading-relaxed mb-6 text-lg">
              An insecticide is a pesticide used against insects. They include ovicides and larvicides used 
              against the eggs and larvae of insects respectively. These are used in agriculture, industry and 
              the household. The use of insecticides is believed to be one of the major factors behind the 
              increase in agricultural productivity.
            </p>
            
            <p className="text-gray-700 text-justify leading-relaxed mb-8 text-lg">
              These products are toxic and highly effective for killing various types of insects, termites and 
              others. Available in liquified form as well as in powder form, we offer our customers these 
              insecticides in customized packaging at nominal prices.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-xl sm:text-3xl font-bold text-[#1b3163]">1974</div>
                <div className="text-sm text-gray-600">Established</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-xl sm:text-3xl font-bold text-[#1b3163]">51-100</div>
                <div className="text-sm text-gray-600">Employees</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-xl sm:text-3xl font-bold text-[#1b3163]">20%</div>
                <div className="text-sm text-gray-600">Export</div>
              </div>
            </div>
          </div>

          {/* Right Column - CEO Image/Message */}
          <div className=" rounded-xl shadow-xl overflow-hidden">
            <div className="relative h-[500px] w-full">
              <img
                src="/about/image.jpg"
                alt="CEO Sanjeev Arora"
                className="object-cover object-top h-full w-full"
                
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= FACT SHEET SECTION WITH ICONS ================= */}
      {/* <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-4">Factsheet</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">Quick overview of our business profile and credentials</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FactCard 
              icon="🏢"
              title="Nature of Business"
              value="Manufacturer"
              subtext="Factory / Warehouse / Office"
            />
            <FactCard 
              icon="👨‍💼"
              title="Company CEO"
              value="Sanjeev Arora"
              subtext="Leading since 1974"
            />
            <FactCard 
              icon="📍"
              title="Registered Address"
              value="Deoria-274001"
              subtext="Uttar Pradesh, India"
            />
            <FactCard 
              icon="📊"
              title="Annual Turnover"
              value="₹1.5 - 5 Cr"
              subtext="GST Reg: 01-07-2017"
            />
          </div>
        </div>
      </div> */}
      <div className="bg-gray-100 py-12 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      {/* <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-600 font-semibold tracking-wider uppercase text-sm">
        Company Profile
      </span> */}

      <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
        Factsheet
      </h2>

      <div className="w-24 h-1 bg-red-600 mx-auto mt-5 rounded-full"></div>

      <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
        A quick overview of our business credentials, leadership and company
        information that reflects our strength, reliability and commitment to
        excellence.
      </p>
    </div>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

      {/* Card 1 */}
      <div className="group relative overflow-hidden rounded-3xl bg-white text-black p-8 transition-all duration-500 hover:-translate-y-3 ">

        <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>

        <div className="w-12 h-12 rounded-2xl bg-gray-300 flex items-center justify-center text-3xl shadow-lg">
          🏢
        </div>

        <h3 className="mt-7 text-xl font-semibold">
          Nature of Business
        </h3>

        <p className="mt-4 text-2xl font-medium text-red-500">
          Manufacturer
        </p>

        <p className="mt-3 text-gray-400 leading-relaxed">
          Factory • Warehouse • Office
        </p>

        <div className="absolute -right-10 -bottom-10 w-36 h-36 rounded-full bg-red-600/10 group-hover:scale-150 transition duration-700"></div>
      </div>

      {/* Card 2 */}
      <div className="group relative overflow-hidden rounded-3xl bg-white text-black p-8 transition-all duration-500 hover:-translate-y-3">

        <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>

        <div className="w-12 h-12 rounded-2xl bg-gray-300 flex items-center justify-center text-3xl">
          👨‍💼
        </div>

        <h3 className="mt-7 text-xl font-semibold">
          Company CEO
        </h3>

        <p className="mt-4 text-2xl font-medium text-red-500">
          Sanjeev Arora
        </p>

        <p className="mt-3 text-gray-400">
          Leading since 1974
        </p>

        <div className="absolute -right-10 -bottom-10 w-36 h-36 rounded-full bg-red-600/10 group-hover:scale-150 transition duration-700"></div>
      </div>

      {/* Card 3 */}
      <div className="group relative overflow-hidden rounded-3xl bg-white text-black p-8 transition-all duration-500 hover:-translate-y-3 ">

        <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>

        <div className="w-12 h-12 rounded-2xl bg-gray-300 flex items-center justify-center text-3xl">
          📍
        </div>

        <h3 className="mt-7 text-xl font-semibold">
          Registered Address
        </h3>

        <p className="mt-4 text-2xl font-medium text-red-500">
          Deoria-274001
        </p>

        <p className="mt-3 text-gray-400">
          Uttar Pradesh, India
        </p>

        <div className="absolute -right-10 -bottom-10 w-36 h-36 rounded-full bg-red-600/10 group-hover:scale-150 transition duration-700"></div>
      </div>

      {/* Card 4 */}
      <div className="group relative overflow-hidden rounded-3xl bg-white text-black p-8 transition-all duration-500 hover:-translate-y-3 ">

        <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>

        <div className="w-12 h-12 rounded-2xl bg-gray-300 flex items-center justify-center text-3xl">
          📊
        </div>

        <h3 className="mt-7 text-xl font-semibold">
          Annual Turnover
        </h3>

        <p className="mt-4 text-2xl font-medium text-red-500">
          ₹1.5 - 5 Cr
        </p>

        <p className="mt-3 text-gray-400">
          GST Reg: 01-07-2017
        </p>

        <div className="absolute -right-10 -bottom-10 w-36 h-36 rounded-full bg-red-600/10 group-hover:scale-150 transition duration-700"></div>
      </div>

    </div>

  </div>
</div>

      {/* ================= STATUTORY PROFILE ================= */}
      {/* <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-5xl font-bold text-center  mb-12">Statutory Profile</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProfileCard 
              label="Import Export Code (IEC)"
              value="AADFC8544L"
              icon="📄"
            />
            <ProfileCard 
              label="TAN No."
              value="ALDC0*****"
              icon="🔢"
            />
            <ProfileCard 
              label="Banker"
              value="ICICI Bank"
              icon="🏦"
            />
            <ProfileCard 
              label="GST No."
              value="09AADFC8544L1Z1"
              icon="📋"
            />
          </div>
        </div>
      </div> */}
     <div className="bg-white py-12">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      {/* <span className="inline-block px-4 py-2 rounded-full bg-red-50 text-red-600 font-semibold text-sm uppercase tracking-wider border border-red-100">
        Company Registration
      </span> */}

      <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
        Statutory Profile
      </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-5 rounded-full"></div>


      <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-lg">
        Our statutory registrations and banking details reflecting compliance,
        transparency and business credibility.
      </p>
    </div>

    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">

      {/* Row 1 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 border-b border-gray-200">

        <div className="p-6 lg:border-r border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 text-xl">
              📄
            </div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Import Export Code
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 break-all">
            AADFC8544L
          </h3>
        </div>

        <div className="p-6 lg:border-r border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 text-xl">
              🔢
            </div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              TAN Number
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900">
            ALDC0*****
          </h3>
        </div>

        <div className="p-6 lg:border-r border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 text-xl">
              🏦
            </div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Banking Partner
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900">
            ICICI Bank
          </h3>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 text-xl">
              📋
            </div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              GST Number
            </p>
          </div>

          <h3 className="text-lg font-bold text-gray-900 break-all">
            09AADFC8544L1Z1
          </h3>
        </div>

      </div>

    </div>

  </div>
</div>

      {/* ================= COMPANY GALLERY - LIKE REFERENCE IMAGE ================= */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-5xl font-bold text-center  mb-4">Company Gallery</h2>
                <div className="w-24 h-1 bg-red-600 mx-auto mt-3 rounded-full"></div>

          <p className="text-center text-gray-600 mb-8 text-lg mt-2">A glimpse into our facilities and operations</p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full border transition text-sm font-medium ${
                  activeCategory === category
                    ? "bg-red-600 text-white border-red-700"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-red-600 hover:text-white hover:border-red-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-40 transition flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 text-sm font-medium px-3 py-1 bg-red-600 rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-8">
            <button className="bg-[#1b3163] text-white px-8 py-3 rounded-lg hover:bg-[#2a4585] transition font-semibold">
              View Full Gallery
            </button>
          </div> */}
        </div>
      </div>

      {/* ================= PACKAGING, PAYMENT & SHIPMENT ================= */}
     <div className="py-12 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      {/* <span className="inline-flex items-center rounded-full bg-red-100 px-5 py-2 text-red-600 font-semibold tracking-widest uppercase text-sm">
        Business Information
      </span> */}

      <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
        Packaging, Payment & Shipment
      </h2>

      <div className="w-24 h-1 bg-red-600 mx-auto mt-5 rounded-full"></div>

      <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
        We provide flexible payment options, secure logistics and dedicated
        customer support for a seamless purchasing experience.
      </p>
    </div>

    <div className="relative grid lg:grid-cols-3 gap-12">

      {/* Connector Line */}
      <div className="hidden lg:block absolute top-10 left-1/2 -translate-x-1/2 w-[75%] h-1 bg-red-600"></div>

      {/* Payment */}
      <div className="relative flex flex-col items-center text-center">

        <div className="relative z-10 w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-5xl border-4 border-gray-400 transition duration-500 hover:scale-110">
          💳
        </div>

        <div className="mt-8 bg-white rounded-3xl shadow-xl p-8 w-full border border-gray-200 hover:border-red-500 transition">

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Payment Modes
          </h3>

          <div className="space-y-4">

            {["Cash","Cheque","Credit Card"].map((item,index)=>(
              <div
                key={index}
                className="flex items-center justify-between rounded-xl bg-gray-100 px-5 py-3  transition"
              >
                <span className="font-medium text-gray-700">{item}</span>

                <div className="w-3 h-3 rounded-full bg-red-600"></div>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Shipment */}

      <div className="relative flex flex-col items-center text-center">

        <div className="relative z-10 w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-5xl border-4 border-gray-400 transition duration-500 hover:scale-110">
          🚚
        </div>

        <div className="mt-8 bg-white rounded-3xl shadow-xl p-8 w-full border border-gray-200 hover:border-red-500 transition">

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Shipment Mode
          </h3>

          <div className="rounded-xl bg-gray-100 px-5 py-4 flex justify-between items-center  transition">

            <span className="font-medium text-gray-700">
              By Road Transport
            </span>

            <div className="w-3 h-3 rounded-full bg-red-600"></div>

          </div>

        </div>

      </div>

      {/* Contact */}

      <div className="relative flex flex-col items-center text-center">

        <div className="relative z-10 w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-5xl  border-4 border-gray-400 transition duration-500 hover:scale-110">
          📞
        </div>

        <div className="mt-8 bg-white rounded-3xl shadow-xl p-8 w-full text-black relative overflow-hidden border border-gray-200 hover:border-red-600 ">

          {/* <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-red-600/10 blur-2xl"></div> */}

          <h3 className="text-2xl font-bold mb-5 relative z-10">
            Need Assistance?
          </h3>

          <p className="text-gray-600 leading-7 mb-8 relative z-10">
            Our team is available to discuss your packaging requirements,
            payment options and shipment process.
          </p>

          <Link href="/contact-us">
            <button className="relative z-10 w-full rounded-xl bg-gray-100 py-4 font-semibold text-lg transition duration-300 hover:text-red-600 hover:text-black">
              Contact Our Team →
            </button>
          </Link>

        </div>

      </div>

    </div>

  </div>
</div>
      {/* ================= WHY PICK US ================= */}
   <div className="py-12 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      {/* <span className="inline-block px-4 py-2 rounded-full bg-red-50 text-red-600 font-semibold text-sm uppercase tracking-wider border border-red-100">
        Why Clients Trust Us
      </span> */}

      <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
        Why Choose Us
      </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-3 rounded-full"></div>


      <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-lg">
        We are committed to delivering quality products, dependable service,
        and long-term business relationships through consistent performance.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 border border-gray-200 rounded-2xl overflow-hidden bg-white">

      {[
        {
          number: "01",
          title: "Competitive Prices",
          desc: "Industry-leading pricing while maintaining high manufacturing standards."
        },
        {
          number: "02",
          title: "High Quality",
          desc: "Every product is manufactured under strict quality control procedures."
        },
        {
          number: "03",
          title: "Timely Delivery",
          desc: "Efficient production and logistics ensure deliveries on schedule."
        },
        {
          number: "04",
          title: "Wide Network",
          desc: "Serving customers across multiple industries with reliable distribution."
        }
      ].map((item, index) => (

        <div
          key={index}
          className={`relative p-8 transition-all duration-300 hover:bg-red-50 group
          ${index !== 3 ? "lg:border-r border-gray-200" : ""}
          ${index < 2 ? "md:border-b lg:border-b-0" : ""}`}
        >

          <div className="text-5xl font-extrabold text-gray-100 group-hover:text-red-100 transition">
            {item.number}
          </div>

          <div className="w-12 h-1 bg-red-600 rounded-full mt-3 mb-6"></div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {item.title}
          </h3>

          <p className="text-gray-600 leading-7">
            {item.desc}
          </p>

        </div>

      ))}

    </div>

  </div>
</div>

      {/* ================= LIGHTBOX MODAL ================= */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" 
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
            <button 
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-opacity-70 transition"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black bg-opacity-50 py-2 px-4 mx-4 rounded">
              {selectedImage.alt} - {selectedImage.category}
            </div>
          </div>
        </div>
      )}
    </section>
    <Footer/>
    </>
    
  );
}

// ================ COMPONENTS ================

function FactCard({ icon, title, value, subtext }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border-b-4 border-[#1b3163]">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-sm text-gray-500 mb-1">{title}</h3>
      <p className="text-xl font-bold text-[#1b3163] mb-1">{value}</p>
      {subtext && <p className="text-xs text-gray-500">{subtext}</p>}
    </div>
  );
}

function ProfileCard({ label, value, icon }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border-l-4 border-[#1b3163]">
      <div className="flex items-start gap-3">
        <span className="text-2xl">{icon}</span>
        <div>
          <p className="text-xs text-gray-500 mb-1">{label}</p>
          <p className="text-lg font-bold text-[#1b3163]">{value}</p>
        </div>
      </div>
    </div>
  );
}