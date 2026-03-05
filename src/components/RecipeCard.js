"use client";

import { Clock, Users, ChefHat } from "lucide-react";
import { motion } from "framer-motion";

const difficultyColor = {
  Easy: "text-green-600 bg-green-100",
  Medium: "text-amber-600 bg-amber-100",
  Hard: "text-red-600 bg-red-100",
};

export default function RecipeCard({ recipe }) {
  const { name, description, image, time, servings, difficulty, tag } = recipe;

  return (
    <motion.div
      className="group bg-white rounded-3xl overflow-hidden shadow-md shadow-forest-900/5 border border-green-100/60 flex flex-col"
      whileHover={{ y: -6, boxShadow: "0 20px 50px -10px rgba(15,45,30,0.16)" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56 flex-shrink-0">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/65 via-forest-900/10 to-transparent" />
        {/* Tag */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-forest-700 text-xs font-semibold rounded-full">
          {tag}
        </span>
        {/* Difficulty */}
        <span
          className={`absolute top-4 right-4 px-2.5 py-1 text-xs font-semibold rounded-full backdrop-blur-sm ${
            difficultyColor[difficulty] || difficultyColor.Easy
          }`}
        >
          {difficulty}
        </span>
        {/* Recipe name overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3
            className="text-lg font-bold text-white leading-snug"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {name}
          </h3>
          {/* Hover CTA — slides up */}
          <div className="mt-1.5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span className="inline-flex items-center gap-1 text-green-300 text-xs font-semibold">
              View Recipe →
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-sm text-forest-500 leading-relaxed mb-4 line-clamp-2 flex-1">
          {description}
        </p>
        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-forest-400 font-medium pt-3 border-t border-green-100">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-forest-400" />
            {time}
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-forest-400" />
            Serves {servings}
          </div>
          <div className="flex items-center gap-1.5">
            <ChefHat className="w-3.5 h-3.5 text-forest-400" />
            {difficulty}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
