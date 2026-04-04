import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const services = [
  { title: "Dismantle", color: "from-blue-50 to-blue-100", image: "/services/service/s1.png" },
  { title: "Punch Mark", color: "from-purple-50 to-purple-100", image: "/services/service/s2.png" },
  { title: "De-grease", color: "from-green-50 to-green-100", image: "/services/service/s3.png" },
  { title: "Sandblast", color: "from-cyan-50 to-cyan-100", image: "/services/service/s4.png" },
  { title: "Non-visual Cracks", color: "from-yellow-50 to-yellow-100", image: "/services/service/s2.png" },
  { title: "Replace", color: "from-orange-50 to-orange-100", image: "/services/service/s1.png" },
  { title: "Inspection Report", color: "from-pink-50 to-pink-100", image: "/services/service/s3.png" },
  { title: "Machine, griding and Lapping", color: "from-indigo-50 to-indigo-100", image: "/services/service/s4.png" },
  { title: "Flatness Check ", color: "from-red-50 to-red-100", image: "/services/service/s4.png" },
  { title: "Assemble", color: "from-teal-50 to-teal-100", image: "/services/service/s3.png" },
  { title: "Pneumatic Pressure Test", color: "from-sky-50 to-sky-100", image: "/services/service/s2.png" },
  { title: "Pack and Deliver", color: "from-rose-50 to-rose-100", image: "/services/service/s1.png" },
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
            <video
              src="/services/video.mp4"
              alt="Eric AI CRA"

        autoPlay
        muted
        loop
        playsInline
              className="w-full h-40 sm:h-90 object-cover"
            />
          </div>
        </section>
      <div className="bg-gray-50 text-gray-800">
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

              <button className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-gray-800 transition">
                Get Started
              </button>
            </div>

            <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/services/image3.png"
                alt="Engineering"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* PRODUCT SHOWCASE */}
        <section className="max-w-7xl mx-auto px-6 py-12">
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
        </section>

        {/* SERVICES GRID */}
    <section className="py-12 bg-gray-50"> 
  <div className="max-w-7xl mx-auto px-6">
    
    <h2 className="text-3xl md:text-5xl font-bold text-center mb-14">
      Our Capabilities
    </h2>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className={`rounded-2xl overflow-hidden bg-gradient-to-br ${service.color} p-[1px]`}
        >
          <div className="bg-white rounded-2xl h-full shadow-sm hover:shadow-2xl transition duration-300 group flex flex-col">

            {/* IMAGE (TOP HALF) */}
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-300"
              />
            </div>

            {/* CONTENT (BOTTOM HALF) */}
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-semibold text-lg text-gray-800 group-hover:text-black">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  High-quality engineering with precision and reliability.
                </p>
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* PROCESS / TIMELINE */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our Process
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
                    Precision-driven execution ensuring quality and reliability.
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
                    i % 2 === 0
                      ? "left-1/2"
                      : "right-1/2"
                  }`}
                ></div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>

        {/* TESTIMONIAL / QUOTE */}
        <section className="bg-blue-300 text-white py-16">
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
