"use client";

import { useState } from "react";
import { ShoppingCart, Minus, Plus, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function AddToCartActions({ product }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  function handleAdd() {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="flex items-center gap-4 flex-wrap">
      {/* Quantity */}
      <div className="flex items-center gap-1 bg-green-50 rounded-full border border-green-200">
        <button
          onClick={() => setQty(Math.max(1, qty - 1))}
          className="w-10 h-10 flex items-center justify-center text-forest-600 hover:text-forest-800 hover:bg-green-100 rounded-full transition-colors"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-8 text-center font-semibold text-forest-800">
          {qty}
        </span>
        <button
          onClick={() => setQty(qty + 1)}
          className="w-10 h-10 flex items-center justify-center text-forest-600 hover:text-forest-800 hover:bg-green-100 rounded-full transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAdd}
        className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-8 py-3.5 font-semibold rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${
          added
            ? "bg-green-500 text-white shadow-green-500/25"
            : "bg-forest-600 hover:bg-forest-700 text-white shadow-forest-900/20"
        }`}
      >
        {added ? (
          <>
            <Check className="w-5 h-5" />
            Added to Cart!
          </>
        ) : (
          <>
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </>
        )}
      </button>
    </div>
  );
}
