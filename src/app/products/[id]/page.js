import Link from "next/link";
import {
  Star,
  ShoppingCart,
  ArrowLeft,
  Check,
  Leaf,
  Package,
  ChefHat,
} from "lucide-react";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import AddToCartActions from "@/components/AddToCartActions";

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.slug || String(p.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.slug === id || String(p.id) === id);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} – Vriksha Nature Nutrition`,
    description: product.description,
  };
}

function NutritionRow({ label, value }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-green-100 last:border-0">
      <span className="text-sm text-forest-600">{label}</span>
      <span className="text-sm font-semibold text-forest-800">{value}</span>
    </div>
  );
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.slug === id || String(p.id) === id);

  if (!product) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center bg-cream py-32">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="w-10 h-10 text-forest-500" />
            </div>
            <h1
              className="text-3xl font-bold text-forest-800 mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Product Not Found
            </h1>
            <p className="text-forest-500 mb-8">
              The product you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-forest-600 text-white rounded-full font-semibold hover:bg-forest-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-white border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-forest-400">
            <Link href="/" className="hover:text-forest-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/#products" className="hover:text-forest-600 transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-forest-700 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Header */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative rounded-3xl overflow-hidden h-[420px] bg-green-50 shadow-lg">
                <img
                  src={product.gallery?.[0] || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1.5 bg-forest-600 text-white text-sm font-semibold rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              {/* Thumbnails */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="grid grid-cols-3 gap-3">
                  {product.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className={`rounded-2xl overflow-hidden h-24 cursor-pointer border-2 transition-all ${
                        idx === 0
                          ? "border-forest-500 shadow-md"
                          : "border-transparent hover:border-forest-300"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} view ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-green-100 text-forest-600 text-xs font-semibold rounded-full uppercase tracking-wider">
                  {product.category}
                </span>
                <span className="px-3 py-1 bg-earth-100 text-earth-700 text-xs font-semibold rounded-full">
                  {product.weight}
                </span>
              </div>

              <h1
                className="text-3xl sm:text-4xl font-bold text-forest-800 leading-tight mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {product.name}
              </h1>
              <p className="text-forest-500 italic mb-4">{product.tagline}</p>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-amber-400 text-amber-400"
                          : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-forest-700">
                  {product.rating}
                </span>
                <span className="text-sm text-forest-400">
                  ({product.reviews} reviews)
                </span>
              </div>

              <p className="text-forest-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span
                  className="text-4xl font-bold text-forest-700"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-forest-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="px-2.5 py-1 bg-green-100 text-forest-600 text-sm font-semibold rounded-full">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                )}
              </div>

              {/* Add to cart */}
              <AddToCartActions product={product} />

              {/* In stock */}
              {product.inStock && (
                <div className="mt-4 flex items-center gap-2 text-green-600 text-sm font-medium">
                  <Check className="w-4 h-4" />
                  In Stock — Ready to ship
                </div>
              )}

              {/* Badges */}
              <div className="mt-6 pt-6 border-t border-green-100 flex flex-wrap gap-3">
                {["100% Organic", "Lab Tested", "No Chemicals", "Traditional Process"].map(
                  (b) => (
                    <div
                      key={b}
                      className="flex items-center gap-1.5 text-xs text-forest-600 font-medium"
                    >
                      <Leaf className="w-3.5 h-3.5 text-forest-500" />
                      {b}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-green-100">
                <h2
                  className="text-2xl font-bold text-forest-800 mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  About This Product
                </h2>
                <p className="text-forest-600 leading-relaxed">
                  {product.longDescription}
                </p>
              </div>

              {/* Key Benefits */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-green-100">
                <h2
                  className="text-2xl font-bold text-forest-800 mb-6"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Key Benefits
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 bg-green-50 rounded-2xl"
                    >
                      <div className="w-6 h-6 bg-forest-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-forest-600" />
                      </div>
                      <span className="text-sm text-forest-700 leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ingredients */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-green-100">
                <h2
                  className="text-2xl font-bold text-forest-800 mb-6"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Natural Ingredients
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {product.ingredients.map((ingredient, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1.5 px-4 py-2 bg-earth-100 text-earth-700 rounded-full text-sm font-medium"
                    >
                      <Leaf className="w-3.5 h-3.5" />
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              {/* How to Use */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-green-100">
                <h2
                  className="text-2xl font-bold text-forest-800 mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  How to Use
                </h2>
                <p className="text-forest-600 leading-relaxed">
                  {product.howToUse}
                </p>
              </div>

              {/* Recipe Ideas */}
              {product.recipes && (
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-green-100">
                  <h2
                    className="text-2xl font-bold text-forest-800 mb-6"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Recipe Ideas
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {product.recipes.map((recipe, i) => (
                      <div
                        key={i}
                        className="group p-4 bg-green-50 rounded-2xl border border-green-100 hover:border-forest-300 hover:shadow-md transition-all cursor-pointer"
                      >
                        <div className="w-9 h-9 bg-forest-100 rounded-xl flex items-center justify-center mb-3">
                          <ChefHat className="w-4.5 h-4.5 text-forest-600" />
                        </div>
                        <h4 className="font-semibold text-forest-800 text-sm mb-1">
                          {recipe.name}
                        </h4>
                        <div className="flex items-center gap-3 text-xs text-forest-400">
                          <span>{recipe.time}</span>
                          <span>·</span>
                          <span>{recipe.difficulty}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Why Choose */}
              <div className="bg-forest-700 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-forest-600/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="relative z-10">
                  <h2
                    className="text-2xl font-bold mb-6"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Why Choose This Product
                  </h2>
                  <ul className="space-y-3">
                    {product.whyChoose.map((reason, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-400/30 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-green-300" />
                        </div>
                        <span className="text-white/80 text-sm">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column — Nutrition */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-7 shadow-sm border border-green-100 sticky top-24">
                <h3
                  className="text-xl font-bold text-forest-800 mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Nutrition Facts
                </h3>
                <p className="text-xs text-forest-400 mb-5">
                  Per serving: {product.nutrition.servingSize}
                </p>
                <div>
                  <NutritionRow label="Calories" value={product.nutrition.calories} />
                  <NutritionRow label="Protein" value={product.nutrition.protein} />
                  <NutritionRow label="Carbohydrates" value={product.nutrition.carbohydrates} />
                  <NutritionRow label="Dietary Fiber" value={product.nutrition.fiber} />
                  <NutritionRow label="Total Fat" value={product.nutrition.fat} />
                  <NutritionRow label="Vitamins" value={product.nutrition.vitamins} />
                  <NutritionRow label="Key Minerals" value={product.nutrition.minerals} />
                </div>
                <p className="text-xs text-forest-400 mt-5 leading-relaxed">
                  * Nutritional values are per serving and may vary slightly by batch. Based on a 2000 calorie diet.
                </p>

                {/* CTA */}
                <button className="mt-6 w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-forest-600 hover:bg-forest-700 text-white font-semibold rounded-full shadow-lg transition-all hover:-translate-y-0.5">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart — ${product.price.toFixed(2)}
                </button>
                <Link
                  href="/"
                  className="mt-3 w-full flex items-center justify-center gap-2 text-forest-500 hover:text-forest-700 text-sm font-medium transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-forest-800 mb-10"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            You May Also Like
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
