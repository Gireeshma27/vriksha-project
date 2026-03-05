"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return subscribed ? (
    <div className="flex items-center gap-3 px-6 py-4 bg-white/15 border border-white/20 rounded-full text-white backdrop-blur-sm">
      <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
        <Check className="w-4 h-4 text-white" />
      </div>
      <span className="text-sm font-medium">
        You&apos;re subscribed! Welcome to the community.
      </span>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="flex gap-3 w-full sm:w-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        required
        className="flex-1 sm:w-72 px-5 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/40 text-sm focus:outline-none focus:border-green-400 focus:bg-white/15 transition-colors"
      />
      <button
        type="submit"
        className="flex items-center gap-2 px-6 py-3 bg-forest-500 hover:bg-forest-400 text-white rounded-full font-semibold text-sm transition-colors whitespace-nowrap"
      >
        Subscribe
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}
