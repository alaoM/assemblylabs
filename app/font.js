import { Bakbak_One, Bebas_Neue, Inter,  } from "next/font/google";

// Configure Babkak One font


export const Babkak = Bakbak_One({
  weight: "400", // Bakbak One only has one weight
  subsets: ["latin"],
  variable: "--font-babak",
});

export const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const bebas_nue = Bebas_Neue({
  weight: "400", // Bebas Neue only has one weight
  subsets: ["latin"],
  variable: "--font-bebas_nue",
});