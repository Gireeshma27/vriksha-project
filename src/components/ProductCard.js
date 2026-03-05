"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ShoppingCart, ArrowRight, Leaf, Check } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { id, slug, name, price, originalPrice, description, image, rating, reviews, badge, category, weight } = product;
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : null;

  function handleAddToCart() {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <motion.div
      className="group bg-white rounded-3xl overflow-hidden shadow-lg shadow-forest-900/6 border border-green-100/50 flex flex-col"
      whileHover={{ y: -8, boxShadow: "0 25px 60px -12px rgba(15,45,30,0.18)" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-60 bg-gradient-to-br from-green-50 to-earth-50 flex-shrink-0">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        {/* Subtle top gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
        {/* Badges */}
        <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 z-10">
          {badge && (
            <span className="px-3 py-1 bg-forest-600/90 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-sm">
              {badge}
            </span>
          )}
          {discount && (
            <span className="px-3 py-1 bg-red-600/90 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-sm">
              -{discount}% OFF
            </span>
          )}
        </div>
        {/* Quick add hover overlay */}
        <motion.div
          className="absolute inset-0 bg-forest-900/55 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          <motion.button
            onClick={handleAddToCart}
            className="flex items-center gap-2 px-6 py-3 bg-white text-forest-700 rounded-full font-semibold text-sm shadow-xl"
            initial={{ y: 12, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCart className="w-4 h-4" />
            Quick Add
          </motion.button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Meta row */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-50 rounded-full">
            <Leaf className="w-3 h-3 text-forest-500" />
            <span className="text-[11px] text-forest-500 font-semibold uppercase tracking-wider">
              {category}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-xs font-bold text-forest-700">{rating}</span>
            <span className="text-xs text-forest-400">({reviews})</span>
          </div>
        </div>

        <h3
          className="text-lg font-bold text-forest-800 mb-2 leading-snug line-clamp-2 group-hover:text-forest-600 transition-colors duration-300"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {name}
        </h3>
        <p className="text-sm text-forest-500 leading-relaxed mb-5 line-clamp-2 flex-1">
          {description}
        </p>

        {/* Weight tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs text-forest-400 bg-earth-50 px-2.5 py-1 rounded-full border border-earth-100 font-medium">
            {weight}
          </span>
        </div>

        {/* Price & CTA */}
        <div className="pt-4 border-t border-green-100 space-y-3">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-forest-700" style={{ fontFamily: "var(--font-playfair)" }}>
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-sm text-forest-400 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              onClick={handleAddToCart}
              className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold shadow-md transition-all duration-300 ${
                added
                  ? "bg-green-500 text-white shadow-green-500/30"
                  : "bg-forest-600 text-white shadow-forest-700/30 hover:bg-forest-700"
              }`}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  Added!
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </>
              )}
            </motion.button>
            <Link href={`/products/${slug || id}`}>
              <motion.span
                className="w-10 h-10 flex items-center justify-center bg-green-50 hover:bg-green-100 text-forest-600 rounded-full cursor-pointer transition-colors"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                title="View Details"
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
