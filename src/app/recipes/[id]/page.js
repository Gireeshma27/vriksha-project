import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Users,
  ChefHat,
  Leaf,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { recipes } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return recipes.map((r) => ({ id: String(r.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const recipe = recipes.find((r) => String(r.id) === id);
  if (!recipe) return { title: "Recipe Not Found" };
  return {
    title: `${recipe.name} – Vriksha Recipe`,
    description: recipe.description,
  };
}

const difficultyColor = {
  Easy: "text-green-700 bg-green-100",
  Medium: "text-amber-700 bg-amber-100",
  Hard: "text-red-700 bg-red-100",
};

const tagColor = {
  Breakfast: "bg-amber-100 text-amber-700",
  Drink: "bg-sky-100 text-sky-700",
  Lunch: "bg-forest-100 text-forest-700",
  Dinner: "bg-violet-100 text-violet-700",
};

export default async function RecipeDetailPage({ params }) {
  const { id } = await params;
  const recipe = recipes.find((r) => String(r.id) === id);

  if (!recipe) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center bg-cream py-32">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-forest-500" />
            </div>
            <h1
              className="text-3xl font-bold text-forest-800 mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Recipe Not Found
            </h1>
            <p className="text-forest-500 mb-8">
              The recipe you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href="/recipes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-forest-600 text-white rounded-full font-semibold hover:bg-forest-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Recipes
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const otherRecipes = recipes.filter((r) => r.id !== recipe.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-white border-b border-green-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-forest-400">
            <Link href="/" className="hover:text-forest-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/recipes"
              className="hover:text-forest-600 transition-colors"
            >
              Recipes
            </Link>
            <span>/</span>
            <span className="text-forest-700 font-medium">{recipe.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Image */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden h-[420px] shadow-lg">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 to-transparent" />
              {/* Pills */}
              <div className="absolute top-5 left-5 flex gap-2">
                <span
                  className={`px-3 py-1 text-xs font-bold rounded-full backdrop-blur-sm ${
                    tagColor[recipe.tag] ?? "bg-white/20 text-white"
                  }`}
                >
                  {recipe.tag}
                </span>
                <span
                  className={`px-3 py-1 text-xs font-bold rounded-full backdrop-blur-sm ${
                    difficultyColor[recipe.difficulty] ?? difficultyColor.Easy
                  }`}
                >
                  {recipe.difficulty}
                </span>
              </div>
            </div>

            {/* Meta + Ingredients */}
            <div className="flex flex-col gap-6">
              {/* Title block */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-earth-100 text-earth-700 text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
                  <Leaf className="w-3 h-3" />
                  Recipe
                </div>
                <h1
                  className="text-3xl sm:text-4xl font-bold text-forest-800 leading-tight mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {recipe.name}
                </h1>
                <p className="text-forest-500 leading-relaxed text-sm">
                  {recipe.description}
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-cream rounded-2xl p-4 text-center border border-green-100">
                  <Clock className="w-5 h-5 text-forest-500 mx-auto mb-1" />
                  <p className="text-xs text-forest-400 mb-0.5">Cook Time</p>
                  <p className="text-sm font-bold text-forest-700">{recipe.time}</p>
                </div>
                <div className="bg-cream rounded-2xl p-4 text-center border border-green-100">
                  <Users className="w-5 h-5 text-forest-500 mx-auto mb-1" />
                  <p className="text-xs text-forest-400 mb-0.5">Servings</p>
                  <p className="text-sm font-bold text-forest-700">{recipe.servings}</p>
                </div>
                <div className="bg-cream rounded-2xl p-4 text-center border border-green-100">
                  <ChefHat className="w-5 h-5 text-forest-500 mx-auto mb-1" />
                  <p className="text-xs text-forest-400 mb-0.5">Difficulty</p>
                  <p className="text-sm font-bold text-forest-700">{recipe.difficulty}</p>
                </div>
              </div>

              {/* Ingredients */}
              {recipe.ingredients && (
                <div className="bg-cream rounded-2xl p-5 border border-green-100">
                  <h2
                    className="text-lg font-bold text-forest-800 mb-4 flex items-center gap-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    <Leaf className="w-4 h-4 text-forest-500" />
                    Ingredients
                  </h2>
                  <ul className="space-y-2">
                    {recipe.ingredients.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-forest-600">
                        <CheckCircle2 className="w-4 h-4 text-forest-400 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Steps */}
      {recipe.steps && (
        <section className="py-14 bg-cream">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-bold text-forest-800 mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              How to Prepare
            </h2>
            <ol className="space-y-5">
              {recipe.steps.map((step, i) => (
                <li
                  key={i}
                  className="flex gap-5 bg-white rounded-2xl p-6 shadow-sm border border-green-100/60"
                >
                  <span className="shrink-0 w-9 h-9 rounded-full bg-forest-700 text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <p className="text-forest-600 leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* More Recipes */}
      {otherRecipes.length > 0 && (
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2
                className="text-2xl font-bold text-forest-800"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                More Recipes
              </h2>
              <Link
                href="/recipes"
                className="text-sm font-semibold text-earth-600 hover:text-earth-800 transition-colors"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {otherRecipes.map((r) => (
                <Link
                  key={r.id}
                  href={`/recipes/${r.id}`}
                  className="group block bg-cream rounded-2xl overflow-hidden border border-green-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <span
                      className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded-full mb-2 ${
                        tagColor[r.tag] ?? "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {r.tag}
                    </span>
                    <h3
                      className="font-bold text-forest-800 text-sm leading-snug group-hover:text-earth-600 transition-colors"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {r.name}
                    </h3>
                    <p className="text-xs text-forest-400 mt-1 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {r.time}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back button */}
      <div className="bg-cream py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/recipes"
            className="inline-flex items-center gap-2 text-forest-600 font-semibold hover:text-forest-800 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            Back to Recipes
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
