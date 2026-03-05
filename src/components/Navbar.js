"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Menu, X, Leaf } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/recipes", label: "Recipes" },
  { href: "/about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/97 backdrop-blur-xl shadow-lg shadow-forest-900/8 border-b border-green-100/80"
          : "bg-white/92 backdrop-blur-xl border-b border-green-100/60 shadow-sm"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <motion.div
              className="relative w-10 h-10 bg-forest-600 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.08, backgroundColor: "#16a34a" }}
              transition={{ duration: 0.2 }}
            >
              <Leaf className="w-5 h-5 text-white" />
            </motion.div>
            <div>
              <span
                className={`text-2xl font-bold tracking-tight text-forest-700`}
                style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
              >
                Vriksha
              </span>
              <span className={`block text-[10px] uppercase tracking-[0.2em] -mt-0.5 text-forest-500`}>
                Nature Nutrition
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 group"
              >
                <span className={`text-sm font-medium text-forest-600 group-hover:text-forest-800 transition-colors duration-300`}>
                  {link.label}
                </span>
                <motion.span
                  className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full origin-left bg-forest-500`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />
              </Link>
            ))}
          </div>

          {/* Cart + CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Cart */}
            <Link href="#" className="relative group">
              <motion.div
                className={`p-2.5 rounded-full transition-colors duration-300 bg-green-50 hover:bg-green-100`}
                whileTap={{ scale: 0.93 }}
              >
                <ShoppingCart className={`w-5 h-5 text-forest-600`} />
              </motion.div>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* CTA Button â€” hidden on mobile */}
            <Link href="/products" className="hidden sm:block">
              <motion.span
                  className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 cursor-pointer bg-forest-600 text-white shadow-lg shadow-forest-700/25 hover:bg-forest-700`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.18 }}
              >
                Shop Now
              </motion.span>
            </Link>

            {/* Hamburger */}
            <motion.button
              className={`md:hidden p-2.5 rounded-full transition-colors duration-300 bg-green-50 hover:bg-green-100`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.93 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className={`w-5 h-5 text-forest-600`} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className={`w-5 h-5 text-forest-600`} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-white/98 backdrop-blur-xl border-t border-green-100 px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-forest-600 hover:text-forest-800 hover:bg-green-50 rounded-xl transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="pt-2 pb-1"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.25 }}
              >
                <Link
                  href="/products"
                  className="block text-center px-4 py-3 bg-forest-600 text-white rounded-xl font-semibold hover:bg-forest-700 transition-colors shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  Shop Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
