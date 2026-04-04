"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

/* ===================== FAQ DATA ===================== */
const faqs = [
  {
    id: 1,
    question: "What products does your company primarily manufacture?",
    answer:
      "We specialize in high-quality writing instruments such as pens, designed for durability, precision, and smooth writing experiences.",
  },
  {
    id: 2,
    question: "Where is Vinayak Writing Instruments company located?",
    answer:
      "Vinayak Writing Instruments is headquartered in India, supported by advanced manufacturing facilities and a strong nationwide distribution network.",
  },
  {
    id: 3,
    question: "How do you ensure product quality assurance?",
    answer:
      "Our products undergo stringent quality control checks at every stage, from sourcing raw materials to final inspection and packaging.",
  },
  {
    id: 4,
    question: "What kind of packaging do you use?",
    answer:
      "We use durable, eco-friendly, and customizable packaging solutions suitable for retail display as well as bulk supply requirements.",
  },
  {
    id: 5,
    question: "Who manages company operations?",
    answer:
      "Our operations are led by seasoned professionals with decades of experience in manufacturing, compliance, and quality management.",
  },
  {
    id: 6,
    question: "Which industries do your products serve?",
    answer:
      "Our products serve corporate gifting, education, promotional branding, and global retail markets.",
  },
  
];

/* ===================== MAIN SECTION ===================== */
export default function FAQSection() {
  // 1st FAQ open by default
  const [activeId, setActiveId] = useState(1);

  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 !== 0);

  // toggle logic
  const handleToggle = (id) => {
  setActiveId((prev) => (prev === id ? null : id));
};

 return (
  <section className="py-12">
    <div className="max-w-7xl mx-auto px-4">

      {/* Header */}
      <div className="max-w-3xl mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1b3163] mb-5">
          Frequently Asked Questions
        </h2>
        <p className="text-black text-base md:text-lg">
          Clear answers to common questions about our products,
          manufacturing standards, and services.
        </p>
      </div>

      {/* ✅ MOBILE: Single Column (Correct Order) */}
      <div className="flex flex-col gap-5 md:hidden">
        {[...leftFaqs, ...rightFaqs]
          .sort((a, b) => a.id - b.id)
          .map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isActive={activeId === faq.id}
              onClick={() => handleToggle(faq.id)}
            />
          ))}
      </div>

      {/* ✅ DESKTOP: Two Columns */}
      <div className="hidden md:flex gap-8">

        <div className="flex-1 flex flex-col gap-5">
          {leftFaqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isActive={activeId === faq.id}
              onClick={() => handleToggle(faq.id)}
            />
          ))}
        </div>

        <div className="flex-1 flex flex-col gap-5">
          {rightFaqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isActive={activeId === faq.id}
              onClick={() => handleToggle(faq.id)}
            />
          ))}
        </div>

      </div>
    </div>
  </section>
);
}

/* ===================== FAQ ITEM ===================== */
function FAQItem({ faq, isActive, onClick }) {
  return (
    <div
      className={`rounded-md border transition-all duration-300 ${
        isActive
          ? "border-gray-400 bg-white shadow-sm"
          : "border-gray-400 bg-white hover:border-gray-500"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 px-4 md:px-6 py-4 text-left"
      >
        {/* TEXT */}
        <span className="font-medium text-gray-900 text-sm md:text-lg leading-snug">
          {faq.id}. {faq.question}
        </span>

        {/* ✅ PERFECT CIRCLE ICON */}
        <span
          className={`flex items-center justify-center rounded-full border transition-all duration-300 
          w-8 h-8 min-w-[32px] aspect-square flex-shrink-0 ${
            isActive
              ? "border-gray-300 text-gray-500 rotate-45"
              : "border-gray-300 text-gray-500"
          }`}
        >
          <Plus size={18} />
        </span>
      </button>

      {/* ANSWER */}
    <div
  className={`overflow-hidden transition-all duration-300 ${
    isActive ? "max-h-[200px] opacity-100 mt-2" : "max-h-0 opacity-0"
  }`}
>
  <div className="px-4 md:px-6 pb-4 text-gray-600 text-sm md:text-base leading-relaxed">
    {faq.answer}
  </div>
</div>
    </div>
  );
}
