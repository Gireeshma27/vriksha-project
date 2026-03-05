"use client";

import { Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { products } from "../data/products";
import { AnimateOnScroll, StaggerOnScroll, StaggerItem } from "./AnimationUtils";

export default function FeaturedProducts() {
  return (
    <section id="products" className="pt-12 pb-24 bg-cream overflow-hidden relative">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #166534 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimateOnScroll className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-forest-600 text-sm font-semibold rounded-full mb-4 uppercase tracking-wider">
              <Leaf className="w-3.5 h-3.5" />
              Our Products
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-forest-800"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Featured
              <span className="text-forest-500"> Products</span>
            </h2>
            <p className="text-forest-500 mt-3 max-w-lg leading-relaxed">
              From ancient red rice to traditional grain blends — every product is organically sourced and minimally processed.
            </p>
          </div>
          <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-forest-600 font-semibold hover:text-forest-800 transition-colors shrink-0 group"
            >
              View All Products
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </AnimateOnScroll>

        {/* Product Grid */}
        <StaggerOnScroll className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map((product) => (
            <StaggerItem key={product.id}>
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  );
}
