"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Phone,
  Menu,
  X,
  Quote,
  Loader2,
} from "lucide-react";
import axios from "axios";
import { usePathname } from "next/navigation";
import EnquirySideModal from "./EnquiryModals";
import QueryEnquiryModel from "./EnquiryModal";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isQueryOpen, setIsQueryOpen] = useState(false);


  const dropdownRef = useRef(null);

  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, prodRes] = await Promise.all([
          axios.get(`${API_BASE_URL}/api/categories/admin/all`),
          axios.get(`${API_BASE_URL}/api/products`),
        ]);

        setCategories((catRes.data.data || []).reverse());
        setProducts(prodRes.data.data || []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /* ================= SCROLL ================= */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= OUTSIDE CLICK ================= */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ================= BODY SCROLL LOCK ================= */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const navStyle = isHome
    ? scrolled
      ? "bg-white shadow-md sticky top-0"
      : "absolute top-0 bg-black text-white"
    : "bg-white shadow-md sticky top-0";

  const linkStyle = (path) =>
    `transition hover:text-red-600 ${pathname === path ? "text-red-600 font-semibold" : ""
    }`;

  return (
  <>
    <header className={`w-full z-50 ${navStyle} transition-all duration-300`}>
      <nav>
        {/* ✅ FLEX instead of GRID */}
        <div className="max-w-7xl mx-auto px-4 h-[70px] lg:h-[88px] flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center">
            <Link href="/">
              <img src="/logo.png" className="h-10 lg:h-12 w-auto" />
            </Link>
          </div>

          {/* CENTER MENU */}
          <ul className="hidden lg:flex justify-center items-center gap-6 xl:gap-8 font-medium flex-wrap">

            <li>
              <Link href="/" className={linkStyle("/")}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/services" className={linkStyle("/services")}>
                Services
              </Link>
            </li>

            <li>
              <Link href="/industries" className={linkStyle("/industries")}>
                Industries
              </Link>
            </li>

            <li>
              <Link href="/about-us" className={linkStyle("/about-us")}>
                Company Profile
              </Link>
            </li>

            <li>
              <Link href="/contact-us" className={linkStyle("/contact-us")}>
                Contact Us
              </Link>
            </li>
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex justify-end items-center gap-3">

            {/* GET QUOTE */}
            <button
              onClick={() => setIsQueryOpen(true)}
              className="hidden lg:flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-md font-semibold hover:bg-red-700"
            >
              Get Quote
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>
    </header>

    {/* ================= MOBILE DRAWER ================= */}
    <div
      className={`fixed inset-0 z-[999] ${
        isMenuOpen ? "visible" : "invisible"
      }`}
    >
      {/* BACKDROP */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className="absolute inset-0 bg-black/50"
      />

      {/* DRAWER */}
      <div
        className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="font-bold text-lg">Menu</h2>
          <X
            onClick={() => setIsMenuOpen(false)}
            className="cursor-pointer"
          />
        </div>

        {/* MENU ITEMS */}
        <div className="p-6 flex flex-col gap-5 text-lg font-medium">

          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="border-b pb-2"
          >
            Home
          </Link>

          <Link
            href="/services"
            onClick={() => setIsMenuOpen(false)}
            className="border-b pb-2"
          >
            Services
          </Link>

          <Link
            href="/industries"
            onClick={() => setIsMenuOpen(false)}
            className="border-b pb-2"
          >
            Industries
          </Link>

          <Link
            href="/about-us"
            onClick={() => setIsMenuOpen(false)}
            className="border-b pb-2"
          >
            Company Profile
          </Link>

          <Link
            href="/contact-us"
            onClick={() => setIsMenuOpen(false)}
            className="border-b pb-2"
          >
            Contact Us
          </Link>

          {/* CTA */}
          <button
            onClick={() => {
              setIsMenuOpen(false);
              setIsQueryOpen(true);
            }}
            className="w-full bg-red-600 text-white py-3 rounded-lg mt-4"
          >
            Get Quote
          </button>
        </div>
      </div>
    </div>

    {/* ENQUIRY MODAL */}
    <EnquirySideModal
      isOpen={isEnquiryOpen}
      onClose={() => setIsEnquiryOpen(false)}
    />


     {/* ENQUIRY MODAL */}
    <QueryEnquiryModel
      isOpen={isQueryOpen}
      onClose={() => setIsQueryOpen(false)}
    />
  </>
);
}