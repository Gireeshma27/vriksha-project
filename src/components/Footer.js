import Link from "next/link";
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowRight,
} from "lucide-react";
import NewsletterForm from "./NewsletterForm";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#recipes", label: "Recipes" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
];

const productLinks = [
  { href: "/products/organic-brown-rice-nutrition-mix", label: "Brown Rice Mix" },
  { href: "/products/herbal-rice-health-powder", label: "Herbal Health Powder" },
  { href: "/products/traditional-millet-blend", label: "Millet Blend" },
  { href: "/products/natural-energy-grain-mix", label: "Energy Grain Mix" },
  { href: "/products/protein-rice-porridge-mix", label: "Protein Porridge Mix" },
];

const socialLinks = [
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-forest-800 text-white">
      {/* Newsletter Banner */}
      <div className="bg-forest-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3
                className="text-2xl font-bold text-white mb-1"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Join Our Wellness Community
              </h3>
              <p className="text-white/60 text-sm">
                Get recipes, nutrition tips, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2.5 mb-5">
                <div className="w-10 h-10 bg-forest-500 rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Vriksha
                  </span>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-green-400 -mt-0.5">
                    Nature Nutrition
                  </span>
                </div>
              </Link>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Bringing the purity of nature to your table. Organic, traditional, and lovingly crafted nutrition for daily life.
              </p>
              {/* Social links */}
              <div className="flex gap-3">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 bg-white/10 hover:bg-forest-500 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-green-400 mb-5">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-green-400 mb-5">
                Products
              </h4>
              <ul className="space-y-3">
                {productLinks.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-green-400 mb-5">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-white/60 text-sm leading-relaxed">
                    42, Nature Valley Road,<br />
                    Thrissur, Kerala 680001,<br />
                    India
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-green-400" />
                  </div>
                  <a href="tel:+919400123456" className="text-white/60 hover:text-white text-sm transition-colors">
                    +91 940 012 3456
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-green-400" />
                  </div>
                  <a href="mailto:hello@vriksha.com" className="text-white/60 hover:text-white text-sm transition-colors">
                    hello@vriksha.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © 2026 Vriksha Nature Nutrition. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/70 transition-colors">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
