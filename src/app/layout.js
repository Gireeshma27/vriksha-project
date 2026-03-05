import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Vriksha – Pure Nature, Pure Nutrition",
  description:
    "Discover healthy foods made from natural rice and traditional grains. 100% organic, chemical-free nutrition for daily life.",
  keywords: ["organic food", "natural nutrition", "rice products", "healthy grains", "traditional food"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-cream text-forest-700`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
