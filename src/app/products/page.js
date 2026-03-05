import Link from "next/link";
import { Leaf, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata = {
  title: "All Products – Vriksha Nature Nutrition",
  description: "Browse our full range of organic, natural nutrition products made from rice and traditional grains.",
};

const categories = ["All", "Rice Mix", "Health Powder", "Grain Blend", "Energy Mix", "Porridge Mix"];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero */}
      <div className="relative pt-36 pb-16 bg-forest-700 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/images/about-organic-farm.png"
            alt="Organic farm background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Products</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 text-green-300 text-sm font-semibold rounded-full mb-4 border border-white/20">
            <Leaf className="w-3.5 h-3.5" />
            Our Full Range
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            All Products
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Discover our complete range of organic, traditionally prepared nutrition products.
          </p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="bg-white border-b border-green-100 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-forest-500 text-sm font-medium">
              <Filter className="w-4 h-4" />
              Filter by:
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  cat === "All"
                    ? "bg-forest-600 text-white"
                    : "bg-green-50 text-forest-600 hover:bg-green-100"
                }`}
              >
                {cat}
              </button>
            ))}
            <div className="ml-auto text-sm text-forest-400">
              {products.length} products
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
