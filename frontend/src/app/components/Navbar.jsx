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
    `transition hover:text-red-600 ${
      pathname === path ? "text-red-600 font-semibold" : ""
    }`;

  return (
    <>
      <header className={`w-full z-50 ${navStyle} `}>
        <nav>
          <div className="max-w-7xl mx-auto px-4 h-[88px] grid grid-cols-[1fr_2fr_1fr] items-center ">

            {/* LOGO */}
            <div className="flex items-center">
              <Link href="/">
                <img src="/logo.png" className="h-12 w-auto" />
              </Link>
            </div>

            {/* CENTER MENU */}
            <ul className="hidden lg:flex justify-center items-center gap-8 font-medium">

              <li>
                <Link href="/" className={linkStyle("/")}>
                  Home
                </Link>
              </li>

              

              {/* PRODUCTS */}
              <li className="relative" ref={dropdownRef}>
                {/* <button
                  onClick={() => setOpenDropdown(!openDropdown)}
                  className="flex items-center gap-1 hover:text-red-600"
                >
                  Our Products
                   <ChevronDown 
                    size={14}
                    className={`transition ${
                      openDropdown ? "rotate-180" : ""
                    }`} 
                  /> 
                </button> */}

                {/* {openDropdown && (
                  <div className="absolute top-full mt-4 w-[340px] bg-white rounded-md shadow-xl border z-50">

                    <div className="p-4 space-y-1">
                      {loading ? (
                        <div className="flex justify-center py-4">
                          <Loader2 className="animate-spin" />
                        </div>
                      ) : (
                        categories.slice(0, 6).map((cat) => (
                          <Link
                            key={cat._id}
                            href={`/category/${cat.slug}`}
                            onClick={() => setOpenDropdown(false)}
                            className="block px-4 py-2 rounded hover:bg-red-50"
                          >
                            {cat.name}
                          </Link>
                        ))
                      )}
                    </div>

                    <div className="bg-gray-50 text-center py-3">
                      <Link
                        href="/agricultural-herbicides-insecticide"
                        className="text-sm font-semibold text-green-700"
                      >
                        View All →
                      </Link>
                    </div>
                  </div>
                )} */}
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
                onClick={() => setIsEnquiryOpen(true)}
                className="hidden lg:flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-md font-semibold hover:bg-red-700"
              >
              
                Get Quote
              </button>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden"
              >
                <Menu />
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
        <div
          onClick={() => setIsMenuOpen(false)}
          className="absolute inset-0 bg-black/50"
        />

        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white transition ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between p-5 border-b">
            <h2 className="font-bold">Menu</h2>
            <X onClick={() => setIsMenuOpen(false)} />
          </div>

          <div className="p-6 space-y-4">

            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about-us" onClick={() => setIsMenuOpen(false)}>Company Profile</Link>
            <Link href="/contact-us" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>

            <div className="border-t pt-4">
              <p className="font-semibold mb-2">Our Products</p>

              {categories.map((cat) => (
                <Link
                  key={cat._id}
                  href={`/category/${cat.slug}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-1"
                >
                  {cat.name}
                </Link>
              ))}
            </div>

            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsEnquiryOpen(true);
              }}
              className="w-full bg-green-700 text-white py-3 rounded-lg"
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
        products={products}
      />
    </>
  );
}